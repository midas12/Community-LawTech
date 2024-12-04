import React, { useState } from "react";
import axiosInstance from "../Api/axiosInstance";
import "../App.css";

const religionList = [
  "Christianity", "Islam", "Hinduism", "Buddhism", "Judaism", "Sikhism", "Bahá'í Faith", 
  "Jainism", "Shinto", "Zoroastrianism", "Taoism", "Confucianism", "Paganism", "Wicca", 
  "Rastafarianism"
];

const nationalityList = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", 
  "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", 
  "Bangladeshi", "Barbadian", "Belgian", "Brazilian", "British", 
  "Bulgarian", "Canadian", "Chinese", "Colombian", "Croatian", 
  "Cuban", "Danish", "Dutch", "Egyptian", "Filipino", "Finnish", 
  "French", "German", "Ghanaian", "Greek", "Indian", "Indonesian", 
  "Irish", "Italian", "Japanese", "Korean", "Mexican", "Nepalese", 
  "Nigerian", "Norwegian", "Pakistani", "Polish", "Portuguese", 
  "Romanian", "Russian", "Saudi", "South African", "Spanish", 
  "Sri Lankan", "Swedish", "Swiss", "Thai", "Turkish", "Ukrainian", 
  "Vietnamese", "Zambian", "Zimbabwean"
].sort();

const languageList = [
  "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Bengali", 
  "Bosnian", "Bulgarian", "Catalan", "Cebuano", "Chinese", "Croatian", "Czech", 
  "Danish", "Dutch", "English", "Esperanto", "Estonian", "Finnish", "French", 
  "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", 
  "Hebrew", "Hindi", "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish", 
  "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", 
  "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian", "Luxembourgish", 
  "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", 
  "Mongolian", "Nepali", "Norwegian", "Odia", "Pashto", "Persian", "Polish", 
  "Portuguese", "Punjabi", "Romanian", "Russian", "Samoan", "Scots Gaelic", 
  "Serbian", "Sesotho", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", 
  "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", 
  "Tatar", "Telugu", "Thai", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", 
  "Uzbek", "Vietnamese", "Welsh", "Xhosa", "Yoruba"
].sort();

const FindLawyer = () => {
  const [postcode, setPostcode] = useState("");
  const [filterStage, setFilterStage] = useState(1);
  const [filters, setFilters] = useState({
    field: "",
    language: "",
    religion: "",
    nationality: "",
    gender: "",
  });
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [mapUrl, setMapUrl] = useState("");

  const fields = ["Corporate Law", "Criminal Law", "Family Law", "Property Law", "Immigration", "Housing", "Employment"];
  const genders = ["Male", "Female", "Non-binary", "Other"];

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(`/lawyers/search?postcode=${postcode}`);
      setLawyers(response.data);
      setFilterStage(2);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextFilter = () => {
    if (filterStage < 6) setFilterStage(filterStage + 1);
  };

  const handleFormSubmit = () => {
    console.log("Selected Filters:", filters);
    console.log("Filtered Lawyers:", lawyers);
    alert("Filters applied! Check console for details.");
  };

  return (
    <div className="find-lawyer">
      <h1>Find Your Lawyer</h1>

      {/* Search by Postcode */}
      {filterStage === 1 && (
        <div className="filter-stage">
          <h2>Enter Your Postcode</h2>
          <input
            type="text"
            placeholder="Enter Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}

      {/* Filter by Field */}
      {filterStage === 2 && (
        <div className="filter-stage">
          <h2>Select Field</h2>
          <select name="field" value={filters.field} onChange={handleFilterChange}>
            <option value="">Select Field</option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          <button onClick={handleNextFilter}>Next</button>
        </div>
      )}

      {/* Filter by Language */}
      {filterStage === 3 && (
        <div className="filter-stage">
          <h2>Select Language</h2>
          <select name="language" value={filters.language} onChange={handleFilterChange}>
            <option value="">Select Language</option>
            {languageList.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          <button onClick={handleNextFilter}>Next</button>
        </div>
      )}

      {/* Filter by Religion */}
      {filterStage === 4 && (
        <div className="filter-stage">
          <h2>Select Religion</h2>
          <select name="religion" value={filters.religion} onChange={handleFilterChange}>
            <option value="">Select Religion</option>
            {religionList.map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>
          <button onClick={handleNextFilter}>Next</button>
        </div>
      )}

      {/* Filter by Nationality */}
      {filterStage === 5 && (
        <div className="filter-stage">
          <h2>Select Nationality</h2>
          <select name="nationality" value={filters.nationality} onChange={handleFilterChange}>
            <option value="">Select Nationality</option>
            {nationalityList.map((nationality) => (
              <option key={nationality} value={nationality}>
                {nationality}
              </option>
            ))}
          </select>
          <button onClick={handleNextFilter}>Next</button>
        </div>
      )}

      {/* Filter by Gender */}
      {filterStage === 6 && (
        <div className="filter-stage">
          <h2>Select Gender</h2>
          <select name="gender" value={filters.gender} onChange={handleFilterChange}>
            <option value="">Select Gender</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          <button onClick={handleFormSubmit}>Apply Filters</button>
        </div>
      )}

      {/* Display Lawyer Results */}
      {lawyers.length > 0 && (
        <div className="lawyer-list">
          <h2>Available Lawyers</h2>
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="lawyer-card"
              onClick={() => handleLawyerSelect(lawyer)}
            >
              <h3>{lawyer.name}</h3>
              <p>Field: {lawyer.specialisation.join(", ")}</p>
              <p>Distance: {lawyer.distance} miles</p>
            </div>
          ))}
        </div>
      )}

      {/* Google Map for Selected Lawyer */}
      {selectedLawyer && (
        <div className="modal">
          <h2>Book Lawyer: {selectedLawyer.name}</h2>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            View Directions on Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

export default FindLawyer;
