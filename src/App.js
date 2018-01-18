import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 style={{ margin: 0 }}>Dan Beaven</h4>
          <p>
            <a href="https://github.com/Pingid">github</a>&nbsp;&nbsp;
            <a href="https://instagram.com/danielbeaven/">instagram</a>
          </p>
          <h1>This site is under construction, bellow are some links to my work</h1>
         
          <h2><a href="http://maketheworldgreat.cards/">Card Game</a></h2>
          <h2><a href="http://ida-2017.netlify.com/">Design Show</a></h2>
          <h2><a href="http://calilew.github.io">Photography Portfolio</a></h2>
          <h2><a href="http://pingid.github.io/#/blog/">Personal Degree Blog</a></h2>
          <h2><a href="http://grumpyoak.com">Tree Surgery Business</a></h2>
        </header>
      </div>
    );
  }
}

export default App;
