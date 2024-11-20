import React from 'react';

function Footer() {
    return(
<footer className="footer-box">
        <hr className="footer-line" />
        <div className="footer-text">
          <p className="copyright-text">
            © {new Date().getFullYear()} Law Tech. All rights reserved.
          </p>
          <a href="#terms" className="terms-link">Terms of Service</a>
        </div>
      </footer>
    
    );
}
