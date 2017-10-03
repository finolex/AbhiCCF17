void setup() {  
  size(600,600);
 
}

void draw(){
  background(150);
  
  if(mouseX <= 300 && mouseY < 400 ){
    fill(0,0,255);
    rect(0,0,300,400);
  }
  else if (mouseX > 300 && mouseX < 450) {
    fill(255,0,0);
    rect(300,0,300,600);
  }
  else if (mouseX >= 450){
    fill(255,255,0);
    rect(450,0,150,600);    
  }
  else if (mouseX <=300 && mouseY >=400 && mousePressed){
    fill(0,128,129);
    rect(0,400,300,200);
  }
  else {
    return; 
  }
  
}