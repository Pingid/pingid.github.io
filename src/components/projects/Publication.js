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
			'IMG_0130.jpg', 'IMG_0131.jpg', 'IMG_0132.jpg', 'IMG_0138.jpg', 
			'IMG_0139.jpg', 'IMG_0140.jpg', 'IMG_0141.jpg', 'IMG_0142.jpg', 
			'IMG_0143.jpg', 'IMG_0144.jpg', 'IMG_0145.jpg', 'IMG_0146.jpg',
		];

		const images = names
			.map(name => ({
				original: require(`../../static/publication/large/${name}`),
				thumbnail: require(`../../static/publication/tiny/${name}`)
			}))

    return (
    	<div className="flex flex justify-center items-center">
    		<GallerWrapper className="px2">
      		<ImageGallery items={images} />
      	</GallerWrapper>
      </div>
    );
	}
}