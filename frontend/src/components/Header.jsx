import React from "react";
import { useNavigate } from "react-router-dom";
import LawyerRegistrationForm from "./LawyerRegistrationForm"; // Import the form component

function Header({ setShowForm }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetInvolvedClick = () => {
    setShowForm(true); // Show the form when clicked
  };

  const handleHomeClick = () => {
    setShowForm(false); // Hide the form and show the homepage content
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      <header className="header-box fixed-top bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center p-3">
          <div className="logo fw-bold fs-3">Law Tech</div>

          <nav className="nav">
            <a href="#home" className="nav-link text-white" onClick={handleHomeClick}>
              Home
            </a>
            <a href="#about" className="nav-link text-white">About Us</a>
            <a href="#services" className="nav-link text-white">Services</a>
            <a href="#contact" className="nav-link text-white">Donate</a>
          </nav>

          <div className="header-buttons">
            <button className="btn btn-primary me-2">Search Lawyers</button>
            <button className="btn btn-outline-light" onClick={handleGetInvolvedClick}>
              Get Involved
            </button>
            <button className="btn btn-login">Login</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
