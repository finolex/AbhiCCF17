function setup(){
	createCanvas(600,600);
	console.log("Launched the screen!");
}

function draw() {
	background(150);
	// if (mouseDragged) {
	// 	noStroke();
	// 	fill(255,0,127);
	// 	ellipse(mouseX, mouseY, 40, 40);
	// } else 
	if (mouseIsPressed) {
		noStroke();
		rect(mouseX, mouseY, 40, 40);
	} 
	if(mouseDragged) {
		var myDist = dist(mouseX,mouseY, pmouseX, mouseY);
		strokeWeight(myDist/1.3);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function mouseDragged(){
	var myDist = dist(mouseX,mouseY, pmouseX, mouseY);
	strokeWeight(myDist/1.3);
	line(mouseX, mouseY, pmouseX, pmouseY);
}