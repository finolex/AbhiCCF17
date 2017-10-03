
/******************************
		Matrix - Push n Pop
*******************************/

function setup(){
	createCanvas(900,500);
}

function draw(){
	for(var i = 0; i < 4; i++){
		push();
		translate((i*200)+100,200);
		rotate(PI/(2+(2*i/10)));
		rect(0,0,100,100);
		pop();
	}
}