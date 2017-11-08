var xcolors;
var balls = [];

function preload(){
	xcolors = loadJSON("assets/colors.json");

	for (var i = 0; i < xcolors.length; i++) {
		balls[i] = new Ball(i*20, i*20, xcolors[i]);
	}
}

function setup(){
	createCanvas(1200,600);
}

function draw(){
	for (var i = 0; i < xcolors.length; i++) {
		balls[i].draw();
	}

	text(
}

function Ball(_x, _y, _z){
	this.x = _x;
	this.y = _y;
	this.fill = _z

	this.draw = function(){
		fill(this.fill);
		ellipse(this.x, this.y, 50, 50);
	}
}