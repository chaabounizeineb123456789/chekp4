import React, { Component } from 'react';
import logo from './wolf.jpg';
import './App.css';
import Box from './components/box2'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header><h1>nos programmes</h1></header>
        <div className="log">
          <Box name="wolf1"  />
          <Box name="wolf2" />
          <Box name="wolf3" />
          <Box name="wolf4" />
        </div>
      </div>
    )
  }
}

export default App;
