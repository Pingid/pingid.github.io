import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

const projects = [
 {
    title: 'Wikiconga',
    description: 'Oulipian inspired poetry',
    route: 'http://www.wikicon.ga'
  },
  {
    title: 'Cali Photography',
    description: 'Portfolio website for London based freelance photographer Cali Lew',
    route: 'http://calilew.github.io'
  },
  {
    title: 'MWGA Card Game',
    description: 'Website for the card game \'Make The World Great Again\'',
    route: 'http://maketheworldgreat.cards'
  },
  {
    title: 'IDA Degree Show',
    description: 'Website for LCC Interaction Design Arts (BA) 2017 final degree show',
    route: 'http://ida-2017.netlify.com/'
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="m0">Dan Beaven</h4>
          <p className="mt1 mb1" style={{ fontSize: '.618rem' }}>
            <a href="mailto:dm.beaven@gmail.com?Subject=Hello" target="_top">email</a>&nbsp;&nbsp;
            <a href="/blog">blog</a>&nbsp;&nbsp;
            <a href="https://github.com/Pingid">github</a>&nbsp;&nbsp;
            <a className="" href="https://instagram.com/danielbeaven/">instagram</a>
          </p>
          <p className="py1">
            I am currently studying Interaction Design Arts where much of my practive has revolved around creating interactive experiences. I am deeply interested in the way different mediums can be utilised to explore narrative whether that is in radio, theatre or film. Many of the links bellow are to my much older webdesign work.
          </p>
          
          <ul className="mt1">
            { 
              projects.map((proj, index) => (
                <li className="py1"><a href={proj.route} className="underline">0{index}.&nbsp;{proj.title}</a></li>
              ))
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
