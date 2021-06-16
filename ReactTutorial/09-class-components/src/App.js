import './App.css';
import React, { Component } from 'react';

import HeaderFunc from './components/functional-components/header-func-component'
import GreetingFunc from './components/functional-components/greeting-func-component';

import HeaderClass from './components/class-components/header-class-component';
import GreetingClass from './components/class-components/greeting-class-component';

// Functional Component
function App() {
  return (
    <div>
      <HeaderFunc username="School" />
      <GreetingFunc />
    </div>
  );
}

// Please comment one of them(functional or class) to run the application.

// Class Compnent
class App extends Component {
  render() {
    return (
      <div>
        <HeaderClass />
        <GreetingClass />
      </div>
    );
  }
}

export default App;
