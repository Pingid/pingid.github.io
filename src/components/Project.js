import React from 'react';

import MarkdownRenderer from './MarkdownRenderer'
import { Page as Publication } from './projects/Publication';
import { Page as SkynetKitchens } from './projects/SkynetKitchens';

import content from '../content.json';

const Project = ({ match }) => {
	if (match.params.name === 'publication') return <Publication />
	if (match.params.name === 'skynet-kitchens') return <SkynetKitchens />
	const proj = content[match.params.name];
	return (
		<div>
			<h1>{proj.title}</h1>
			<MarkdownRenderer markdown={proj.markdown} />
		</div>
	)
}

export default Project;