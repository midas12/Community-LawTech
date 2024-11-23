import './App.css'; 
import LawyerOnboardingForm from './components/LawyerOnboarding';
import LawyerSignupForm from './components/LawyerSignup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserPreferencesForm from './components/UserPreferencesForm';

import OurLegalSupport from './components/OurLegalSupport';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <LawyerSignupForm />
          <LawyerOnboardingForm />
          <UserPreferencesForm />
        </div>
        <Footer />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/services" component={OurLegalSupport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
