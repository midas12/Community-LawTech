import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer className="footer-box">
      <hr className="footer-line" />
      <div className="footer-text">
        <p className="copyright-text">
          © {new Date().getFullYear()} Law Tech. All rights reserved.
        </p>
        <Link to="/terms" className="terms-link">Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;
