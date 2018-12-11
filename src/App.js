import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playground from './Playground';
import TodoApp from './Todo';
import TodoHooks from './TodoHooks';




class App extends Component {
  render() {
    return (
      <div className="App">
      <h2> Playground Test </h2>

      <hr/>
        <Playground/>  
      <hr/>
      <h3>Use lifecycle events with useEffect</h3>
      <div style={{display: "flex"}}>
     <div style={{width: "50%"}}>
     <TodoApp/>
     </div>
     <div style={{width: "50%"}}>

      <TodoHooks />
     </div>

      </div>
      </div>
    );
  }
}

export default App;
