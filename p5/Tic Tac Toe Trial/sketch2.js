var count;
var boxes = [];

function setup(){
	createCanvas(500,500);
	background(255,228,196);
	count = 0;

	for (var i = 0; i < 9; i++) {
	 boxes[i] = new Box();
	}
}

function draw(){

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			 boxes[i].draw(i*100 + 100, j*100 + 100);
			 boxes[i].colour();
		}
	}
}

function Box(){
	var c;

	this.draw = function(x, y){
		c;
		rect(x, y, 100,100);
	}

	this.colour = function(){
		if(count == 0){
			c = fill(255, 0, 0);
		}
		if(count == 1){
			c = fill(0, 0, 255); 
		}
	}
};

function mouseClicked(){
	if(count == 0){
		count++;
		console.log(count);
	}
	else if (count == 1) {
		count = 0;
		console.log(count);
	}
}