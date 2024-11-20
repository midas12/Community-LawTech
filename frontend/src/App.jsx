import './App.css'; // Import global styles here
import LawyerOnboardingForm from './components/LawyerOnboarding';
import LawyerSignupForm from './components/LawyerSignu';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      {/* <LawyerSignupForm />
      <LawyerOnboardingForm /> */}
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


      
    <footer className="footer-box">
        <hr className="footer-line" />
        <div className="footer-text">
          <p className="copyright-text">
            © {new Date().getFullYear()} Law Tech. All rights reserved.
          </p>
          <a href="#terms" className="terms-link">Terms of Service</a>
          <a href="#terms" className="privacy-link">Privacy Policy</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
