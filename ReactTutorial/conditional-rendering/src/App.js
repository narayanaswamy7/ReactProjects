import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
    let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default App;
