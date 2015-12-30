import React, { Component } from 'react';

import Doodle from './Doodle';

export default class Doodles extends Component {
  render() {
    return (
      <div className="doodles">
        <div className="container">
          <Doodle style={ {width: "18rem", height: "13rem"} } />
          <Doodle style={ {width: "19rem", height: "11rem"} } />
          <Doodle style={ {width: "17rem", height: "10rem"} } />
          <Doodle style={ {width: "15rem", height: "13rem"} } />
          <Doodle style={ {width: "09rem", height: "19rem"} } />
          <Doodle style={ {width: "10rem", height: "15rem"} } />
        </div>
      </div>
    );
  }
}
