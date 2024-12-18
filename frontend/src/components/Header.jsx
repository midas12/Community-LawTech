import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Header({ setShowForm }) {
  const navigate = useNavigate(); // Initialize the navigate function
  const location = useLocation(); // Get the current route location
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = (path) => {
    setShowLoginDropdown(false); // Close the dropdown
    navigate(path); // Navigate to the selected login page
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Do not render the header on the lawyer home page
  if (location.pathname === "/lawyer-home") {
    return null;
  }

  return (
    <header className="header-box fixed-top bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center p-3">
        <div className="logo fw-bold fs-3">Law Tech</div>
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
          <Link to="/service" className="nav-link text-white">
            Service
          </Link>
          <Link to="/about-us" className="nav-link text-white">
            About Us
          </Link>
          <Link to="/donate" className="nav-link text-white">
            Donate
          </Link>
          </nav>

          <div className="header-buttons">
            <button className="btn btn-primary me-2" onClick={() => navigate("/find-lawyer")}>
              Search Lawyers
            </button>
            <button className="btn btn-outline-light me-2" onClick={() => navigate("/lawyer-registration")}>
              Get Involved
            </button>

            {/* Login Dropdown */}
            <div className="dropdown">
              <button className="btn btn-login dropdown-toggle" onClick={() => setShowLoginDropdown(!showLoginDropdown)}>
                Login
              </button>
              {showLoginDropdown && (
                <div className="dropdown-menu dropdown-menu-right show">
                  <button 
                  className="dropdown-item" onClick={() => handleLoginClick("/login")}>
                    User Login
                  </button>
                  <button className="dropdown-item" onClick={() => handleLoginClick("/admin/login")}>
                    Admin Login
                  </button>
                  <button className="dropdown-item" onClick={() => handleLoginClick("/lawyer-login")}>
                    Lawyer Login
                  </button>
                  <button className="dropdown-item" onClick={() => handleLoginClick("/funders-login")}>
                    Funders Login
                  </button>
                </div>
              )}
            </div>
          </div>

        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
