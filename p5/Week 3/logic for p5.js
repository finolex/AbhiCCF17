function setup(){
	createCanvas(600,500);
}

function draw(){
	background(150);
 	noStroke();
  if(mouseX <= 300 && mouseY < 333 ){
    	fill(255,0,0);
    	rect(0,0,300,333);	
	} else if (mouseX > 300 && mouseX < 450) {
    	fill(255,255,0);
    	rect(300,0,300,600);
	} else if (mouseX >= 450){
    	fill(0,0,255);
    	rect(450,0,150,600);    
	} else if (mouseX <=300 && mouseY >=333 && mouseIsPressed){
   		fill(0,128,129);
   		rect(0,333,300,200);
	} else {
   		return; 
	}
}