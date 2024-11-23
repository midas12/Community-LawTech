import './App.css'; 
import LawyerOnboardingForm from './components/LawyerOnboarding';
import LawyerSignupForm from './components/LawyerSignu';
import Header from './components/Header';
import Footer from './components/Footer';
import UserPreferencesForm from './components/UserPreferencesForm';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Header />
        <LawyerSignupForm />
        <LawyerOnboardingForm />
        <UserPreferencesForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
