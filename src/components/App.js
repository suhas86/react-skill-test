import React, { Component } from 'react';
import Login from "./Login"
import Dashboard from "./Dashboard"
import Results from "./Results"
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/results"  component={Results} />
        </Switch>
      </Router>
    );
  }
}

export default App;
