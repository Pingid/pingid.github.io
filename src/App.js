import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Site is under construction</h1>
        <Link to="blog">Blog</Link>
        <br />
        <Link to="walking">Walk experiment</Link>
      </div>
    );
  }
}

export default App;
