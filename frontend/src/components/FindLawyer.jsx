import React, { useState } from "react";
import axiosInstance from "../Api/axiosInstance";
import "../App.css";

const FindLawyer = () => {
  const [step, setStep] = useState(0); // Tracks the current step in the filtering process
  const [postcode, setPostcode] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [message, setMessage] = useState("");
  const [preferences, setPreferences] = useState({
    field: "",
    language: "",
    religion: "",
    nationality: "",
    gender: "",
  });
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [mapUrl, setMapUrl] = useState("");

  const languages = [
    "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani",
    "Bengali", "Bosnian", "Bulgarian", "Catalan", "Cebuano", "Chinese",
    "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian",
    "Finnish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati",
    "Haitian Creole", "Hausa", "Hebrew", "Hindi", "Hungarian", "Icelandic",
    "Igbo", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada",
    "Kazakh", "Khmer", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian",
    "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay",
    "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Nepali",
    "Norwegian", "Odia", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi",
    "Romanian", "Russian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho",
    "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish",
    "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu",
    "Thai", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek",
    "Vietnamese", "Welsh", "Xhosa", "Yoruba",
  ].sort();

  const nationalities = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan",
    "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bangladeshi",
    "Barbadian", "Belgian", "Brazilian", "British", "Bulgarian", "Canadian",
    "Chinese", "Colombian", "Croatian", "Cuban", "Danish", "Dutch", "Egyptian",
    "Filipino", "Finnish", "French", "German", "Ghanaian", "Greek", "Indian",
    "Indonesian", "Irish", "Italian", "Japanese", "Korean", "Mexican", "Nepalese",
    "Nigerian", "Norwegian", "Pakistani", "Polish", "Portuguese", "Romanian",
    "Russian", "Saudi", "South African", "Spanish", "Sri Lankan", "Swedish",
    "Swiss", "Thai", "Turkish", "Ukrainian", "Vietnamese", "Zambian", "Zimbabwean",
  ].sort();

  const handleSearch = async () => {
    if (!postcode.trim()) {
      alert("Please enter a valid postcode.");
      return;
    }
    setStep(1); // Show the first filter
  };

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSkip = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const fetchLawyers = async () => {
    try {
      const response = await axiosInstance.get(`/lawyers/search?postcode=${postcode}`);
      if (response.data.length > 0) {
        setMessage("Lawyers found!");
        setLawyers(response.data);
        setStep(2);
      } else {
        setMessage("No matching lawyer! Filter your search again.");
      }
    } catch (error) {
      console.error("Error fetching lawyers:", error);
      setMessage("Error fetching lawyers. Try again later.");
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

      {/* Step 0: Postcode Input */}
      {step === 0 && (
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
      )}

      {/* Step 1: Field Selection */}
      {step === 1 && (
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
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {/* Step 2: Language Selection */}
      {step === 2 && (
        <div className="preferences-section">
          <label>Preferred Language</label>
          <select
            name="language"
            value={preferences.language}
            onChange={handlePreferenceChange}
          >
            <option value="">Select Language</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          <button onClick={handleNextStep}>Next</button>
          <button onClick={handleSkip}>Skip</button>
        </div>
      )}

      {/* Step 3: Religion Input */}
      {step === 3 && (
        <div className="preferences-section">
          <label>Religion</label>
          <input
            type="text"
            name="religion"
            placeholder="Enter Religion"
            value={preferences.religion}
            onChange={handlePreferenceChange}
          />
          <button onClick={handleNextStep}>Next</button>
          <button onClick={handleSkip}>Skip</button>
        </div>
      )}

      {/* Step 4: Nationality Selection */}
      {step === 4 && (
        <div className="preferences-section">
          <label>Nationality</label>
          <select
            name="nationality"
            value={preferences.nationality}
            onChange={handlePreferenceChange}
          >
            <option value="">Select Nationality</option>
            {nationalities.map((nationality) => (
              <option key={nationality} value={nationality}>
                {nationality}
              </option>
            ))}
          </select>
          <button onClick={handleNextStep}>Next</button>
          <button onClick={handleSkip}>Skip</button>
        </div>
      )}

      {/* Step 5: Gender Selection */}
      {step === 5 && (
        <div className="preferences-section">
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
          <button onClick={fetchLawyers}>Search Lawyers</button>
          <button onClick={handleSkip}>Skip</button>
        </div>
      )}

      {/* Lawyer List */}
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

      {/* Selected Lawyer Modal */}
      {selectedLawyer && (
        <div className="modal">
          <h2>Book Lawyer: {selectedLawyer.name}</h2>
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
