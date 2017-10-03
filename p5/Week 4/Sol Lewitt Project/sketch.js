function setup(){
	createCanvas(500,500);
	background(150);

	//create outer box

	strokeWeight(15);
	fill(255);
	rect(0,0,500,500);

	//create inner box lines

	//front face
	strokeWeight(8);
	fill(255);
	rect(50,200,250,250);

	//top face
	strokeWeight(7);
	fill(255);
	noFill();
	beginShape();
	vertex(50, 198);
	vertex(200, 75);
	vertex(445, 75);
	vertex(300, 200);
	endShape(CLOSE);

	//side face
	strokeWeight(7);
	fill(255);
	noFill();
	beginShape();
	vertex(300, 450);
	vertex(450, 305);
	vertex(450, 78);
	vertex(300, 200);
	endShape(CLOSE);
}

function draw(){

	//lines for front face
	for(var i = 200; i<450; i+=19){
		line(50,i,300,i);
	}


	//lines for top face
	var k=200;
	var increase =25;

	for(var j = 50; j<300; j+=increase){
		line(j,200,k,75);
		k+=increase;
	}


	//lines for side face
	var l=450;
	var m=200;
	var decrease= (-15);
	var decrease2= decrease+2;

	for(var n = 300; n<450; n+=15){
		line(n,m,n,l);
		l+=decrease;
		m+=decrease2;

	}

	//small cube
	strokeWeight(7);
	fill(255);
	beginShape();
	vertex(200, 200);
	vertex(263, 150);
	vertex(360, 150);
	vertex(360, 230);
	vertex(300, 295);
	vertex(200, 295);
	endShape(CLOSE);

	//lines for small cube back
	strokeWeight(6);
	for(var p = 150; p<240; p+=15){
		line(265,p,360,p);
	}

	//lines for small cube bottom
	var k=268;
	var increase =20;

	for(var j = 200; j<300; j+=increase){
		line(j,295,k,225);
		k+=increase;
	}

	//lines for small cube side
	var l=290;
	var m=205;
	var decrease= (-15);
	var decrease2= decrease+2;

	for(var n = 200; n<270; n+=15){
		line(n,m,n,l);
		l+=decrease;
		m+=decrease2;

	}

}
