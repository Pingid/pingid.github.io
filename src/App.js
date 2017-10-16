import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Site is under construction</h1>
        <br />
        <a href="http://www.danbeaven.co.uk/blog">Blog</a>
        <br />
        <Link to="blog">Old Blog</Link>
        <br />
        <Link to="walking">Walk experiment</Link>
      </div>
    );
  }
}

export default App;
