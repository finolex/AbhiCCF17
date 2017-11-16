var myCanvas;
var ballPos;
var img;
var button;
var greyVal;
var slider;

function setup(){
	var myPara = createElement('p', "here's my text");

	myCanvas = createCanvas(500,500);
	myCanvas.position(50,200);

	myCanvas.mouseOut(showImage);
	myCanvas.mouseOver(hideImage);

	img = createImg("http://placekitten.com/200/300");
	ballPos = 0;

	button = createButton("click me!");
	button.position(600,300);
	button.mousePressed(changeBallColor);
	greyVal = 255;

	slider = createSlider(0,255,0);
	slider.position(600,100);
	slider.style('width', '200px');
}

function draw(){
	var myBg = slider.value();
	background(myBg);

	ballPos +=2;
	fill(greyVal);
	noStroke();
	ellipse(ballPos, height/2, 30,30);
	if(ballPos > width){
		ballPos = 0;
	}
}

function hideImage(){
	img.hide();
}

function showImage(){
	img.show();
}

function changeBallColor(){
	greyVal = 100;
}