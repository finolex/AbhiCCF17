var boxes = [];


function setup(){
	createCanvas(500,500);
	background(255,228,196);
	rectMode(CENTER);
	
	for (var i = 0; i < 9; i++) {
	 boxes[i] = new Box();
	 console.log(boxes[i].count);
	}
}

function draw(){

	for (var i = 0; i < 9; i++) {
		// for (var j = 0; j < 3; j++) {
			 boxes[i].draw(i*50 + 100, 300);
			 boxes[i].colour();
		// }
	}

}

function Box(){
	var c;
	var count = 0;

	this.draw = function(x, y){
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

// function mouseClicked(){
// 	for(var i = 0; i < 3; i++){
// 		// for(var j = 0; j < 3; j++){
// 			var rectSize = 50; //the size of your rectangle
// 			var xPos = i*100 + 100; //the center points of your rectangle
// 			var yPos = 300; //the center points of your rectangle
// 			if(abs(mouseX - xPos) < rectSize){ //are you within the bounds of the rectangle?
// 				if(boxes[i].count == 0){
// 					boxes[i].count++; //increment the count property specific to that object
// 				}
// 				else if(boxes[i].count == 1){
// 					boxes[i].count = 0; //increment the count property specific to that object
// 				}
// 			}
// 		// }
// 	}
// }