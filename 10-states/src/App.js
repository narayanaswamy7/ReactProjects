import React from 'react';
import './App.css';

// https://scrimba.com/p/p4Mrt9/cQnMDHD

// 1
/* class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Captain America",
      age: 25
    }
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
      </div>
    );
  }
} */

// 2
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default App;
