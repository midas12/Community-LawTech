import { useState } from "react";
import axiosInstance from '../Api/axiosInstance';
import "../App.css";

const FindLawyer = () => {
  const [postcode, setPostcode] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    caseType: "",
    caseDescription: "",
    password: "",
    confirmPassword: "",
  });

  const [mapUrl, setMapUrl] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(`/lawyers/search?postcode=${postcode}`);
      setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const handleLawyerSelect = (lawyer) => {
    setSelectedLawyer(lawyer);
    const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${lawyer.location.lat},${lawyer.location.lng}`;
    setMapUrl(mapLink);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("User Form Data:", userForm);
    alert("Profile created successfully!");
    setSelectedLawyer(null); // Close the modal
  };

  return (
    <div className="find-lawyer">
      <h1>Find Your Lawyer Easily</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Enter Postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="lawyer-list">
        {lawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="lawyer-card"
            onClick={() => handleLawyerSelect(lawyer)}
          >
            <h3>{lawyer.name}</h3>
            <p>{lawyer.specialisation.join(", ")}</p>
            <p>Distance: {lawyer.distance} miles</p>
          </div>
        ))}
      </div>
      {selectedLawyer && (
        <div className="modal">
          <h2>Book Lawyer: {selectedLawyer.name}</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={userForm.firstName}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userForm.lastName}
              onChange={handleFormChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={userForm.mobile}
              onChange={handleFormChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userForm.email}
              onChange={handleFormChange}
              required
            />
            <select
              name="caseType"
              value={userForm.caseType}
              onChange={handleFormChange}
              required
            >
              <option value="">Select Case Type</option>
              <option value="Immigration">Immigration</option>
              <option value="Housing">Housing</option>
              <option value="Employment">Employment</option>
            </select>
            <textarea
              name="caseDescription"
              placeholder="Case Description"
              value={userForm.caseDescription}
              onChange={handleFormChange}
              required
            ></textarea>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userForm.password}
              onChange={handleFormChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userForm.confirmPassword}
              onChange={handleFormChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            View Directions on Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

export default FindLawyer;
