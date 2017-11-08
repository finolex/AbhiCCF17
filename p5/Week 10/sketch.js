var xcolors;
var balls = [];

function preload(){
	xcolors = loadJSON("assets/colors.json");
}

function setup(){
	createCanvas(1200,600);
	background(253, 232, 232);
	var myFile = xcolors.colors
	for (var i = 0; i < myFile.length; i++) {
		balls[i] = new Ball(i*180 + 150, height/2, myFile[i].code.rgba);
	}

console.log(myFile[1].color);
}

function draw(){
	var myFile = xcolors.colors
	for (var i = 0; i <myFile.length; i++) {
		balls[i].draw();
	}

	for (var i = 0; i <myFile.length; i++) {
		textSize(20);
		text(myFile[i].color, i*180 + 120, height/2);
	}
}

function Ball(_x, _y, _z){
	this.x = _x;
	this.y = _y;
	this.fill = _z


	this.draw = function(){
		console.log('hello');
		noStroke();
		fill(this.fill);
		ellipse(this.x, this.y, 150, 150);
	}
}