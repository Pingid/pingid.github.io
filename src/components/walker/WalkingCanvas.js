import React, { Component } from 'react';
import { Howl } from 'howler';

import setupCanvas from './SetupCanvas';
import Walker from './Walker';
import Foot from './Foot';
import { pageOffsetY } from '../../utils/dom';
import { vect, mapValues } from '../../utils/math';

export default class WalkingCanvas extends Component {
  componentDidMount() {
    const snow = new Howl({
      src: ['./src/sounds/footsteps-snow.wav'],
      sprite: {
        one: [470, 800],
        two: [1289, 800],
        three: [2120, 800],
        four: [2810, 800],
        five: [3789, 800],
        six: [4690, 800],
        seven: [5890, 800],
        eight: [6835, 800],
        nine: [7730, 800]
      }
    });
    // snow.play('eight')
    var sound = new Howl({
      src: ['./src/sounds/footsteps-cement.mp3'],
      volume: .5,
      sprite: {
        one: [700, 300],
        two: [2600, 300],
        three: [2128, 300],
        four: [4060, 300],
        five: [4530, 300],
        six: [5000, 300]
      }
    });
    console.log(sound);
    const playRandom = (max) => ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][Math.floor(Math.random() * max)]

    const { ctx, start, stop, running } = setupCanvas(
      document.getElementById('walking-canvas'),
      (ctx) => person.update()
    );

    const leftFoot = new Image();
    leftFoot.src = './src/img/left-shoeprint.png';

    const rightFoot = new Image();
    rightFoot.src = './src/img/right-shoeprint.png';

    const person = new Walker({
      speed: 30,
      gap: 60,
      generateStep: (position, direction, foot) => {
        if (position.y < window.innerHeight * .8) {
          sound.play(playRandom(6));
        } else if (position.y < window.innerHeight * .8 * 2) {
          snow.play(playRandom(9));
        } else if (position.y < window.innerHeight * .8 * 3){
          sound.play(playRandom(6));
        }
        return new Foot({
          position,
          direction,
          life: 500,
          draw: (pos, life, maxLife) => {
            ctx.save();
            ctx.globalAlpha = mapValues(life, 0, maxLife, 0, 1);
            ctx.beginPath();
            if (foot === 'left') {
              ctx.translate((pos.x - 12), (pos.y - 12))
              ctx.rotate(direction + .9)
              ctx.drawImage(leftFoot, -15, 0, 24, 24)
            } else {
              ctx.translate((pos.x - 12), (pos.y - 12))
              ctx.rotate(direction + 1.5)
              ctx.drawImage(rightFoot, 15, 0, 24, 24)
            }
            ctx.restore();
          }
        })
      }
    });
    window.addEventListener('mousemove', function(event) { person.destination = vect(event.pageX, event.pageY) })
    window.addEventListener('click', function() {
      if (running()) stop();
      else start();
    });
  }
  render() {
    const sectionStyles = (color) => ({
      width: '100vw',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      background: color,
    });
    const style = {
      position: 'fixed',
      top: 0,
      left: 0
    };
    return (
      <div>
        <canvas id="walking-canvas" style={style} />
        <div style={sectionStyles('beige')}>My Site</div>
        <div style={sectionStyles('white')}>Snow</div>
        <div style={sectionStyles('brow')}>Wood</div>
      </div>
    );
  }
}
