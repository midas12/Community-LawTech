import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import LawyerRegistrationForm from "./LawyerRegistrationForm"; 

function Header() {
  //const [showForm, setShowForm] = useState(false); // State to toggle the form
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetInvolvedClick = () => {
    // Navigate to the Lawyer Registration page
    navigate('/LawyerRegistrationForm');
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      <header className="header-box fixed-top bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center p-3">
          <div className="left-text fw-bold fs-3">Law Tech</div>

          <nav className="nav">
            <a href="#home" className="nav-link text-white" onClick={handleHomeClick}>Home</a> {/* Updated Home link */}
            <a href="#about" className="nav-link text-white">
              About Us
            </a>
            <a href="#services" className="nav-link text-white">
              Services
            </a>
            <a href="#contact" className="nav-link text-white">
              Donate
            </a>
          </nav>

          <div className="header-buttons">
            <button className="btn btn-primary me-2">Search Lawyers</button>
            <button className="btn btn-outline-light" onClick={handleGetInvolvedClick}>
              Get Involved
            </button>
          </div>
        </div>
      </header>
      {/* {showForm && (
        <div className="form-container">
        <LawyerRegistrationForm /> 
        </div>
      )} */}
    </>
  );
}

export default Header;
