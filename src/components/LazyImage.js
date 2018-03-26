import React from 'react';
import classNames from 'classnames';

export default class LazyImage extends React.Component {
	state = { loaded: false };
	componentDidMount() {
		const hdImage = new Image();
		hdImage.src = this.props.loaded;
		hdImage.onload = () => {
			this.lazyImage.src = hdImage.src;
			this.setState({ loaded: true });
		}
	}
	render() {
		const { style } = this.props;
		const { loaded } = this.state;
		return (
			<div className="wfit hfit" style={Object.assign({ overflow: 'hidden' }, style)}>
				<div className="wfit hfit" style={{ filter: 'blur(30px)', display: !loaded ? 'auto' : 'none' }}>
					<img 
						alt={this.props.load}
						src={this.props.preload} 
						ref={placeElem => this.placeElem = placeElem} />
				</div>
				<div 
					className={classNames('wfit hfit')} 
					style={{ transition: '.3s opacity' }}>
					<img 
						alt={this.props.load}
						ref={imageElem => this.lazyImage = imageElem} />
				</div>
			</div>
		)
	}
}