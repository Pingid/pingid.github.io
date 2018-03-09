import React from 'react';
import styled from 'styled-components';
import P5 from 'react-p5-wrapper';

import synetSketch from '../../sketches/skynet';

export class Thumb extends React.Component {
	state = { width: 0, height: 0 }
	componentDidMount() {
		window.addEventListener('resize', this.handleResize.bind(this))
	}
	componentWillDismount() {
		window.removeEventListener('resize', this.handleResize);
	}
	render() {
		const { width, height } = this.state;
		return (
			<div 
				className="p1 border-box"
				style={{ width: '50%', minHeight: '4rem' }} >
				<div ref={this._handleSize.bind(this)}>
				{ 
					width > 0 && <P5 sketch={p => synetSketch({ width, height, p })} /> 
				}
				</div>
			</div>
		)
	}
	handleResize() {
		this._handleSize(this.state.node)
	}
	_handleSize(node) {
		const width = node && node.clientWidth - 0;
		if (node && width && width !== this.state.width) {
			if (width) return this.setState({ width, height: 0.618 * width, node })
		}
	}
}


export const Page = () => {

}
