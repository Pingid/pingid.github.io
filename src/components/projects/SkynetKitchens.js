import React from 'react';
import styled from 'styled-components';
import P5 from 'react-p5-wrapper';

import ProjectHeader from '../ProjectHeader';
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


const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 600px) {
		display: inline-block;
		margin-top: 0rem;
	}
`;

const Content = styled.div`
	flex: 1 0 50%;
	padding: 2rem;
	@media (max-width: 600px) {
		padding: 0;
		padding-top: 3rem;
	}
`;

export const Page = () => {
	const names = [ 
		'_56B6011.jpg', '_56B6012.jpg', '_56B6041.jpg', '_56B6044.jpg', 
		'_56B6046.jpg', '_56B6143.jpg', '_56B6144.jpg'
	];

	const images = names
		.map(name => ({
			srcLoaded: require(`../../static/skynet-kitchens/images/large/${name}`),
			srcPreload: require(`../../static/skynet-kitchens/images/placeholder/${name}`)
		}))

	const ipad = require(`../../static/skynet-kitchens/images/gifs/ipad-outline.gif`)
	const projection = require(`../../static/skynet-kitchens/images/gifs/projection.gif`)

  return (
  	<div className="" style={{}}>
  		<ProjectHeader
  			title="Skynet Kitchens"
  			copy="An installation for the Science Museum (London) during a show on food and agriculture. It was an interactive piece where participents could use machine learning to buid recipee combinations then test the recipees with cocktail sticks and the 40 different ingredients on offer."
  			image={{ load: images[0].srcLoaded, prload: images[0].srcPreload }} >

  			<ContentWrapper className="">
  				<Content className="wfit border-box">
  					<h3 className="">App</h3>
  					<p>I wrote an iPad app which used Foodpairing's machine learning API to rate different ingredient combinations as well as suggest additional ingredients that might improve the flavour of the combination.</p>
				  	<img alt="animated gif of ipad app" className="pt1" src={ipad} />
					</Content>
				  <Content className="wfit border-box">
  					<h3 className="">Visual</h3>
				  	<p>Behind the stand I had project a live visualisation of the ingredient combinations that people had saved when using the app.</p>
				  	<img alt="animated gif of visualisation" src={projection} className="wfit pt1" />
				  </Content>
				</ContentWrapper>
  					
  			<Content>
	  			<h3 className="">Rational</h3>
					<p className="" style={{ maxWidth: '30rem' }}>Skynet was famously the name of the arteficial general intelegence which played the antagonist in the Terminator franchise. A melevolant superintelegence has been a long standing theme in much of science fiction and with what some have coined as the AI revolution it has begun to feel slightly less fictional. The uses of machine learning that most of us experience are there to predict our tastes and to understand our thoughts and behavour. This project was about exploring how machine learning and AI might soon go beyond the abstract and digital into enhancing our direct and tangable experiences. I chose to reference the artificial intelegence in terminator to emphasise that the project was not simply a display of the capabilities of machine learning but a question around how far we are willing to accept a computer take over our experiences.</p>
  			</Content>

  		</ProjectHeader>
			<ScrollGallery images={images.slice(1, images.length)} />
			<div className="py2" />
    </div>
  );
}