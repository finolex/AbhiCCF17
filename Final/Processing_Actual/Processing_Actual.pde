//sound stuff //<>//
import processing.sound.*;
SoundFile snare;
SoundFile highhat;
SoundFile bass;

/* Sparkfun Arduino/Processing Serial communication tutorial */
import processing.serial.*;
Serial myPort;  // Create object from Serial class
String val;     // Data received from the serial port


//create circles class and other Processing specific variables
int numcircles = 20;
Circle [] circles = new Circle[numcircles];
int timeSnap, timeDiff;
boolean flag;



void setup() {
  size(1000, 800);
  frameRate(30);
  background(0);

  // snare drum sfx https://freesound.org/people/Veiler/sounds/264859/
  // bass drum sfx https://freesound.org/people/adammusic18/sounds/208871/
  // high hat sfx https://freesound.org/people/waveplay/sounds/250530/
  snare = new SoundFile(this, "snare.wav");
  highhat = new SoundFile(this, "highhat.wav");
  bass = new SoundFile(this, "bass.wav");

  timeSnap = 0;

  for (int i = 0; i < numcircles; i++) {
    circles[i] = new Circle();
  }
  
  /* Sparkfun Arduino/Processing Serial communication tutorial */
  String portName = Serial.list()[0]; //change the 0 to a 1 or 2 etc. to match your port
  myPort = new Serial(this, portName, 9600);

  flag = true;
}



void draw() {
  for (int i = 0; i < circles.length; i++) {
    circles[i].readSensor();
    circles[i].display();
    circles[i].fade();
  }
  timeDiff = second() - timeSnap;
}


class Circle {
  float xPos, yPos;
  float alpha = 0;
  float fadeSpeed = 1;
  int r, g, b, size;
  int colour = 0;

  Circle() {
  }

  void fade() {
    alpha += fadeSpeed;
  }

  void readSensor() {

    if ( myPort.available() > 0) {
      int val = myPort.read();  
      println(val);

      if (val > 150 && val < 210) {
        colour = 1;
      } else if (val > 220 && val < 290) {
        colour = 2;
      } else if (val > 0 && val < 100) {
        colour = 3;
      } else {
        colour = 0;
      }
    }
  }


  void display() {
    noStroke();
    if (timeDiff < 1) {

      if (colour == 1 && flag == true) {
        snare.play();
        size = 250;
        r = 255;
        g = 0;
        b = 0;
        xPos = random(100, 300);
        yPos = random(200, 400);
        flag = false;
      }

      if (colour == 2 && flag == true) {
        highhat.play();
        size = 400;
        r = 0;
        g = 255;
        b = 0;
        xPos = random(150, 500);
        yPos = random(400, 600);
        flag = false;
      }

      if (colour == 3 && flag == true) {
        bass.play();
        size = 500;
        r = 0;
        g = 0;
        b = 255;
        xPos = random(500, 900);
        yPos = random(200, 700);
        flag = false;
      }

      if (colour == 0  && flag == true) {
        size = 1000;
        r = 0;
        g = 0;
        b = 0;
        xPos = 500;
        yPos = 400;
        flag = false;
      }

      fill(r, g, b, alpha); 
      ellipse(xPos, yPos, size, size);
    }
    if (timeDiff >= 1) {
      timeSnap = second();
      fill(0);
      rect(0, 0, 1000, 800);
      flag = true;
      alpha = 0;
    }
  }
};