import React from 'react';
import LazyImage from './LazyImage';

export default () => {
	return (
		<div>
			<div className="" style={{ maxWidth: '35rem', padding: '0 5vw', margin: '3rem auto' }}>
				<h5 className="m0">
					<a className="caps" href="mailto:dm.beaven@gmail.com?Subject=Hello" target="_top">email</a>
					<span className="px2">/</span>
					<a className="caps" href="http://www.danbeaven.co.uk/blog">blog</a>
					<span className="px2">/</span>
	        <a className="caps" href="https://github.com/Pingid">github</a>
	      </h5>
				<p className="pb2">I am currently studing Interaction Design Arts in London where my focus has been on exploring formuliac art and the interface between digital and physical.</p>
				<LazyImage 
					loaded={require('../static/images/large/_MG_0011.jpg')} 
					preload={require('../static/images/placeholder/_MG_0011.jpg')} />
			</div>
		</div>
	);
}