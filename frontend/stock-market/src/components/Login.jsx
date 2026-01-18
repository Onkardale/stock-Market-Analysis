import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setUserEmail }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();

      if (text === "Login successful") {
        setIsLoggedIn(true);
        setUserEmail(email);
        navigate("/");
      } else {
        alert(text);
      }
    } catch (error) {
      alert("Failed to login. Please try again later.");
    }
  };

  return (
    <div style={loginStyles.page}>
      <h1 style={loginStyles.bgTitle}>Welcome to Stock Market Pro</h1>

      <div style={loginStyles.card}>
        <h2 style={loginStyles.heading}>Login</h2>

        <input
          style={loginStyles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={loginStyles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={loginStyles.button} onClick={login}>
          Login
        </button>

        <p style={loginStyles.text}>
          New user?{" "}
          <span style={loginStyles.link} onClick={() => navigate("/signup")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

const loginStyles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #020617, #1e3a8a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontFamily: "Segoe UI"
  },
  bgTitle: {
    position: "absolute",
    top: 40,
    fontSize: 36,
    color: "rgba(255,255,255,0.15)",
    letterSpacing: 2,
    fontWeight: "700"
  },
  card: {
    width: 380,
    padding: 30,
    borderRadius: 16,
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
    color: "white"
  },
  heading: {
    marginBottom: 20,
    fontSize: 26
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    border: "none",
    outline: "none",
    fontSize: 14
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 10
  },
  text: {
    marginTop: 18,
    fontSize: 14
  },
  link: {
    color: "#38bdf8",
    cursor: "pointer",
    fontWeight: "600"
  }
};

export default Login;
