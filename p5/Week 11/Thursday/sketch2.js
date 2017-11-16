var input;
var button;
var textI;

function setup(){
	createCanvas(500,500);
	background(150);

	input = createInput("How is the weather?");
	input.position(600,width/2);

	button = createButton("Click me!");
	button.position(750, width/2);
	button.mousePressed(display);
}

function draw(){
}

function display(){
	textI = input.value();
	text(textI, random(height), random(width));
	input.value('');
}