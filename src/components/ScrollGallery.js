import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import classNames from 'classnames';
import FixedImage from './FixedImage';

const Image = styled.img`
	width: 100%;
`;


class ScrollGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = { domNode: null, scroll: 0 };

		this._handleScroll = this._handleScroll.bind(this);
		this._handleParent = this._handleParent.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this._handleScroll)
	}
	render() {
		const { images, style, className } = this.props;
		const { scroll } = this.state;

		const scrollOffset = 500;
		const height = images.length * scrollOffset + window.innerHeight;

		const isVisible = n => {
			const vis = (
				n * scrollOffset > scroll - scrollOffset && 
				n * scrollOffset < scroll
			);
			if (n === 0 && scroll < 0) return true;
			if (n === (images.length - 1) && (n * scrollOffset) < scroll) return true;
			return vis;
		};

		return (
			<div 
				className="relative border-box wfit" 
				id="node1"
				style={Object.assign({ background: 'transparent', height }, style)} 
				ref={this._handleParent}>
				<div className="wfit">
					{ 
						images.map((x, i) => (
							<Motion defaultStyle={{}} style={{}} key={x.src}>
								{ ({ }) => (
									<div className="absolute wfit border-box" style={{ zIndex: -i }}>
										<h3 style={{ position: 'fixed', top: 10, left: i * 100 }}>{isVisible(i) ? 'true' : 'false'}</h3>
										<FixedImage 
											src={x.src}
											style={{ marginTop: scroll > images.length * scrollOffset ? images.length * scrollOffset : 0 }}
											fixed={scroll > 0 && scroll < images.length * scrollOffset} 
											hidden={!isVisible(i)} />
									</div>
									)
								}
							</Motion>
						))
					}
				</div>
			</div>
		)
	}
	_handleParent(elem) {
		const { domNode } = this.state;
		if (!domNode) { this.setState({ domNode: elem }) }
	}
	_handleScroll(e) {
		const { domNode, offsetTop } = this.state;
		
		const getOffsetTop = (elem) => {
			const bodyRect = document.body.getBoundingClientRect();
		  const elemRect = elem.getBoundingClientRect();
			return elemRect.top - bodyRect.top;
		}

		this.setState({
			scroll: Math.max(0, window.pageYOffset - getOffsetTop(domNode))
		})
	}
}

export default ScrollGallery;