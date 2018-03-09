import React, { Component } from 'react';
import * as THREE from 'three';
import { Interaction } from 'three.interaction';
import threeTest from '../three/test';

const OrbitControls = require('three-orbit-controls')(THREE)


class ThreeScene extends Component {
  constructor() {
    super();
    this.state = {
      loop: null,
      parent: null
    }

    this._InitialiseScene = this._InitialiseScene.bind(this);
    this._animate = this._animate.bind(this);
  }
  componentDidMount() {
    this.setState({ loop: window.requestAnimationFrame(this._animate) });
  }
  componentWillUnmount() {
    const { parent, loop } = this.state;
    window.cancelAnimationFrame(loop)
    if (parent) return parent.removeChild(parent.firstChild);
  }
  render() {
    return (
      <div ref={this._InitialiseScene}>
      </div>
    );
  }
  _setup() {
  }
  _animate() {
    const { update } = this.state;
    if (update) { update() }
    this.setState({ loop: window.requestAnimationFrame(this._animate) });
  }
  _InitialiseScene(node) {
    if (node) { this.setState({ parent: node }); }

    if (node) {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();

      var controls = new OrbitControls( camera );
      const interaction = new Interaction(renderer, scene, camera);

      renderer.setSize( window.innerWidth, window.innerHeight );
      node.appendChild( renderer.domElement );

      const updateScene = threeTest({ scene, camera, renderer })

      this.setState({ 
        update: () => {
          updateScene();
          controls.update();
          renderer.render(scene, camera)
        }
      });
    }
  }
}

export default ThreeScene;
