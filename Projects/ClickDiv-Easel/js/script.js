function setCanvasWidth() {
	var canvas = document.getElementById("canvasOne");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;


	$(window).resize(function(){
		setCanvasWidth();
	});
}
setCanvasWidth();

function getRandomColor(){
    return "#"+((1<<24)*Math.random()|0).toString(16);
}
function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var stage = new createjs.Stage('canvasOne')

stage.on("stagemousedown", function(evt) {
    var randomRect = new createjs.Shape();
    var widthRect = getRandomArbitary(100, 400);
    var heightRect = getRandomArbitary(100, 400);

	randomRect.graphics.beginFill(getRandomColor()).drawRect(0,0, widthRect, heightRect);
	randomRect.x = (evt.stageX-widthRect/2);
	randomRect.y = (evt.stageY-heightRect/2);
	
	
	randomRect.on('pressmove', function(addEventListener){
		console.log("pressmove");
		evt.target.x = evt.stageX;
		evt.target.y = evt.stageY;
	});
	stage.addChild(randomRect);
	stage.update();

})














// var context = canvas.getContext("2d");
// function drawBox(){
// 	function getRandomColor(){
//         return "#"+((1<<24)*Math.random()|0).toString(16);
//     }
//     function getRandomArbitary (min, max) {
//         return Math.random() * (max - min) + min;
//     }
// 	function getMousePos(canvas, evt) {
// 	    var rect = canvas.getBoundingClientRect();
// 	    return {
// 	      x: evt.clientX - rect.left,
// 	      y: evt.clientY - rect.top
// 	    };
// 	}
//     function draw(e) {
// 	    var pos = getMousePos(canvas, e);
// 	    var boxWidth = getRandomArbitary(40,400);
// 	    var boxHeight = getRandomArbitary(40, 400);

// 	    context.fillStyle = getRandomColor();
// 	    context.fillRect((pos.x-boxWidth/2), (pos.y-boxHeight/2), boxWidth, boxHeight);
// 	}
// 	window.addEventListener('dblclick', draw, false);
// }
// drawBox();