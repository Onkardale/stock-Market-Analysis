import { useState } from "react";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const text = await res.text();

    if (text === "Login successful") {
      setPage("home");
    } else {
      alert(text);
    }
  };

  return (
    <div className="container" style={{ padding: 30 }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={login}>Login</button>

      <p>
        New user?{" "}
        <button onClick={() => setPage("signup")}>
          Signup
        </button>
      </p>
    </div>
  );
}

export default Login;
