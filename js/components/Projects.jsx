import React, { Component } from 'react';

import Project from './Project';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Project />
        <Project />
      </div>
    );
  }
}
