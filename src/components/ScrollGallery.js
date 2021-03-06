import React from 'react';
import classNames from 'classnames';

class ScrollGallery extends React.Component {
	constructor() {
		super();
		this.state = { active: false, scroll: 0, height: null };

		this._handleScroll = this._handleScroll.bind(this);
	}
	componentDidMount() { window.addEventListener('scroll', this._handleScroll) }
	componentWillUnmount() { window.removeEventListener('scroll', this._handleScroll) }
	render() {
		const { images } = this.props;
		const { active, after, height } = this.state;
		return (
			<div 
				className="border-box"
				id="node1"
				style={{
					height: height || window.innerWidth,
					paddingTop: after ? (window.innerWidth * images.length) - window.innerWidth : 0
				}} 
				ref={elem => this.parentNode = elem}>
				<div className={classNames('flex justify-center items-center', { fixed: active })} style={{ height: '100vh', width: '100vw', top: 0, left: 0 }}>
					<div 
						style={{ overflowY: 'hidden', height: '100vh', width: '100vw' }}
						className="flex overflow-auto touch-overflow hide-bar" 
						ref={elem => this.scrollElem = elem}>
						{ 
							images.map((x, i) => (
								<div key={x.srcLoaded} className="flex items-center justify-center border-box" style={{ width: '100%', height: '100%', flex: '0 0 auto' }}>
									<img alt="pictures of the installation" src={x.srcLoaded} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
	_handleScroll(e) {
		const { images } = this.props; 
		const { active, after, scroll:prevScroll } = this.state;
		
		const getOffsetTop = (elem) => {
			if (!elem) return 0;
			const bodyRect = document.body.getBoundingClientRect();
		  const elemRect = elem.getBoundingClientRect();
			return elemRect.top - bodyRect.top;
		}

		// Total height of gallery
		const height = (window.innerWidth * images.length) - window.innerWidth;
		let scroll = Math.max(0, window.pageYOffset - getOffsetTop(this.parentNode));

		// Check if scroll is passed gallery
		if (scroll > height && !after) { this.setState({ after: true }); }
		if (scroll < height && after) { this.setState({ after: false }); }

		// Is scroll within bounds of gallery
		if (scroll > 0 && scroll < height && this.scrollElem) {

			// Has horizontal scroll of gallery changed
			const sideScroll = Math.floor(prevScroll) !== Math.floor(this.scrollElem.scrollLeft);
			
			// How much horizontal scroll of gallery has changed
			const sideScrollDiff = prevScroll - this.scrollElem.scrollLeft;
			
			// if horizontal scroll has changed update vertical scroll to match
			if (sideScroll) { window.scrollTo(0, window.pageYOffset - sideScrollDiff) } 

			// Update horizontal scroll of gallery
			this.scrollElem.scrollLeft = scroll;

			// Confirm that state reflects current situation
			if (!active) this.setState({ active: true, height: this.scrollElem.scrollWidth - window.innerHeight });
		} 
		else if (active) { this.setState({ active: false }) }

		this.setState({ scroll });
	}
}

export default ScrollGallery;