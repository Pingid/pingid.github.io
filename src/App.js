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
          <h1 className="header-copy">Due to construction work this temporary site with links to stuff I have made</h1>
         
          <h2 className="underline proj-link"><a href="http://calilew.github.io">Photography Portfolio</a></h2>
          <h2 className="underline proj-link"><a href="http://maketheworldgreat.cards/">Card Game</a></h2>
          <h2 className="underline proj-link"><a href="http://ida-2017.netlify.com/">Design Show</a></h2>
        </header>
      </div>
    );
  }
}

export default App;
