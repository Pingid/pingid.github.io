import React from 'react';
import styled from 'styled-components';
import { lifecycle } from 'recompose'

import LazyImage from './LazyImage';

const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 0 5vw;
	margin-top: 2rem;
`;

const Container = styled.div`
	display: flex;
	@media (max-width: 600px) {
		display: inline-block;
	}
`;

const ImageContainer = styled.div`
	background: white; 
	max-height: 90vh; 
	max-width: 40vw; 
	width: 100%;
	@media (max-width: 600px) {
		max-height: auto;
		max-width: 25rem;
		margin: 0rem;
		margin-top: 1rem;
	}
`
const Copy = styled.p`
	max-width: 26rem;
	padding: 2rem;
	padding-left: 6vw;
	@media (max-width: 750px) {
		padding-left: 0rem;
	}
	@media (max-width: 600px) {
		padding: .5rem;
		padding-left: 0;
	}
`;


const ProjectHeader = ({ title, copy, image, children }) => {
	return (
		<Wrapper>
			<Container className="border-box">
				<div>
		  		<h1 className="caps mt0">{title}</h1>
		  		<Copy className="">{copy}</Copy>
				</div>
	  		<ImageContainer className="border-box">
	  			<LazyImage loaded={image.load} preload={image.preload} />
	  		</ImageContainer> 
		  </Container>
		  { children }
		</Wrapper>
	)
}

export default lifecycle({
	componentDidMount() {
		window.scrollTo(0, 0)
  }
})(ProjectHeader)