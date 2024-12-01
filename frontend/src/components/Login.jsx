import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setShowForm }) => {
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    navigate("/lawyer-registration"); // Programmatically navigate
    setShowForm(true); // Set form visibility if needed
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="form-title">Login</h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="input-field" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input type="password" className="input-field" />
              <span className="toggle-password"></span>
            </div>
          </div>
          <div className="form-actions">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        <p className="signup-link">
          Don’t have an account?{" "}
          <a href="/signup" onClick={handleSignupClick}>
            Sign up
          </a>
        </p>
      </div>
      <div className="login-image">
        <image src="/assets/images/homepageImage.jpg" />
      </div>
    </div>
  );
};

export default Login;
