class Spring {
	constructor(pos, size, { mass, damp, k }) {
		this.anchor = Object.assign({}, pos);
		this.pos = Object.assign({}, pos);;
		this.size = size;

		this.spring = { mass, damp, k }
		this.move = { velx: 0, vely: 0, accel: 0, force: 0 }
	}
	update(p) {

		const { mass, damp, k } = this.spring;

		let force = -k * (this.pos.y - this.anchor.y);  
		let accel = force / mass;
		let vely = damp * (this.move.vely + accel);

		force = -k * (this.pos.x - this.anchor.x);
		accel = force / mass;
		let velx = damp * (this.move.velx + accel);

		this.move = { force, accel, vely, velx };
		this.pos = { x: this.pos.x + velx, y: this.pos.y + vely };

	}
	display(p) { 
		p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
	} 
}

class Arc {
	constructor(props) {
		this.state = props
		this.goTo = props.theta;
	}
	display(p) {
		const { center, radius, rotation, theta, gap, color } = this.state;
		p.fill(color)
		p.arc(
			center[0], 
			center[1], 
			radius, 
			radius, 
			rotation + gap, 
			rotation + theta - gap, 
			p.PIE
		);
	}
}

export default ({ width, height, p, color }) => {
	const center = p.createVector(width / 2, height / 2 )
	const nArcs = 10;

	let arcs = Array(nArcs).fill(0).map((_, i) => new Arc({
		center: [width / 2, height / 2],
		radius: 200,
		rotation: (i / nArcs) * p.PI * 2,
		theta: (1 / nArcs) * 2 * p.PI,
		gap: 0.02,
		color: [ p.random(255), p.random(255), p.random(255) ]
	}))

  p.setup = function () {
    p.createCanvas(width, height);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {

  };

	document.addEventListener('click', () => {
		const large = p.PI * 0.8;
		const small = ((p.Pi * 2) - large) / arcs.length;
		arcs = arcs.map((a, i) => Object.assign(a, {
			circ: i === 0 ? large : small
		}))

	})

  p.draw = function () {
  	p.clear()
    p.background(p.color(255,255,255));
    p.strokeWeight(1)
    p.noFill()
    p.stroke(p.color(255,255,255))

    arcs.forEach((arc, i) => {
    	p.stroke(p.color(color))
    	arc.display(p)
    	// p.arc(width / 2, height / 2, arc.radius, arc.radius, arc.theta + arc.gap, arc.theta + arc.circ - arc.gap, p.PIE);
    })
  };
}