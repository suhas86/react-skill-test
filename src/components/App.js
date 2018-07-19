import React, { Component } from 'react';
import Login from "./Login"
import Dashboard from "./Dashboard"
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard"  component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
