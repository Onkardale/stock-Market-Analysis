import { useState } from "react";

function Signup({ setPage }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    birthdate: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const signup = async () => {

    if (!form.name || !form.email || !form.gender || !form.birthdate || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const text = await res.text();

      if (!res.ok) {
        alert(text);
        return;
      }

      alert(text);

      if (text === "Signup successful") {
        setPage("login");
      }

    } catch (err) {
      alert("Server not reachable");
      console.error(err);
    }
  };

  return (
    <div style={signupStyles.page}>
      <h1 style={signupStyles.bgTitle}>Welcome to Stock Market Pro</h1>

      <div style={signupStyles.card}>
        <h2 style={signupStyles.heading}>Create Account</h2>

        <input
          style={signupStyles.input}
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          style={signupStyles.input}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <div style={signupStyles.genderGroup}>
          {["Male", "Female", "Other"].map((g) => (
            <span
              key={g}
              onClick={() => setForm({ ...form, gender: g })}
              style={{
                ...signupStyles.gender,
                ...(form.gender === g ? signupStyles.genderActive : {})
              }}
            >
              {g}
            </span>
          ))}
        </div>

        <input
          type="date"
          style={signupStyles.input}
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
        />

        <input
          type="password"
          style={signupStyles.input}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button style={signupStyles.button} onClick={signup}>
          Signup
        </button>

        <p style={signupStyles.text}>
          Already registered?{" "}
          <span
            style={signupStyles.link}
            onClick={() => setPage("login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const signupStyles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #020617, #065f46)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontFamily: "Segoe UI"
  },
  bgTitle: {
    position: "absolute",
    top: 30,
    fontSize: 34,
    color: "rgba(255,255,255,0.12)",
    fontWeight: "700"
  },
  card: {
    width: 400,
    padding: 28,
    borderRadius: 18,
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 25px 45px rgba(0,0,0,0.6)",
    color: "white",
    textAlign: "center"
  },
  heading: {
    marginBottom: 18,
    fontSize: 26
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    border: "none",
    outline: "none"
  },
  genderGroup: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 14
  },
  gender: {
    padding: "6px 14px",
    borderRadius: 20,
    border: "2px solid #94a3b8",
    cursor: "pointer",
    fontSize: 14
  },
  genderActive: {
    background: "#22c55e",
    borderColor: "#22c55e",
    color: "black"
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #22c55e, #4ade80)",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 10
  },
  text: {
    marginTop: 16,
    fontSize: 14
  },
  link: {
    color: "#4ade80",
    cursor: "pointer",
    fontWeight: "600"
  }
};

export default Signup;
