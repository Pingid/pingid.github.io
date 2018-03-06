import React from 'react';
import * as R from 'ramda';

import MarkdownRenderer from './MarkdownRenderer'

import content from '../content.json';

const Project = ({ match }) => {
	const proj = content[match.params.name];
	return (
		<div>
			<h1>{proj.title}</h1>
			<MarkdownRenderer markdown={proj.markdown} />
		</div>
	)
}

export default Project;