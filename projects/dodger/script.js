var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Global variables
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

// Set canvas to fit full screen
canvas.width = pageWidth;
canvas.height = pageHeight;

// Center canvas x and y coordinates
// ctx.translate(pageWidth / 2, pageHeight / 2);

// Global
var gameCounter = 200 * 200;
var running = true;
var score = 1;
var mouseDown = false;
var mousePosition = { x: pageWidth / 2, y: pageHeight - 100 };
var ball = new Ball({ x: pageWidth / 2, y: pageHeight - 100 }, 10, ctx);
var block = new Block({ x: pageWidth / 2, y: 0 }, { x: 300, y: 200 }, ctx);
var blocks = [];

function generateBlocks() {
  if (mouseDown && running) {
    var height = Math.random() * 30;
    var newBlock = new Block({ x: Math.random() * pageWidth, y: -height,}, { x: height, y: height }, ctx)
    blocks.push(newBlock);
    blocks = blocks.filter(function(block) {
      if (utils.distance(block.position, ball.position) < (ball.size + block.dimensions.x)) { running = false }
      if (block.position.y > pageHeight) { score ++; gameCounter ++; };
      return block.position.y < pageHeight
    });
  }
  setTimeout(generateBlocks, 200 * 1 / Math.pow(score, 0.5));
}
generateBlocks()

// Refresh canvas animation loop
function update() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if (running) {
    ball.update(mousePosition);
    if (mouseDown) { blocks.forEach(function(block) { block.update(); }) }
    blocks.forEach(function(block) { block.draw(); })
    ctx.font = 'italic 20pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 30);
  } else {
    ctx.font = 'italic 20pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText('Game Over', 10, 30);
    ctx.fillText('Final score: ' + score, 10, 60);
  }
  window.requestAnimationFrame(update)
  // setTimeout(update, 500);
}

update();

// Shape interact
function interact() {
  document.onmousedown = function(e) { mouseDown = true; mousePosition = { x: e.pageX, y: e.pageY }; }
  document.onmouseup = function() { mouseDown = false }
  document.onmousemove = function(e) {
    if (mouseDown) { mousePosition = { x: e.pageX, y: e.pageY }; }
  }
}
interact()
