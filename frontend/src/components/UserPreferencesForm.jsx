import React, { useState } from "react";
import axiosInstance from "../Api/axiosInstance";
import "../App.css";

const FindLawyer = () => {
  const [postcode, setPostcode] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [preferences, setPreferences] = useState({
    field: "",
    language: "",
    religion: "",
    nationality: "",
    gender: "",
  });
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [mapUrl, setMapUrl] = useState("");

  // Handle input changes for preferences
  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch lawyers based on postcode and preferences
  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get("/lawyers/search", {
        params: {
          postcode,
          ...preferences,
        },
      });
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

  return (
    <div className="find-lawyer">
      <h1>Find a Lawyer</h1>

      {/* Postcode Search */}
      <div className="search-section">
        <label>Enter Postcode</label>
        <input
          type="text"
          placeholder="Enter Postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Preferences */}
      <div className="preferences-section">
        <label>Select Field</label>
        <select
          name="field"
          value={preferences.field}
          onChange={handlePreferenceChange}
        >
          <option value="">Select Field</option>
          <option value="immigration">Immigration</option>
          <option value="housing">Housing</option>
          <option value="employment">Employment</option>
        </select>

        <label>Preferred Language</label>
        <select
          name="language"
          value={preferences.language}
          onChange={handlePreferenceChange}
        >
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="swahili">Swahili</option>
          {/* Add more languages as needed */}
        </select>

        <label>Religion</label>
        <input
          type="text"
          name="religion"
          placeholder="Enter Religion"
          value={preferences.religion}
          onChange={handlePreferenceChange}
        />

        <label>Nationality</label>
        <input
          type="text"
          name="nationality"
          placeholder="Enter Nationality"
          value={preferences.nationality}
          onChange={handlePreferenceChange}
        />

        <label>Gender</label>
        <select
          name="gender"
          value={preferences.gender}
          onChange={handlePreferenceChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Lawyer List */}
      <div className="lawyer-list">
        {lawyers.length > 0 ? (
          lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="lawyer-card"
              onClick={() => handleLawyerSelect(lawyer)}
            >
              <h3>{lawyer.name}</h3>
              <p>{lawyer.specialisation.join(", ")}</p>
              <p>Distance: {lawyer.distance} miles</p>
            </div>
          ))
        ) : (
          <p>No lawyers found. Try adjusting your preferences or searching another postcode.</p>
        )}
      </div>

      {/* Selected Lawyer Modal */}
      {selectedLawyer && (
        <div className="modal">
          <h2>Book Lawyer: {selectedLawyer.name}</h2>
          <p>Specialisation: {selectedLawyer.specialisation.join(", ")}</p>
          <p>Distance: {selectedLawyer.distance} miles</p>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            View Directions on Google Maps
          </a>
          <button onClick={() => setSelectedLawyer(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FindLawyer;
