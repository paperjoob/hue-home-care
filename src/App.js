import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Employment from './components/Employment';
import Services from './components/Services';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavBar />
            <Switch>
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/employment" component={Employment} />
              <Route exact path="/contactus" component={ContactUs} />
            </Switch>
            <Footer />
        </div>
      </Router>
    )
  }
};

export default App;

