import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [userFirstName, setFirstName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  async function saveUser(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/v1/users/save", {
          address: address,
          email: email,
          userFirstName: userFirstName,
          userLastName: userLastName,
          password: password,
        })
        .then((res) => {
          navigate("/login");
        });
      alert("User Registration Successfully");
    } catch (err) {
      alert("Invalid Email or Incompleted Fields");
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Registration</div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="First Name"
            id="userFirstName"
            value={userFirstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Last Name"
            id="userLastName"
            value={userLastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
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

        <div className="input">
          <input
            type="text"
            placeholder="Address"
            id="address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={saveUser}>
          Register
        </button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
