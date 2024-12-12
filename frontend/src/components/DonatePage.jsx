import React, { useState } from "react";
import "./DonatePage.css";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! You've donated $${donationAmount}.`);
  };

  return (
    <div className="page-container">
      <header className="first">
        <h1>Donate Now</h1>
        <p>Your contribution helps us make a difference!</p>
        <form className="donation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="donation">Donation Amount (£)</label>
            <input
              type="number"
              id="donation"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Donate
          </button>
        </form>
      </header>
    </div>
  );
};

export default DonatePage;
