import React, { Component } from 'react';
import {connect} from "react-redux"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Results from "./Results"
import TakeTest from "./TakeTest"
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
class App extends Component {
  render() {
    const {token} = this.props;
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/dashboard"  component={Dashboard} auth={token} />
          <PrivateRoute path="/results"  component={Results} auth={token} />
          <PrivateRoute path="/take-test/:id"  component={TakeTest} auth={token} />
        </Switch>
      </Router>
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest,auth }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
function mapStateToProps({user}) {
  return {
    token: user.token
  }
}
export default connect(mapStateToProps) (App);
