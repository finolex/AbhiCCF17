import processing.sound.*;

int numcircles = 10;
Circle [] circles = new Circle[numcircles];
int timeSnap, timeDiff;
boolean flag;

// snare drum sfx https://freesound.org/people/Veiler/sounds/264859/
// bass drum sfx https://freesound.org/people/adammusic18/sounds/208871/
// high hat sfx https://freesound.org/people/waveplay/sounds/250530/

void setup(){
  size(1000,800);
  frameRate(30);
  background(0);
  timeSnap = 0;
  
  for(int i = 0; i < numcircles; i++){
    circles[i] = new Circle();
  }
}

void draw(){
  for(int i = 0; i < circles.length; i++){
    circles[i].display();
    circles[i].fade();
  }
  timeDiff = second() - timeSnap;
  print(timeDiff);
}


class Circle{
  float xPos, yPos;
  float alpha = 0;
  float fadeSpeed = 1;
  int r, g, b, size;
  int colour = 3;
  
  Circle(){
  }
  
  void fade() {
    alpha += fadeSpeed;  
  }
  
  void fadeOut(){
  }
  
  void display() {
    noStroke();
    if(timeDiff < 3){
      flag = true;
      if(colour == 1){
        size = 100;
        r = 255;
        g = 0;
        b = 0;
        xPos = random(100, 300);
        yPos = random(200, 400);
      }
      
      if(colour == 2){
        size = 150;
        r = 0;
        g = 255;
        b = 0;
        xPos = random(150, 500);
        yPos = random(400, 600);
      }
      
      if(colour == 3){
        size = 200;
        r = 0;
        g = 0;
        b = 255;
        xPos = random(500, 900);
        yPos = random(200, 700);
       }
      
      if(colour == 0){
        size = 1000;
        r = 0;
        g = 0;
        b = 0;
        xPos = 500;
        yPos = 400;
      }
      
      fill(r, g, b, alpha); 
      ellipse(xPos, yPos, size, size); 
      }
     if(timeDiff >= 3){
        timeSnap = second();
        fill(0);
        rect(0,0,1000,800);
        flag = false;
        alpha = 0;
      }
  }
  
};