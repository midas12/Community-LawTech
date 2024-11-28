import { useNavigate, Link } from "react-router-dom";

function Header({ setShowForm }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetInvolvedClick = () => {
    setShowForm(true); // Show the form when clicked
  };

  return (
    <header className="header-box fixed-top bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center p-3">
        <div className="logo fw-bold fs-3">Law Tech</div>

        <nav className="nav">
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
          <button className="btn btn-login" onClick={() => navigate("/log-in")}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
