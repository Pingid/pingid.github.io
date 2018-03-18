import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

import MarkdownRenderer from './components/MarkdownRenderer'

import content from './content'

class App extends Component {
  componentDidMount() {
    // const mouseCursor = require('./styles/cursors/mouse.cur');
    // document.getElementsByTagName("body")[0].style.cursor = `url('${mouseCursor}')`;
    // document.getElementsByTagName("html")[0].style.cursor = `url('${mouseCursor}')`;
  }
  render() {
    console.log(content)
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="m0">Dan Beaven</h4>
          <p className="mt1 mb1" style={{ fontSize: '.618rem' }}>
            <a href="/blog">blog</a>&nbsp;&nbsp;
            <a href="https://github.com/Pingid">github</a>&nbsp;&nbsp;
            <a className="" href="https://instagram.com/danielbeaven/">instagram</a>&nbsp;&nbsp;
            <a href="mailto:dm.beaven@gmail.com?Subject=Hello" target="_top">email</a>
          </p>
          <MarkdownRenderer markdown={content.main.markdown} />
          <h4>Links</h4>
          <ul className="mt1">
            { 
              content.main.meta.external_links.map((proj, index) => (
                <li key={index} className="py1"><a href={proj.route} className="underline">0{index}.&nbsp;{proj.title}</a></li>
              ))
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
