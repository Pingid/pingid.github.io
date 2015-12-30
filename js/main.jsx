import React, { Component } from 'react';
import { render } from 'react-dom';
import { Motion, spring } from 'react-motion';

// JSON CONTENT
import Content from './pageContent';

// COMPONENTS
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Doodles from './components/Doodles';

import '../sass/main';

// function stringReduce(string) {
//     var split = string.split("");
//     delete split[Math.floor(Math.random()*string.length)]
//     delete split[Math.floor(Math.random()*string.length)]
//     delete split[Math.floor(Math.random()*string.length)]
//     return split.join("")
// }

function stringReduce(array, speed = 0) {
  function removeOne(string) {
    let arr = string.split('');
    for(let i=0; i <= speed; i++) {
      arr.splice(Math.floor(Math.random() * arr.length), 1);
    }
    return arr.join('');
  }
  if(speed === 0) {
    return array;
  }
  return array.map((string) => {
    return removeOne(string);
  })
}

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navStyle: { top: window.innerHeight/2 - 90 },
      frontText: this.props.content.front.frontText,
      navActive: ''
    }
    function rem() {
      this.state = {
        navStyle: { top: 0 },
        navActive: 'home'
      }
      console.log(this);
      window.removeEventListener('scroll', rem);
    }
    window.addEventListener('scroll', rem)
  }
  _handleNavClick(name) {
    this.setState({
      navStyle: { top: 0 },
      navActive: name
    })
  }
  render() {
    const { navActive } = this.state;
    let text = this.state.frontText;
    const showing = () => {
      const current = () => {
        if(navActive === 'home') {
          return <Home />
        } else if (navActive === 'projects') {
          return <Projects projects={this.props.content.content.projects}/>
        } else if (navActive === 'doodles') {
          return <Doodles />
        }
        return <div></div>
      }
      return (
        <Motion defaultStyle={{x: 0}} style={{x: spring(1000, [100, 25])}}>
          { val => {
            return (
              <div className="content-wrapper" style={{opacity: val.x/1000}}>
                {current()}
              </div>
            )
          }}
        </Motion>
      );
    }
    return (
      <div>
        <Motion style={{x: spring(this.state.navStyle.top, [180, 25])}}>
          { val => {
            return (
              <Nav
              text={stringReduce(this.state.frontText, (val.x - (window.innerHeight/2 - 90)) * -0.13)}
              navActive={this.state.navActive}
              style={{ top: val.x }}
              handleNav={(name) => this._handleNavClick(name)}/>
            );
          }}
        </Motion>
        {showing()}
      </div>
    );
  }
}

render( <Page content={Content} />, document.getElementById('main'));
