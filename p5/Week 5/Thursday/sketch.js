function setup(){
	createCanvas(600,600);
}

function draw(){
	background(0);
	var mouseXMap = map (mouseX, 0, width, 0, 2);
	var mouseYMap = map (mouseY, 0, height, 0, 2);
	for(var i=0; i < 10; i++){
		for(var j=0; j < 10; j++){
			push();
			rotate(PI/((j+1)*10));
			fill((i*20)*mouseXMap, ((j*20))*mouseYMap, ((i*j*10))*mouseXMap*mouseYMap);
			rect(i*100, j*100, 100, 100);
			for(var k = 0; k < 5; k++){
				stroke(255-(i*10), 255-(j*20), 255-(k*30));
				strokeWeight(2);
				line(mouseXMap*(100/3)*((4*k)+1), j, (100/3)*((4*k)+1), mouseYMap*j*100);
			}
			pop();
		}
	}

}