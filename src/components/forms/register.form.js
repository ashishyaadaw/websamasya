import { useState } from "react";
import axios from "axios";
import "./login.and.register.css";
export default function RegisterForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", inputs.email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-register container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={handleChange}
            value={inputs.username || ""}
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            value={inputs.email || ""}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={inputs.password || ""}
            name="password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
