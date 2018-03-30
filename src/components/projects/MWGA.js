import React from 'react';
import styled from 'styled-components';

import ProjectHeader from '../ProjectHeader';
import '../../styles/mwga.css';

const colorCards = {
	trump: require('../../static/mwga/card-trump.png'),
	trudeau: require('../../static/mwga/card-trudeau.png'),
	merkel: require('../../static/mwga/card-merkel.png')
}

const cards = {
	alliance: require('../../static/mwga/card-alliance.png'),
	warning: require('../../static/mwga/card-warning.png'),
	yield: require('../../static/mwga/card-yield.png'),
	may: require('../../static/mwga/card-may.png'),
	action: require('../../static/mwga/card-action.png'),
	player: require('../../static/mwga/card-player.png'),
}

const poster = require('../../static/mwga/poster.jpg');

export const Thumb = ({ color }) => {
	const Image = styled.img`background-color: ${color};`
	return (
		<div className="flex mwga-cards">
			<div className="mwga-stacks border-box p1 pr2">
				<img alt="logo" src={require('../../static/mwga/logo-black.png')} style={{ width: '100%' }} />
			</div>
			<div className="flex flex-column mwga-cards">
				<div className="mwga-card-wrapper">
					<div className="mwga-card">
						<Image alt="playing card" className="mwga-card-pic mwga-card-front" src={cards.alliance} />
						<Image alt="playing card" className="mwga-card-pic mwga-card-back" src={cards.action} />
					</div>
				</div>
				<div className="mwga-card-wrapper">
					<div className="mwga-card">
						<Image alt="playing card" className="mwga-card-pic mwga-card-front" src={cards.warning} />
						<Image alt="playing card" className="mwga-card-pic mwga-card-back" src={cards.action} />
					</div>
				</div>
				<div className="mwga-card-wrapper">
					<div className="mwga-card">
						<Image alt="playing card" className="mwga-card-pic mwga-card-front" src={cards.yield} />
						<Image alt="playing card" className="mwga-card-pic mwga-card-back" src={cards.action} />
					</div>
				</div>
				<div className="mwga-card-wrapper">
					<div className="mwga-card">
						<Image alt="playing card" className="mwga-card-pic mwga-card-front" src={cards.may} />
						<Image alt="playing card" className="mwga-card-pic mwga-card-back" src={cards.player} />
					</div>
				</div>
			</div>
		</div>
	)
}

export const Page = () => {
	return (
		<div>
			<ProjectHeader
				title={<span>Make<br />the<br />World<br />Great<br />again</span>}
				copy="'Make the World Great Again' an obvious play on Trumps 'Make America Great Again' is a political card game where each player takes the role of a national leader and who then must balance their moral judgment and democratic values against greed and power."
				image={{ load: poster, preload: poster }}>
			{ /* <p className="m0 mt3 m12" style={{ maxWidth: '30rem' }}>The project was a collaboration between myself and two others in response to a proposition on how do we break down national boarders. We felt a half political half economic card game which demonstraited the advantages to open bordes but also the importance of trust would at not only educate by be an entertaining premiss for a game</p> */ }
			<div className="pt2 wfit center caps">
				<a href="http://www.maketheworldgreat.cards/"><h3>Official website</h3></a>
			</div>
			<div className="flex flex-wrap items-center justify-center my3">
				<img className="mr2" style={{ maxWidth: '10rem'}} src={colorCards.trump} />
				<img className="mr2" style={{ maxWidth: '10rem'}} src={colorCards.trudeau} />
				<img className="mr2" style={{ maxWidth: '10rem'}} src={colorCards.merkel} />
			</div>
			</ProjectHeader>
		</div>
	)
}
