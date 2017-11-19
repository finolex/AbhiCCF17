var c;
var d;
var e;
var balls = [];
var flowers = [];
var cubes = [];
var count = 0;

function preload(){
  c = loadSound('C_Major_Prelude.mp3');
  d = loadSound('Terminal_D.mp3');
  e = loadSound('E_Minor_Prelude.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(179, 226, 221);
  
  c.playMode('restart');
  d.playMode('restart');
  e.playMode('restart');

  for (var i = 0; i < 1; i++) {
      balls[i] = new Ball();
  }
  
  for (var i = 0; i < 1; i++) {
    cubes[i] = new Cube();
  }
  
  for (var i = 0; i < 1; i++) {
		flowers[i] = new Flower();
	}

}

function draw(){
	for(var i = 0; i < balls.length; i++){
    	balls[i].show();
    	balls[i].grow();
  	}
  
  for(var i = 0; i < cubes.length; i++){
    	cubes[i].show();
    	cubes[i].grow();
  	}
  
  for(var i = 0; i < flowers.length; i++){
    	flowers[i].show();
    	flowers[i].grow();
  	}
}

function mouseClicked(){
  if(count == 0){
    e.stop();
    c.play();
    var tempBall = new Ball(mouseX, mouseY);
    balls.push(tempBall);
    count += 1;
    console.log(count);
    
  }
  else if(count == 1){
    c.stop();
    d.play();
  var tempCube = new Cube(mouseX, mouseY);
	cubes.push(tempCube);
	count += 1;
  console.log(count);
    
  }
  
  else if(count == 2){
    d.stop();
    e.play();
    var tempFlower = new Flower(mouseX, mouseY);
	flowers.push(tempFlower);
	console.log("flower!");
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
		fill(207, 233, 207, 20);
		ellipse(this.x, this.y, this.size, this.size);
	}	

	this.grow = function(){
		this.size += 1;
	}
    
};


function Cube (_x, _y){
	this.x = _x;
	this.y = _y
	this.size = 100;


	this.show = function(){
		noStroke();
		fill(148, 168, 208, 20);
		rect(this.x, this.y, this.size, this.size);
	}	

	this.grow = function(){
		this.size += 1;
	}
    
};

function Flower (_x, _y){
	this.x = _x;
	this.y = _y;
	this.size = 100;


	this.show = function(){
		noStroke();
		fill(255, 250, 129, 2);
		translate(this.x, this.y);
  		for (var i = 0; i < 10; i ++) {
  		  ellipse(this.x, this.x+30, this.size, this.size*3);
  		  rotate(PI/5);
  		}
	}	

	this.grow = function(){
		this.size += 3;
	}

};