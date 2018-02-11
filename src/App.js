import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Exercise from './components/Exercise';
import About from './components/About';
import Topics from './components/Topics';

class BasicExample extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Exercise} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default BasicExample;
