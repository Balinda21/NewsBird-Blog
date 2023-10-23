import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Adminx from "./Admin";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    axios
      .post("https://blog-6hj4.onrender.com/api/user/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        alert("success logged in");
        localStorage.setItem("token", result.data.token);
        navigate("/Admin"); // Use navigate to redirect after successful login
      })
      .catch((error) => {
        alert("incorrect password");
        console.log(error);
      });
  };

  return (
    <div className="container_login">
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form action="#">
          <div className="form-control">
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              required
            ></input>
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              required
            ></input>
            <label>Password</label>
          </div>
          <button className="login-button" onClick={handleApi}>
            Sign in
          </button>

          <div className="form-help"></div>
        </form>
        <p>
          <Link to="/Signup">
            New to NewsBird? <span className="reg">Register here</span>
          </Link>
          {/* <Link to="/Admin">
            <i>
              <p>Admin</p>
            </i>
          </Link> */}
        </p>
      </div>
    </div>
  );
}
