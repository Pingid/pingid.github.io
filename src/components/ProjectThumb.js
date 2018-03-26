import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	@media (max-width: 400px) {
		width: 100vw;
	}
`;

const Container = styled.div`
	width: ${({ width }) => width };
	cursor: pointer;
	box-shadow: 0px 0px 12px -5px rgba(0,0,0,0.75);
	transition: .3s box-shadow;
	&:hover {
		box-shadow: 0px 0px 16px -5px rgba(0,0,0,0.75);
	}
	@media (max-width: 700px) {
		max-width: 100vw;
	}
	@media (max-width: 800px) {
		width: 100%;
	}
`
const Line = styled.div`
	cursor: pointer;
	flex: 1 1 auto;
	margin: 0 10px;
	min-width: 1rem;
	height: 1px;
	background: black;
`;

const Children = styled.div`
	cursor: pointer;
	width: 100%;
	overflow: hidden;
`

const Text = styled.div`
	cursor: pointer;
`

export default ({ folder, pic, title, type, width, children, onSelect }) => {
	return (
		<Wrapper className="p2 border-box">
			<Container className="p1 border-box" onClick={onSelect} width={width}>
					<Children width={width}>
						{ children && children }
						{ pic && <img alt="project" src={require('../static/' + folder + '/' + pic)} /> }
					</Children>
					<Text className="flex mt1 flex-wrap items-center justify-between">
						<p className="m0">{title}</p>
						<Line />
						<p className="m0">{type}</p>
					</Text>
			</Container>
		</Wrapper>
	);
}