import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/v1/users/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message === "Login Success") {
              navigate("/home");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
