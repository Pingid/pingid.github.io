var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Global variables
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

// Set canvas to fit full screen
canvas.width = pageWidth;
canvas.height = pageHeight;

// Center canvas x and y coordinates
ctx.translate(pageWidth / 2, pageHeight / 2);

// Shape variable
var currentShape = new Cube([0, 0, 0], 400, ctx);
var rotation = [0, 0, 0];
var run = false;

// Navbar shape select
document.getElementById('cube').onclick = function() {
  currentShape = new Cube([0, 0, 0], (pageHeight / 2) - 50, ctx);
}
document.getElementById('octahedron').onclick = function() {
  currentShape = new Octahedron([0, 0, 0], (pageHeight / 2) - 50, ctx);
}
document.getElementById('tetrahedron').onclick = function() {
  currentShape = new Tetrahedron([0, 0, 0], (pageHeight / 2) - 50, ctx);
}

document.getElementById('fractal').onclick = function() {
  var cubes = [];
  var cube = new Cube([0,0,0], 400, ctx);
  cubes.push(cube);
  for (var i = 0; i < 3; i++) {
    cubes.forEach(function(c) {
      cubes = [].concat(cubes, generateInnerSponge(c, 3, 2))
    })
  }
  currentShape = cubes;
}

// Remove prompt message on click
document.onclick = function() {
  var prompt = document.getElementById('prompt');
  if (prompt) { prompt.parentNode.removeChild(prompt); }
}

// Refresh canvas animation loop
function update() {
  ctx.clearRect(-window.innerWidth / 2, -window.innerHeight / 2, window.innerWidth, window.innerHeight);
  if (Array.isArray(currentShape)) {
    currentShape.forEach(function(shape) {
      if (run) {
        shape.rotation[0] += rotation[0];
        shape.rotation[1] += rotation[1];
      }
      shape.update();
    })
  } else {
    if(run) {
      currentShape.rotation[0] += rotation[0];
      currentShape.rotation[1] += rotation[1];
    }
    currentShape.update();
  }
  window.requestAnimationFrame(update)
}

update(currentShape);

// Shape interact
function interact() {
  var startPoint = [];
  document.onmousedown = function(e) {
    run = true;
    startPoint = [e.pageX, e.pageY];
  }
  document.onmouseup = function() { run = false; }
  document.onmousemove = function(e) {
    if (run) {
      rotation = [(startPoint[1]-e.pageY)*0.0001, (startPoint[0]-e.pageX)*0.0001,0];
    }
  }
}
interact()
