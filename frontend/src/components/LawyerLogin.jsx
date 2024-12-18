import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../Api/axiosInstance"; // For backend communication
import "../App.css"; // Centralized styling

const LawyerLogin = ({ setShowForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/lawyer-registration");
    setShowForm(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      toast.error("Invalid email or password");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email) || !validatePassword(password)) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });
      toast.success("Login successful!");
      localStorage.setItem("token", response.data.token); // Store token for authenticated routes
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("You don't have an account");
      } else {
        toast.error(error.response?.data?.message || "Invalid email or password");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear the error message as the user types
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear the error message as the user types
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const hasLowerCase = /[a-z]/;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password)) {
      setPasswordError("Password must be at least 8 characters long.");
      return false;
    }
    if (!hasLowerCase.test(password)) {
      setPasswordError("Password must include at least one lowercase letter.");
      return false;
    }
    if (!hasUpperCase.test(password)) {
      setPasswordError("Password must include at least one uppercase letter.");
      return false;
    }
    if (!hasNumber.test(password)) {
      setPasswordError("Password must include at least one number.");
      return false;
    }
    if (!hasSpecialChar.test(password)) {
      setPasswordError("Password must include at least one special character.");
      return false;
    }

    return true;
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span className="toggle-password"></span>
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
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
          <button type="submit" className="log-in-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
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
        <img src="/assets/images/homepageImage.jpg" alt="Login" />
      </div>
    </div>
  );
};

export default LawyerLogin;
