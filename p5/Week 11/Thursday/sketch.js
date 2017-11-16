var ball;
var slider;
var ballSize;

function setup(){
	createCanvas(500,500);
	ballSize = 50;
	ball = new Ball();

	slider = createSlider(30, 100, 30);
	slider.position(600,width/2);
	
}

function draw(){
	background(150);

	ball.draw(ballSize);
	ball.animate();
	ballSize = slider.value();
}

function Ball(){
	this.x = height/2;
	this.y = width/2;
	this.xVel = 2;

	this.draw = function(size){
		noStroke();
		fill(200);
		ellipse(this.x, this.y, size, size);
	}

	this.animate = function(){
		this.x += this.xVel;

		if (this.x > width || this.x < 0){
			this.xVel *= -1.2;
		}
	}
};