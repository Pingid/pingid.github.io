import React from 'react';
import ImageGallery from '../ImageGallery';
import styled from 'styled-components';

const GallerWrapper = styled.div`
	max-width: 40rem;
	max-height: 70vh;
	width: 100%;
	box-sizing: border-box;
`

export class Page extends React.Component {
	render() {
		const names = [
			'IMG_0130.JPG', 'IMG_0131.JPG', 'IMG_0132.JPG', 'IMG_0138.JPG', 
			'IMG_0139.JPG', 'IMG_0140.JPG', 'IMG_0141.JPG', 'IMG_0142.JPG', 
			'IMG_0143.JPG', 'IMG_0144.JPG', 'IMG_0145.JPG', 'IMG_0146.JPG',
		];

		const images = names
			.map(name => require(`../../static/publication/${name}`))
			.map(path => ({ original: path, thumbnail: path }));

    return (
    	<div className="flex flex justify-center items-center">
    		<GallerWrapper className="px2">
      		<ImageGallery items={images} />
      	</GallerWrapper>
      </div>
    );
	}
}