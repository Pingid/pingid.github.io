import React, { Component } from 'react';
import './App.css';

import WalkingCanvas from './WalkingCanvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WalkingCanvas />
        <div className="container header">My Site</div>
        <div className="container snow">Snow</div>
        <div className="container wood">Wood</div>
      </div>
    );
  }
}

export default App;
