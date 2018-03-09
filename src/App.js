import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './styles/App.css';

import Simple from './components/ThreeScene'

class App extends Component {
  state = { show: true }
  render() {
    return (
      <div className="App">
        <button style={{ position: 'fixed' }} onClick={() => this.setState({ show:!this.state.show })}>show</button>
        { this.state.show && <Simple /> }
      </div>
    );
  }
}

export default App;
