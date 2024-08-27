import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../components/firebase";
import '../styles/Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/todo";
  alert('login succesfull!')
    } catch (error) {
      alert(error.message);

    //   toast.error(error.message, {
    //     position: "bottom-center",
    //   });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="label">Login</h3>

      <div className="mb-3">
        <label className="label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        <span className="label">New user</span> <a href="/register">Register Here</a>
      </p>
    </form>
  );
}

export default Login;