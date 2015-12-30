import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    const { text, navActive, handleNav, style } = this.props;
    const buttonStyle = (value) => {
      if (navActive === "") {
        return { color: 'black', cursor: 'pointer'}
      } else if (value === navActive) {
        return { color: 'black', padding: "1rem 1.5rem"}
      }
      return { cursor: 'pointer', padding: "1rem 1.5rem"};
    };
    return (
      <div className="nav-wrapper" style={style}>
        <h1>
          <span>{text[0]}</span>
          <span
            style={buttonStyle('home')}
            onClick={() => handleNav('home')}> Dan </span>
          <span>{text[1]}</span>
          <span
            style={buttonStyle('projects')}
            onClick={() => handleNav('projects')}> Projects </span>
          <span>{text[2]}</span>
          <span
            style={buttonStyle('doodles')}
            onClick={() => handleNav('doodles')}> Doodles </span>
          <span>{text[3]}</span>
        </h1>
      </div>
    );
  }
}
