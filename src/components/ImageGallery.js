import React from 'react';
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

const NavIcon = styled.div`
	padding: .3rem;
  background: #f7f7f75;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const NavIconImage = styled.img`
  width: 1.2rem;
  cursor: pointer;
  transition: .3s transform;
  opacity: ${({ disabled }) => disabled ? 0 : .8 };
  :hover {
    transform: scale(1.1,1.1)
  }
`

const ImageGallery = ({ items, style }) => {
	return (
	  <ReactImageGallery
	    items={items}
			showPlayButton={false}
			renderLeftNav={(onClick, disabled) => {
			  return (
			    <NavIcon disabled={disabled} onClick={onClick} style={{ left: 0 }}>
			      <NavIconImage src={require('../static/icons/back.png')} />
			    </NavIcon>
			  )
			}}
			renderRightNav={(onClick, disabled) => {
			  return (
			    <NavIcon disabled={disabled} onClick={onClick} style={{ right: 0 }}>
			      <NavIconImage src={require('../static/icons/next.png')} />
			    </NavIcon>
			  )
			}}
	  />
	)
}

export default ImageGallery;