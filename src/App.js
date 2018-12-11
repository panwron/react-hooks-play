import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playground from './Playground';
import TodoApp from './Todo';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h2> Playground Test </h2>

      <hr/>
        <Playground/>  
      <hr/>
      <h3>Use lifecycle events with useEffect</h3>
      <TodoApp/>
      </div>
    );
  }
}

export default App;
