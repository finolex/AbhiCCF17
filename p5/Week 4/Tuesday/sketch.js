var yPos= 300;
var diam = 5;

function setup(){
	createCanvas(600,500);
	background(150);
}

function draw(){
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			ellipse((i*10)+10, (j*10)+10, j*5, j*5);

			var redVal = j*25.5
			var blueVar = i*25.5
			fill(redVal,0,blueVar);
		}
		fill(150,150,150,50);
		rect(0,0,600,500);
	}

	var x = 0;
	while(x < width){
		ellipse(x, height/2, 4, 4);
		x += 10;
	}
}
