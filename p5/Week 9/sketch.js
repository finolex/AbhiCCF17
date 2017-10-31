var myShape;
var myShape2;
var myShape3;
var myShape4;
var myShape5;
var myShape6;
var myShape7;

function setup(){
	createCanvas(500,500);

//to create an instance of the object, and pass the arguments that are intended
	// should create the instance in the setup, but can display in the draw function instead
	myShape = new Shape(50, 120, -1, 2, 50, 100, 200, 255);
	myShape2 = new Shape(60, 200, 2, -1, 20, 100, 100, 240);
	myShape3 = new Shape(30, 100, -1, 1, 15, 253, 232, 232);
	myShape4 = new Shape(100, 350, 2, 1, 5, 0 ,20, 240);
	myShape5 = new Shape(200, 190, -1, 1, 40, 200, 100, 20);
	myShape6 = new Shape(200, 0, 2, 1, 30, 230, 150, 80);
	myShape7 = new Shape(30, 400, 1, -1,80, 180, 120, 60);
}


function draw(){
	background(255);

	myShape.display();
	myShape.animate();

	myShape2.display();
	myShape2.animate();

	myShape3.display();
	myShape3.animate();

	myShape4.display();
	myShape4.animate();

	myShape5.display();
	myShape5.animate();

	myShape6.display();
	myShape6.animate();

	myShape7.display();
	myShape7.animate();

	

}


//create class with arguments that can be passed through the class

function Shape(_x, _y, _xVel, _yVel, _size, _r, _g, _b){ 

// uses this notation to declare variables inside a class!!
	this.x = _x;
	this.y = _y;
	this.xVel = _xVel;
	this.yVel = _yVel;
	this.size = _size;
	this.color = color(_r, _g, _b);


// declaring functions inside the class
	//to draw, make a function called display/show/render
	this.display = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
	}

//create an animate function
	this.animate = function(){
		this.x += this.xVel;
		this.y += this.yVel;

		if (this.x > width || this.x < 0){
			this.xVel *= -1.2;
		}
		if (this.y > width || this.y <0){
			this.yVel *= -1.2;
		}		
	}
};
