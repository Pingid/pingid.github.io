import React from 'react';
import styled from 'styled-components';
import P5 from 'react-p5-wrapper';

import ProjectHeader from '../ProjectHeader';
import ScrollGallery from '../ScrollGallery';
import ida2017Sketch from '../../sketches/ida2017';

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
		const { color } = this.props;
		return (
			<div 
				className="border-box"
				style={{ width: '100%', minHeight: '4rem' }} >
				<div ref={this._handleSize.bind(this)}>
				{ 
					width > 0 && <P5 sketch={p => ida2017Sketch({ width, height, p, color })} /> 
				}
				</div>
			</div>
		)
	}
	handleResize() {
		this._handleSize(this.state.node)
	}
	_handleSize(elem) {
		if (elem && elem.offsetWidth && elem.offsetWidth !== this.state.width) {
			const width = elem.offsetWidth;
			const height = width;
			return this.setState({ width, height, elem })
		}
	}
}
