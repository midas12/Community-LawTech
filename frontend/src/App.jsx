import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import "./App.css";
// Pages
import HomePage from "./components/HomePage";
import Mission from "./components/Mission";
import OurLegalSupport from "./components/OurLegalSupport";
import AboutUs from "./components/AboutUs";
import FindLawyer from "./components/FindLawyer";
import ServicePage from "./components/ServicePage";
import SupportOurMission from "./components/SupportOurMission";

// Formz
import LawyerOnboardingForm from "./components/LawyerOnboardingForm";
import LawyerRegistrationForm from "./components/LawyerRegistrationForm";
import UserPreferencesForm from "./components/UserPreferencesForm";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import AdminManageLawyers from "./components/AdminManageLawyers";
import AdminLoginForm from "./components/AdminLoginForm";
import LawyerHomePage from "./components/LawyerHomePage";
import LawyerLogin from "./components/LawyerLogin";
import ImmigrationSupportPage from "./components/ImmigrationSupportPage";
import EmploymentServicePage from "./components/EmploymentServicePage";
import HousingSupportPage from "./components/HousingSupportPage";
import DonatePage from "./components/DonatePage";
import GoogleTranslate from "./components/GoogleTranslate";
import ClientFeedbackForm from "./components/ClientFeedackForm";
const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/lawyers" element={<AdminManageLawyers />} />
          <Route path="/Admin/login" element={<AdminLoginForm/>} />
          <Route path="/mission" element={<Mission />} />


          <Route path="/our-legal-support" element={<OurLegalSupport />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/find-lawyer" element={<FindLawyer />} />
          <Route path="/support-our-mission" element={<SupportOurMission />} />
          <Route path="/lawyer-onboarding" element={<LawyerOnboardingForm />} />
          <Route path="/lawyer-registration" element={<LawyerRegistrationForm />} />
          <Route path="/user-preferences" element={<UserPreferencesForm />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/lawyer-home" element={<LawyerHomePage />} />
          <Route path="/lawyer-login" element={<LawyerLogin />} />
          <Route path="/immigration" element={<ImmigrationSupportPage/>} />
          <Route path="/housing" element={<HousingSupportPage/>} />
          <Route path="/employment" element={<EmploymentServicePage/>} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/google-translate" element={<GoogleTranslate />} />
          <Route path="/client-feedback" element={<ClientFeedbackForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
