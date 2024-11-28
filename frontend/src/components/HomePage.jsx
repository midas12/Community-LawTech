import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import LawyerRegistrationForm from "./LawyerRegistrationForm"; // Import the form component
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import Chatbot from "react-chatbot-kit"; // Import the Chatbot
import "react-chatbot-kit/build/main.css"; // Import Chatbot styles

const HomePage = () => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility

  const navigate = useNavigate(); // Initialize navigate function for routing

  const handleFindLawyersClick = () => {
    navigate('/find-lawyer'); // Navigate to the Find Lawyer page
  };

  return (
    <>
      {/* Header always renders */}
      <Header setShowForm={setShowForm} />

      {/* Conditional Rendering: Show homepage content if showForm is false */}
      {!showForm && (
        <section className="hero">
          <div className="container hero-content">
            <h2>Offering Free Legal Support To Marginalised Communities </h2>
            <p>
              CLawT will link you to a lawyer that speaks the same language you
              speak, from the same cultural or ethnic background like you and
              one who understands your journey and can effectively support you
              without judging you.
            </p>
            <div className="hero-buttons">
              {/* Trigger Find Lawyer Page Navigation */}
              <button
                className="btn btn-primary"
                onClick={handleFindLawyersClick}
              >
                Find Lawyers
              </button>
              <button className="btn btn-outline-secondary">Donate Now</button>
            </div>
            <button
              onClick={() => setShowChatbot(!showChatbot)}
              className="chatbot-button"
            >
              {showChatbot ? "Close Chatbot" : "Open Chatbot"}
            </button>
          </div>

          {/* Chatbot conditional rendering */}
          {showChatbot && <Chatbot />}

          <div className="job-adverts">
            <h2>Join Us</h2>
            <p>We are always looking for passionate individuals to help us.</p>
            <button className="btn btn-primary">View Positions</button>
          </div>
        </section>
      )}

      {/* Display LawyerRegistrationForm if showForm is true */}
      {showForm && <LawyerRegistrationForm />}
    </>
  );
};

export default HomePage;
