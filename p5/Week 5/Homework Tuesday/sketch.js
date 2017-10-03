/******************************
		Matrix - Push n Pop
*******************************/

function setup(){
	createCanvas(900,500);
}

function draw(){
	push();
	translate(100,200);
	rotate(PI/2.1);
	rect(0,0,100,100);
	pop();

	push();
	translate(300,200);
	rotate(PI/2.3);
	rect(0,0,100,100);
	pop();

	push();
	translate(500,200);
	rotate(PI/2.5);
	rect(0,0,100,100);
	pop();

	push();
	translate(700,200);
	rotate(PI/2.7);
	rect(0,0,100,100);
	pop();
}