var canvas = document.getElementById('canvasOne');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-100;

$(window).resize(function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

var colour;
var radius = 10;
var dragging = false;
context.lineWidth = radius*2;

var engage = function(e) { dragging = true; putPoint(e)}
var disengage = function() { dragging = false; context.beginPath();}

$('li').on('click', function(e) {
  colour = $(e.target).css('background-color');
});

var putPoint = function(e) {
  if (dragging){
    context.lineTo(e.clientX,e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2)
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX,e.clientY);
    context.strokeStyle = colour;
    context.fillStyle = colour;
  }
}
canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mouseup', disengage)
canvas.addEventListener('mousemove', putPoint);