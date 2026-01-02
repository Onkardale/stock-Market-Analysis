import { useState } from "react";

function Signup({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    birthdate: "",
    password: ""
  });

  const validateForm = () => {
    if (!form.name || !form.email || !form.gender || !form.birthdate || !form.password) {
      alert("All fields are required");
      return false;
    }

    if (!form.email.includes("@")) {
      alert("Email must contain @");
      return false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(form.password)) {
      alert(
        "Password must have:\n• 1 Capital letter\n• 1 Number\n• 1 Symbol\n• Min 8 characters"
      );
      return false;
    }

    return true;
  };

  const signup = async () => {
    if (!validateForm()) return;

    const res = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const text = await res.text();
    alert(text);

    if (text === "Signup successful") {
      setPage("login");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>

      <input
        style={styles.input}
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        style={styles.input}
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      {/* Gender */}
      <div style={styles.genderGroup}>
        {["Male", "Female", "Other"].map((g) => (
          <label key={g} style={styles.genderOption}>
            <input
              type="radio"
              name="gender"
              value={g}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              style={{ display: "none" }}
            />
            <span
              style={{
                ...styles.genderSpan,
                ...(form.gender === g ? styles.genderActive : {})
              }}
            >
              {g}
            </span>
          </label>
        ))}
      </div>

      <input
        style={styles.input}
        type="date"
        onChange={(e) => setForm({ ...form, birthdate: e.target.value })}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button style={styles.button} onClick={signup}>
        Signup
      </button>

      <p>
        Already registered?{" "}
        <button style={styles.linkBtn} onClick={() => setPage("login")}>
          Login
        </button>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 350,
    margin: "50px auto",
    padding: 25,
    border: "1px solid #ddd",
    borderRadius: 8,
    textAlign: "center",
    fontFamily: "Arial"
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 12
  },
  genderGroup: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 12
  },
  genderOption: {
    cursor: "pointer"
  },
  genderSpan: {
    padding: "6px 14px",
    border: "2px solid #ccc",
    borderRadius: 20,
    fontSize: 14
  },
  genderActive: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
    color: "white"
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: 10
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#2563eb",
    cursor: "pointer"
  }
};

export default Signup;
