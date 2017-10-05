
/******************************
		Matrix - Push n Pop
*******************************/

function setup(){
	createCanvas(900,700);
}

function draw(){
	background(255);
	var mouseMap = map(mouseX, 0, width, 2, 10);
	var mouseScale = map(mouseY, 0, height, 1 ,1.5)
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
		push();
		translate((i*200),(j*200));
		rotate(-2*PI/(mouseMap));
		scale(mouseScale);
		rect(i,j,100,100);
		pop();
		}
	}
}