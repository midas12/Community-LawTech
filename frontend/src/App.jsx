import './App.css'; 
import LawyerOnboardingForm from './components/LawyerOnboarding';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserPreferencesForm from './components/UserPreferencesForm';
import OurLegalSupport from './components/OurLegalSupport';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lawyer-onboarding" element={<LawyerOnboardingForm />} />
        <Route path="/lawyer-signup" element={<LawyerSignupForm />} />
        <Route path="/user-preferences" element={<UserPreferencesForm />} />
        <Route path="/our-legal-support" element={<OurLegalSupport />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;