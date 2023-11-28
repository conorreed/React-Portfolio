// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ResumePage from './ResumePage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={ResumePage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
