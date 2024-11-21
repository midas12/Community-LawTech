import './App.css'; // Import global styles here
import LawyerOnboardingForm from './components/LawyerOnboarding';
import LawyerSignupForm from './components/LawyerSignu';
import Header from './components/Header';

function App() {
  return (
    <div>
      <LawyerSignupForm />
      <LawyerOnboardingForm />
      <Header />

    </div>
  );
}

export default App;
