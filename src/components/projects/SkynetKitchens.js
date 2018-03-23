import React from 'react';
import styled from 'styled-components';
import P5 from 'react-p5-wrapper';
import ImageGallery from '../ImageGallery';

import FixedImage from '../FixedImage';
import ScrollGallery from '../ScrollGallery';
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
const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 0 5vw;
	@media (max-width: 700px) {
		padding: 0 5vw;
	}
`;

const Columns = styled.div`
	column-count: 2;
	column-gap: 2rem;
`;

export const Page = () => {
	const names = [ 
		'_56B6011.JPG', '_56B6012.JPG', '_56B6041.JPG', '_56B6044.JPG', 
		'_56B6046.JPG', '_56B6143.JPG', '_56B6144.JPG'
	];

	const images = names
		.map(name => require(`../../static/skynet-kitchens/${name}`))
		.map(path => ({ original: path, thumbnail: path }));

	const ipad = require(`../../static/skynet-kitchens/ipad-outline.gif`)
	const projection = require(`../../static/skynet-kitchens/projection.gif`)

  return (
  	<div className="" style={{}}>
  		<Wrapper>
  			<div className="flex pt4 mb4">
		  		<h1 className="caps mb4 mt0" style={{ width: '4rem' }}>Skynet Kitchens</h1>
  				<Columns className="pl4 mr4 pr4">
			  		<p className="mt4" style={{ paddingTop: '10rem' }}>Skynet was famously the name of the arteficial general intelegence which played the antagonist in the Terminator franchise. A melevolant superintelegence has been a long standing theme in much of scifi and with what some have coined as the AI revolution it has begun to felt less of a purely fantastical idea. The uses of machine learning that most of us experience are there to predict our tastes and to understand our thoughts and behavour. This project was about exploring how machine learning and AI might soon go beyond the abstract and digital into enhancing our direct and tangable experiences. I chose to reference the artificial intelegence in terminator to emphasise that the project was not simply a display of the capabilities of machine learning but a question around how far we are willing to accept a computer take over our experiences.</p>
			  		<p className="">The installation was built for the science musium (London) in a series on food and agriculture. Utilizing Foodparing.com API I wrote an iPad app which rated recipees and suggested additional ingredients which would in combination yield better flavours. For the installation I set up a stand with 40 different ingredients which included fruits, vegetables, herbs, cheeses and sweets. Participants were able to use the ipads to build ingredient combinations and were then invited to try their combinations out using cocktail sticks to combine the ingredients on offer. They were also encouraged to save good recipees which were then projected as a visualisation behind the stand so as to allow other particapents to try the often strange and surprising combinations.</p>
		  		</Columns>
			  </div>
			  <div className="flex justify-around mb4">
			  	<div style={{ width: '50%' }}><img src={ipad} style={{ background: 'white' }}/></div>
			  	<div style={{ width: '50%' }}><img src={projection} style={{ background: 'white' }}/></div> 
			  </div>

			  {
			  	<ScrollGallery images={images.map(({ original }) => ({ src: original }))} />
			  }
			  	<img src={projection} style={{ background: 'white', height: '70vh' }}/> 

	  	</Wrapper>
  		{
	  		// <GallerWrapper className="px2">
	    // 		<ImageGallery items={images} />
	    // 	</GallerWrapper>
	    }
    </div>
  );
}