/******************************
Creating colour gradient grid
*******************************/



// var redVal = 255;
// var greenVal = 255;
// var blueVal = 255;

// function setup(){
// 	createCanvas(800,700);
// }

// function draw(){
// 	for(var i = 0; i <10; i++){
// 		for(var j = 0; j <10; j++){
// 			greenVal = 200 - (i*25);
// 			blueVal = 200- (j*30);
// 			fill(redVal, greenVal, blueVal);
// 			rect((65*i),(65*j),50,50);
// 		}
// 	}
// }






/******************************
			Mapping
*******************************/

// var mapBlueVal;
// var mapRedVal;
// var mapSizeX;
// var mapSizeY;

// function setup(){
// 	createCanvas(600,500);
// }

// function draw(){
// 	background(255);
// 	mapBlueVal = map(mouseY, 0, height, 0, 255);
// 	mapRedVal = map(mouseX, 0, width, 0, 255);
// 	mapSizeX = map(mouseX, 0, width, 40,400);
// 	mapSizeY = map(mouseY, 0, height, 40,400);
// 	fill(mapRedVal,0,mapBlueVal);
// 	ellipse(width/2, height/2, mapSizeX, mapSizeY);
// }






/******************************
			Exercise
*******************************/

// //global variables
// var constrainVal;
// var mapVal;


// //actual program
// function setup(){
// 	createCanvas(600,600);
// }

// function draw(){
// 	background(255);
// 	line(100,0,100,height);
// 	line(500,0,500,height);
// 	constrainVal = constrain(mouseX, 100, 500);
// 	mapVal = map(mouseX, 0, width, 100, 500);
// 	fill(200,100,50);
// 	ellipse(constrainVal, 2*height/3, 30,30);
// 	ellipse(mapVal, height/3, 30,30);
// }






/******************************
		Matrix - Push n Pop
*******************************/

function setup(){
	createCanvas(600,500);
}

function draw(){
	push();
	translate(200,200);
	rect(0,0,100,100);
	pop();
}