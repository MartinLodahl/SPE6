import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import KiloConverter from './Kiloconverter';
import OunceConverter from './OunceConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <br/>
        <KiloConverter/>
        <hr/>
        <OunceConverter/>
      </div>
    );
  }
}

export default App;