import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../components/AuthWrapper";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { email: "", password: "" }
  );

  async function doLogin() {
    try {
      await login(formData.email, formData.password);
      navigate("/home");
    } catch (error) {}
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
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
          />
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={doLogin}>
          Login
        </button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="submit" text-decoration="none">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
