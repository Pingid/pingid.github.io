import React from 'react';
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

// const NavIcon = styled.div`
// 	padding: .3rem;
//   background: #f7f7f75;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
// `;

// const NavIconImage = styled.img`
//   width: 1.2rem;
//   cursor: pointer;
//   transition: .3s transform;
//   opacity: ${({ disabled }) => disabled ? 0 : .8 };
//   :hover {
//     transform: scale(1.1,1.1)
//   }
// `

const Image = styled.img`
	width: auto !important;
`;

const ImageGallery = ({ images, style }) => {
	const items = images.map(({ load, preload }) => ({ original: load }));
	const Item = styled.div`
		height: ${style.height};
		width: ${style.width};
		background-color: #f7f7f7;
	`
	return (
	  <ReactImageGallery
	    items={items}
			showPlayButton={false}
			showThumbnails={false}
	    showFullscreenButton={false}
			renderItem={({ original }) => {
	    	return (
	    		<Item className="flex items-center justify-center">
	    			<Image src={original} />
	    		</Item>
	    	)
	    }}
	  />
	)
}

export default ImageGallery;