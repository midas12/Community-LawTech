import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import OurLegalSupport from './components/OurLegalSupport';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/services" component={OurLegalSupport} />
      </Switch>
    </Router>
  );
}

export default App;
