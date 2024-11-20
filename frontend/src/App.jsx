import './App.css'; // Import global styles here
import LawyerOnboardingForm from './components/LawyerOnboarding';
import LawyerSignupForm from './components/LawyerSignu';
function App() {
  return (
    <div>
      <LawyerSignupForm />
      <LawyerOnboardingForm />
    </div>
  );
}

export default App;
