import React from 'react';
import '../styles/mouse.css';

export default class Mouse extends React.Component {
	constructor() {
		super();
		this.state = { position: { x: 0, y: 0 }, tag: 'div', mouse: 'none', delay: 0 };

		this._tick = this._tick.bind(this);
		this._handleMouseMove = this._handleMouseMove.bind(this);
	}
	componentDidMount() { this.timer = setInterval(this._tick, 100); }
	componentWillUnmount() { clearInterval(this.timer); }
	render() {
		const { children } = this.props;
		const { position, tag, mouse, delay } = this.state;
		const mouseMessage = () => {
			if (tag === 'A') return 'go to';
			if (tag === 'P') return 'select';
			return mouse
		}
		return (
			<div 
				className="wrapper"
        onMouseMove={this._handleMouseMove}>
		 		<div className="fixed center caps" 
		 			style={{ 
		 				transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${position.x - 50}, ${position.y - 3}, 0, 1)`,
		 				display: (position.y <= 1 || position.x <= 1) ? 'none' : 'block',
		 				width: 100,
		 				pointerEvents: 'none',
		 				fontSize: 10,
		 				cursor: 'none'
		 			}}>
						{mouseMessage()}
	 			</div>
		 		{ children }
		 	</div>
		)
	}
	_handleMouseMove(e) {
		this.setState({
			position: { x: e.clientX, y: e.clientY },
			tag: e.target.tagName, 
			mouse: 'move', 
			delay: 0
		})
	}
	_tick() {
		const { delay, mouse } = this.state;
		if (delay <= 0 && mouse !== 'mouse') return this.setState({ mouse: 'mouse', delay: 0 });
		if (delay > 0) return this.setState({ delay: delay - 1 });
	}
}