import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './styles/App.css';

import MarkdownRenderer from './components/MarkdownRenderer'

import content from './content'

import { Thumb as Publication } from './components/projects/Publication'
import { Thumb as Skynet } from './components/projects/Skynet'
import { Thumb as MWGA } from './components/projects/MWGA'


// const Header = styled.header`
//   position: fixed;
//   top: 0;
//   height: 4rem;
// `

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
        <header className="header">
          <MarkdownRenderer markdown={content.main.markdown} />  
          <p style={{ fontSize: '.618rem' }}>
            <a href="/blog">blog</a>&nbsp;&nbsp;
            <a href="https://github.com/Pingid">github</a>&nbsp;&nbsp;
            <a className="" href="https://instagram.com/danielbeaven/">instagram</a>&nbsp;&nbsp;
            <a href="mailto:dm.beaven@gmail.com?Subject=Hello" target="_top">email</a>
          </p>
        </header>
        <h2>Selected Work</h2>
        <div className="flex mx3 flex-wrap" style={{ marginTop: '10rem' }}>
          <div className="flex mb2" style={{ flex: '100%' }}> 
            <Skynet />
            <Publication />
            <MWGA />
          </div>
            
          { 
            // Object.keys(content).filter(x => x !== 'main').map(key => (
            //   <div 
            //     className="mr3 mt3 flex justify-center items-center" 
            //     style={{ 
            //       width: '25rem', 
            //       height: '17.025rem', 
            //       backgroundImage: 'url(https://s-media-cache-ak0.pinimg.com/originals/e6/f9/92/e6f9926a239d8e85861ab1eccfc602db.png)',
            //       backgroundSize: '10rem 10rem'

            //     }}>
            //     <Link to={`/project/${key}`} style={{ background: 'rgba(255,255,255,.8)' }}>
            //       <p className="underline m0 p3">{content[key].title}</p>
            //     </Link>
            //   </div>
            // ))
          }
        </div>
        <h4>Links</h4>
        <ul className="mt1">
          { 
            content.main.meta.external_links.map((proj, index) => (
              <li key={index} className="py1"><a href={proj.route} className="underline">0{index}.&nbsp;{proj.title}</a></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
