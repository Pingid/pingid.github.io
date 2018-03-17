import React from 'react';
import styled from 'styled-components';
import P5 from 'react-p5-wrapper';
import ImageGallery from '../ImageGallery';

import skynetSketch from '../../sketches/skynet';

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
					width > 0 && <P5 sketch={p => skynetSketch({ width, height, p, color })} /> 
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
			const height = width && width * Math.sqrt(2);
			return this.setState({ width, height, elem })
		}
	}
}


const GallerWrapper = styled.div`
	max-width: 40rem;
	max-height: 70vh;
	width: 100%;
	box-sizing: border-box;
`

export const Page = () => {
	const names = [ 
		'_56B6011.JPG', '_56B6012.JPG', '_56B6041.JPG', '_56B6044.JPG', 
		'_56B6046.JPG', '_56B6143.JPG', '_56B6144.JPG'
	];

	const images = names
		.map(name => require(`../../static/skynet-kitchens/${name}`))
		.map(path => ({ original: path, thumbnail: path }));

  return (
  	<div className="flex flex justify-center items-center">
  		<GallerWrapper className="px2">
    		<ImageGallery items={images} />
    	</GallerWrapper>
    </div>
  );
}