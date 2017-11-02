var c;
var d;
var e;
var balls = [];
var flowers = [];
var cubes = [];
var count;


// function preload(){
// 	c = loadSound('assets/C_Major_Prelude.mp3');
// 	d = loadSound('assets/Terminal_D.mp3');
// 	e = loadSound('assets/E_Minor_Prelude.mp3');
// 	playMode('restart');
// }


function setup(){
	createCanvas(1530,730);
	background(179, 226, 221);

	for (var i = 0; i < 1; i++) {
		balls[i] = new Ball();
	}

	for (var i = 0; i < 1; i++) {
		flowers[i] = new Flower();
	}


	for (var i = 0; i < 1; i++) {
		cubes[i] = new Cube();
	}

}


function draw(){
	for(var i = 0; i < balls.length; i++){
    	balls[i].show();
    	balls[i].grow();
  	}

  	for(var i = 0; i < flowers.length; i++){
    	flowers[i].show();
    	flowers[i].grow();
  	}

  	for(var i = 0; i < cubes.length; i++){
    	cubes[i].show();
    	cubes[i].grow();
  	}
}


function mouseClicked(){
	if(count == 0){
		var tempBall = new Ball(mouseX, mouseY);
		balls.push(tempBall);
		console.log("ball!");
		count += 1;
	}
	if(count == 1){
		var tempFlower = new Flower(mouseX, mouseY);
		flowers.push(tempFlower);
		console.log("flower!");
		count += 1;
	}
	if(count == 2){
		var tempCube = new Cube(mouseX, mouseY);
		cube.push(tempCube);
		console.log("cube!");
		count += 1;
	}
	if(count > 2){
		count = 0;
	}

}



/************************
	Class Constructors
*************************/

function Ball (_x, _y){
	this.x = _x;
	this.y = _y
	this.size = 100;


	this.show = function(){
		noStroke();
		fill(207, 233, 207, 100);
		ellipse(this.x, this.y, this.size, this.size);
	}	

	this.grow = function(){
		this.size += 3;
	}
};




function Flower (_x, _y){
	this.x = _x;
	this.y = _y;
	this.size = 100;


	this.show = function(){
		noStroke();
		fill(255, 250, 129, 100);
		translate(this.x, this.y);
  		for (var i = 0; i < 10; i ++) {
  		  ellipse(0, 30, this.size, this.size*2);
  		  rotate(PI/5);
  		}
	}	

	this.grow = function(){
		this.size += 3;
	}


};



function Cube (_x, _y){
	this.x = _x;
	this.y = _y
	this.size = 100;


	this.show = function(){
		noStroke();
		fill(148, 168, 208, 100);
		rect(this.x, this.y, this.size, this.size);
	}	

	this.grow = function(){
		this.size += 3;
	}

};