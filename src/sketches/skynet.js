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

class Ring extends Spring {
	constructor(position = { x: 0, y: 0 }, size = 100) {
		super(position, size, { damp: 0.3, mass: 2.0, k: 0.9 }) 
	}
	update(p) {
		super.update(p);

		const vec = p.createVector(p.mouseX - this.pos.x, p.mouseY -  this.pos.y)
		const dist = vec.mag()
		if (dist < this.size / 2) {
			const dir = vec;
			this.pos = p.createVector(this.pos.x, this.pos.y).sub(vec.normalize().mult(8))
		}

	}
	display(p) {
		p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}
}



export default ({ width, height, p }) => {
	const center = p.createVector(width / 2, height / 2 )

	const size = Math.min(width, height);
	const ringSize = size / 6;

	const rings = Array.from(new Array(3))
		.map((x, i) => p.createVector(size / 2 - ringSize - 10, 0).rotate(Math.PI * i * 2 / 3).add(center))
		.map((x, i) => new Ring(x, ringSize * Math.pow(1.618, i)))

  p.setup = function () {
    p.createCanvas(width, height);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  	console.log('x')
  };

  p.draw = function () {
    p.background(p.color(255, 255, 255, 9));
    p.strokeWeight(5)
    p.noFill()
    p.stroke(p.color(255,0,0))

    rings.forEach((ring, i) => {
    	const next = rings[(i + 1) % rings.length];
    	p.line(ring.pos.x, ring.pos.y, next.pos.x, next.pos.y)
    })

    p.fill(p.color(p.color(255, 255, 255)))
    rings.forEach(ring => {
    	ring.update(p);
    	ring.display(p);
    })
  };
}