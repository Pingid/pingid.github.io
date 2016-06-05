var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Global variables
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
var balls = [];
var masses = [];
var trails = true;

// Set canvas to fit full screen
canvas.width = pageWidth;
canvas.height = pageHeight;

// Center canvas x and y coordinates
ctx.translate(pageWidth / 2, pageHeight / 2);

// Controls
document.getElementById('clear').onclick = function() {
  ctx.clearRect( - pageWidth / 2, - pageHeight / 2, pageWidth, pageHeight);
  balls = []; masses = [];
}
document.getElementById('trails').onclick = function() { trails = !trails }

// Remove prompt message on click
document.onclick = function() {
  var prompt = document.getElementById('prompt');
  if (prompt) { prompt.parentNode.removeChild(prompt); }
}

function generateBalls(num, ctx){
  for (j = 0; j < num; j++) {
    var ball = Ball.create({
      id: j,
      ctx: ctx,
      elasticity: 0.99,
      collisions: false,
      radius: Math.random() * 0 + 5,
      fillColor: "#"+((1<<24)*Math.random()|0).toString(16),
      velocity: {x: 0, y: 0},
      position: {x: Math.random() * 500-250, y: Math.random() * 500 - 250},
      boundingBox: {
        x: { left: - pageWidth / 2, right: pageWidth / 2 },
        y: { top: - pageHeight / 2, bottom: pageHeight / 2 }
      }
    })
    balls.push(ball);
    masses.push(ball);
  }
}

function clickBall(container){
  var startPoint = {};
  var colour = '';
  var mouseDowns = Kefir.fromEvents(container, 'mousedown');
  var mouseMoves = Kefir.fromEvents(container, 'mousemove');
  var mouseUps = Kefir.fromEvents(container, 'mouseup');
  mouseDowns.onValue(function(e){
    startPoint = { x: e.pageX, y: e.pageY };
  })
  mouseMoves.onValue(function(e) {
    colour = "#"+((1<<24)*Math.random()|0).toString(16);
    var radius = Math.sqrt(Math.pow(Math.abs(startPoint.x - e.pageX), 2) + Math.pow(Math.abs(startPoint.y - e.pageY), 2))
    ctx.beginPath();
    ctx.arc(startPoint.x - pageWidth / 2, startPoint.y - pageHeight / 2, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
  })
  mouseUps.onValue(function(e){
    var radius = Math.sqrt( Math.pow(startPoint.x - e.pageX, 2) + Math.pow(startPoint.y - e.pageY, 2) ) != 0 ? Math.sqrt( Math.pow(startPoint.x - e.pageX, 2) + Math.pow(startPoint.y - e.pageY, 2) ) : 5
    var ball = Ball.create({
      id: balls.length + 1,
      ctx: ctx,
      elasticity: 0.7,
      collisions: false,
      lineWidth: 0.5,
      radius: radius,
      fillColor: colour,
      velocity: {x: 0, y: 0},
      // globalAcc: {x: 0, y: 0.0981},
      massInteract: true,
      position: {x: e.pageX - pageWidth/2, y: e.pageY - pageHeight/2},
      boundingBox: {
        x: {left: -pageWidth/2, right: pageWidth/2},
        y: {top: -pageHeight/2, bottom: pageHeight/2}
      }
    })
    balls.push(ball);
    masses.push(ball);
    startPoint = {};
  })
}

clickBall(canvas)
generateBalls(5, ctx)

function animate() {
  window.requestAnimationFrame(animate)
  if (!trails) { ctx.clearRect( - pageWidth / 2, - pageHeight / 2, pageWidth, pageHeight); }
  balls.forEach(function(ball){
    ball.update(masses);
  })
}
window.requestAnimationFrame(animate)
