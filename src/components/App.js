import React, { Component } from 'react';
import Login from "./Login"
import Dashboard from "./Dashboard"
import Results from "./Results"
import TakeTest from "./TakeTest"
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/results"  component={Results} />
          <Route path="/take-test/:id"  component={TakeTest} />
        </Switch>
      </Router>
    );
  }
}

export default App;
