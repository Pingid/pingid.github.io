import React from 'react';
import classNames from 'classnames';

export default class FixedImage extends React.Component {
	state = { parent: null, width: 0, height: 0, top: 0, left: 0, loaded: false }
	componentDidMount() {
		const { src } = this.props;
		const image = new Image();
		image.src = src;
		image.onload = () => this.setState({ loaded: true });
	}
	shouldComponentUpdate({ fixed, hidden, style }) {
		return (
			fixed !== this.props.fixed ||
			hidden !== this.props.hidden || 
			style !== this.props.style
		)
	}
	render() {
		const { fixed, src, hidden, style } = this.props;
		const { loaded, parent, width, height, left, top } = this.state;

		const styles = {
			width, 
			left, 
			top, 
			position: fixed ? 'fixed' : 'static',
			transition: '.3s opacity'
		};

		if (fixed && parent) return (
			<img
				src={src}
				style={Object.assign(styles, style)} 
				className={classNames('hidden', { hide: hidden })} />
		)
		if (loaded) return (
			<img 
				src={src} 
				style={style} 
				className={classNames('hidden', { hide: hidden })} 
				ref={this._handleElementSize.bind(this)} />
		)
		return null;
	}
	_handleElementSize(elem) {
		const { parent } = this.state;
		// console.log(elem, parent)
		if (!parent) {

			const parent = elem.parentNode,
						PerRect = parent.getBoundingClientRect(),
						rect = elem.getBoundingClientRect(),
						width = elem.parentNode.clientWidth,
						height = elem.offsetHeight,
						left = rect.left,
						top = rect.top - PerRect.top;

			this.setState({ parent, width, height, left, top });
		}
	}
}