import React from 'react';

import ProjectHeader from '../ProjectHeader';
import ScrollGallery from '../ScrollGallery';

export class Page extends React.Component {
	render() {
		const names = [
			'IMG_0130.jpg', 'IMG_0132.jpg', 'IMG_0138.jpg', 
			'IMG_0139.jpg', 'IMG_0140.jpg', 'IMG_0141.jpg', 'IMG_0142.jpg', 
			'IMG_0143.jpg', 'IMG_0144.jpg', 'IMG_0145.jpg', 'IMG_0146.jpg',
		];

		const images = names
			.map(name => ({
				srcLoaded: require(`../../static/publication/large/${name}`),
				srcPreloaded: require(`../../static/publication/tiny/${name}`)
			}))

		const front = {
			load: require(`../../static/publication/front.jpg`),
			preload: require(`../../static/publication/front-placeholder.jpg`)
		}

    return (
    	<div className="">
	      <ProjectHeader
	      	title="Magazine"
	      	copy="This was a publication containing essays I wrote during my first year of university. Central to the publication was an essay on the 1936 exhibition of Chinese art in London and so the cover is one of the pieces of anciet caligraphy displayed in the exhibtion. The traditional Japanes bind was chosen purely for its aesthetic value as was the choice in typeface."
	      	image={{ load: front.load, reload: front.preload }} />
	      <div className="py3 wfit" />
      	<ScrollGallery images={images.slice(1, images.length)} />
				<div className="py2" />
      </div>
    );
	}
}