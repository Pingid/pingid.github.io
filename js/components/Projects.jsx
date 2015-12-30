import React, { Component } from 'react';

import Project from './Project';

export default class Projects extends Component {
  render() {
    const projects = () => {
      return this.props.projects.map((project, index) =>  <Project key={index} content={project}/> )
    }
    return (
      <div className="projects">
          {projects()}
      </div>
    );
  }
}
