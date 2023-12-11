import React, { useState } from "react";
import "./LoginRegistration.css";

function LoginRegistration() {
  const [state, setState] = useState("Register");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{state}</div>
      </div>
      <div className="inputs">
        {state === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input type="text" placeholder="First Name"></input>
          </div>
        )}

        {state === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input type="text" placeholder="Last Name"></input>
          </div>
        )}

        <div className="input">
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="input">
          <input type="password" placeholder="Password"></input>
        </div>

        {state === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <input type="text" placeholder="Address"></input>
          </div>
        )}
      </div>
      <div className="submit-container">
        <div
          className={state === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setState("Register");
          }}
        >
          Register
        </div>
        <div
          className={state === "Register" ? "submit gray" : "submit"}
          onClick={() => {
            setState("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
