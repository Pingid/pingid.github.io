import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    return (
      <a href={this.props.content.url}>
        <div style={{ backgroundColor: this.props.content.backgroundColor }} className="project">
            <h2>{this.props.content.header}</h2>
        </div>
      </a>
    );
  }
}
