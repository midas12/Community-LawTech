import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./components/HomePage";
import Mission from "./components/Mission";
import OurLegalSupport from "./components/OurLegalSupport";
import AboutUs from "./components/AboutUs";
import FindLawyer from "./components/FindLawyer";
import SupportOurMission from "./components/SupportOurMission";

// Formz
import LawyerOnboardingForm from "./components/LawyerOnboardingForm";
import LawyerRegistrationForm from "./components/LawyerRegistrationForm";
import UserPreferencesForm from "./components/UserPreferencesForm";
import Login from "./components/Login";

const App = () => {

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
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
