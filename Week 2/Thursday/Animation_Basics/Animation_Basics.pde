int xPos = 10;
int yPos = 400;
int speed = 5;
int redVal;
int blueVal;
int greenVal;

void setup() {
  size(600,600);
}

void draw () {
  
  background(150);
  
  println(xPos);
  
  
  xPos = xPos + speed;

  if (xPos > width || xPos <= 0){
    println("hit the edge");
    speed = -speed;  
  }
  
  
  redVal = int(random(0,255));
  greenVal = int(random(0,255));
  blueVal = int(random(0,255));
  fill(redVal, greenVal, blueVal);
  
  ellipse(xPos,yPos,20,20);
  
}