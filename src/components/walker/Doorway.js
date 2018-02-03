import React from 'react';
import { Motion, spring } from 'react-motion';

export default class Door extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }
  render() {
    const { position, height, open } = this.props;
    return (
      <Motion defaultStyle={{ theta: 0 }} style={{ theta: spring(open ? 50 : 0) }}>
        { ({ theta }) => (
          <div
            style={{
              position: 'fixed',
              left: position.x,
              top: position.y,
              perspective: height,
              background: 'darkgrey',
              width: height * .618,
              height: height
            }}>
            <div
              onClick={() => this.setState({ open: !open })}
              style={{
                transition: 'transform .5s',
                transform: `rotateY(${theta})`,
                transformStyle: 'preserve-3d',
                transformOrigin: 'right center',
                background: 'white',
                width: height * .618,
                height: height }}>Door</div>
          </div>
        )}
      </Motion>
    )
  }
}
