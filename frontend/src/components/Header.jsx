function Header() {
  return (
    <>
      <header className="header-box fixed-top bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center p-3">
          <div className="left-text fw-bold fs-3">Law Tech</div>

          <nav className="nav">
            <a href="#home" className="nav-link text-white">
              Home
            </a>
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
            <button className="btn btn-outline-light">Get Involved</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
