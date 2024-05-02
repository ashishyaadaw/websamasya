import { useState } from "react";
import React from "react";
import "./login.and.register.css";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email_id: email,
      user_password: password,
    };
    alert(
      `the user want to login with email:${data.email_id} password:${data.user_password}`
    );
  }
  return (
    <div className="container-login container">
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
