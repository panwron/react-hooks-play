import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playground from './Playground';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2> Playground Test </h2>

      <hr/>
        <Playground/>  
      <hr/>
      <p>Use lifecycle events with useEffect</p>

      </div>
    );
  }
}

export default App;
