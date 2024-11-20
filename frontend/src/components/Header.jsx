import React from 'react';

function Header() {
  return (
    <>
    <header className="header-box">

      <div className="left-text">Law Tech</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Donate</a>
      </nav>
      <div className="header-buttons">
        <button className="btn search-btn">Search Lawyers</button>
        <button className="btn get-involved-btn">Get Involved</button>
      </div>
    </header>
   </>
  );
}

export default Header;
