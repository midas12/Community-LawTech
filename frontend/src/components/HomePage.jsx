import { useEffect, useState } from "react";
import axiosInstance from '../Api/axiosInstance';  // Correct import path for axiosInstance
import "../App.css";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const HomePage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    axiosInstance.get('/api/endpoint')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  }, []);

  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>Empowering Communities with Legal Support</h2>
        <p>Community LawTech connects you with accredited community lawyers who understand your needs. Our platform offers culturally and linguistically appropriate legal support in areas like immigration, housing, and employment.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Find Lawyers</button>
          <button className="btn btn-outline-secondary">Donate Now</button>
        </div>
        <button onClick={() => setShowChatbot(!showChatbot)} className="chatbot-button">
          {showChatbot ? "Close Chatbot" : "Open Chatbot"}
        </button>
      </div>
      {showChatbot && <Chatbot />}
      <div className="job-adverts">
        <h2>Join Us</h2>
        <p>We are always looking for passionate individuals to help us.</p>
        <button className="btn btn-primary">View Positions</button>
      </div>
    </section>
  );
};

export default HomePage;
