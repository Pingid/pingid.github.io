import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	max-width: ${props => props.width };
	cursor: pointer;
	padding: .5rem;
	box-shadow: 0px 0px 12px -5px rgba(0,0,0,0.75);
	transition: .3s box-shadow;
	&:hover {
		box-shadow: 0px 0px 16px -5px rgba(0,0,0,0.75);
	}
	@media (max-width: 700px) {
		max-width: 100vw;
		max-height: 100vh;
	}
`
const Line = styled.div`
	cursor: pointer;
	flex: 1 1 auto;
	margin: 0 10px;
	min-width: 1rem;
	height: 1px;
	background: white;
`;

const Image = styled.img`
	cursor: pointer;
	width: ${({ width }) => width };
`

const Text = styled.div`
	cursor: pointer;
	color: white;
`

export default ({ folder, pic, title, type, width, children }) => {
	return (
		<Link to={`/project/${title.toLowerCase().replace(/\s/, '-')}`}>
			<Container className="mx2 mt4" width={width}>
				{ children && <div style={{ width }}>{children}</div> }
				{ pic && <Image width={width} src={require('../static/' + folder + '/' + pic)} /> }
				<Text className="flex mt1 flex-wrap items-center justify-between">
					<p className="m0">{title}</p>
					<Line />
					<p className="m0">{type}</p>
				</Text>
			</Container>
		</Link>
	);
}