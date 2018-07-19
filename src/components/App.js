import React, { Component } from 'react';
import Login from "./Login"
import Dashboard from "./Dashboard"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
