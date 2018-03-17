import React from 'react';
import styled from 'styled-components';

import '../../styles/mwga.css';

export const Thumb = ({ color }) => {
	const cards = {
		alliance: require('../../static/mwga/card-alliance.svg'),
		warning: require('../../static/mwga/card-warning.svg'),
		yield: require('../../static/mwga/card-yield.svg'),
		may: require('../../static/mwga/card-may.svg'),
		action: require('../../static/mwga/card-action.svg'),
		player: require('../../static/mwga/card-player.svg'),
	}
	const Image = styled.img`background-color: ${color};`
	return (
		<div className="flex mwga-cards">
			<div className="mwga-stacks">
				<img alt="logo" src={require('../../static/mwga/logo.svg')} style={{ width: '100%' }} />
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
