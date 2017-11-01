var ship;
var flowers = [];

function setup() {

	createCanvas(600,600);
	ship = new Ship();
	

}

function draw(){
	background(50);

	ship.show();

	for(var i = 0; i < 5; i++){
		flowers[i] = new Flower(100);
		flowers.show();
	}
	

}


function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		ship.moveR();
	}

	if(keyCode === LEFT_ARROW){
		ship.moveL();
	}
}




/********************* 
	Class Constructors
***********************/ 

//Ship

function Ship(){
	this.x = width/2;
	this.y = height - 100;


	this.show = function() {
		fill(255);
		rect(this.x, this.y, 20, 200);
	}

	this.moveR = function(){
		this.x += 5;
	}

	this.moveL = function(){
		this.x -= 5;
	}

};




//Flower

function Flower(_x){
	this.x = _x;
	this.y = 100;

	this.show = function(){
		noStroke();
		fill(255,127,80, 50);
		ellipse(this.x, this.y, 100, 100);
	}

}

