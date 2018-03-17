import React from 'react';
import ReactMarkdown from 'react-markdown';
// import * as R from 'ramda';

export default ({ markdown }) => {
	const renderImage = ({ src }) => {
		const required = require('../' + src)
		return <img src={required} alt="photoo"/>
	}

	return (
		<ReactMarkdown
	    source={markdown}
	    skipHtml={false}
	    escapeHtml={false}
	    transformLinkUri={uri => uri}
	    renderers={{
	    	image: renderImage
	    }}/>
  );
}
