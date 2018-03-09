import React from 'react';

const images = Array.from(new Array())
export class Thumb extends React.Component {
	state = { height: 10 }
	render() {
		const { height } = this.state;
		return (
			<div 
				className="p1 border-box"
				ref={this._setHeight.bind(this)} 
				style={{ width: '50%', height }}>
				<div style={{ 
					width: '100%', 
					height: '100%',
					backgroundColor: '#3cb76f'
				}}>

				</div>
			</div>
		)
	}
	_setHeight(node) {
		const width = node && node.clientWidth;
		const height = width * 0.618;

		if (node && width && Math.abs(width - this.state.height * 1.618) > 2) {
			return this.setState({ height })
		}
	}
}