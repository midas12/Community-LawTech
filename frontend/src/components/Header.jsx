import "../App.css"; // Import the central CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Law Tech Firm</div>
        <nav className="navigation">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#search">Search Lawyers</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="btn btn-outline-primary">Search Lawyers</button>
          <button className="btn btn-primary">Get Involved</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
