import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./components/HomePage";
import Mission from "./components/Mission";
import OurLegalSupport from "./components/OurLegalSupport";
import AboutUs from "./components/AboutUs";
import FindLawyer from "./components/FindLawyer";
import SupportOurMission from "./components/SupportOurMission";
import LoginPage from './components/LoginPage';

// Forms
import LawyerOnboardingForm from "./components/LawyerOnboardingForm";
import LawyerRegistrationForm from "./components/LawyerRegistrationForm";
import UserPreferencesForm from "./components/UserPreferencesForm";

// New Appointment Form Component
function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    reason: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.reason) {
      alert('Please fill in all the fields.');
      return;
    }

    alert(`Appointment booked for ${formData.name} on ${formData.date} for the reason: "${formData.reason}"`);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', date: '', reason: '' }); // Reset the form
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Law Tech Community - Appointment Booking</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {isSubmitted ? (
            <div className="alert alert-success text-center" role="alert">
              Your appointment has been successfully booked!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">Appointment Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="reason" className="form-label">Reason for Appointment</label>
                <textarea
                  className="form-control"
                  id="reason"
                  name="reason"
                  rows="3"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Book Appointment</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/our-legal-support" element={<OurLegalSupport />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/find-lawyer" element={<FindLawyer />} />
          <Route path="/support-our-mission" element={<SupportOurMission />} />
          <Route path="/lawyer-onboarding" element={<LawyerOnboardingForm />} />
          <Route path="/lawyer-registration" element={<LawyerRegistrationForm />} />
          <Route path="/user-preferences" element={<UserPreferencesForm />} />
          <Route path="/login-page" element={<LoginPage />} />
          
          {/* Add route for Appointment Booking */}
          <Route path="/book-appointment" element={<AppointmentForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
