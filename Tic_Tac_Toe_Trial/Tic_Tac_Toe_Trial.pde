int clicks = 0;

void setup() {  
  size(500,500);
  background(150);
  //create rectangle
  fill(200,200,255);
  rect(100,100,300,300);
  rect(100,100,100,100);
  rect(100,200,100,100);
  rect(100,300,100,100);
  rect(200,100,100,100);
  rect(200,200,100,100);
  rect(200,300,100,100);
  rect(300,100,100,100);
  rect(300,200,100,100);
  rect(300,300,100,100);
}

boolean flag;

void clickLoop() {
  if(clicks % 2 == 0){
    fill(0,0,255);
  }
  if(clicks % 2 == 1){
    fill(255,0,0);
  }
  clicks = clicks + 1;
}

void draw () {
  //creating logic for changing the colour of the tic tac toe cubes
  if(mousePressed && flag == false){
    if (mouseX >100 && mouseX < 200 && mouseY > 100 && mouseY < 200 && mousePressed){
     clickLoop();
     rect(100,100,100,100);
     flag = true;
    }
   
    if (mouseX >200 && mouseX < 300 && mouseY > 100 && mouseY < 200 && mousePressed){
      clickLoop();
      rect(200,100,100,100);
      flag = true;
    }
  
    if (mouseX >300 && mouseX < 400 && mouseY > 100 && mouseY < 200 && mousePressed){
      clickLoop();
      rect(300,100,100,100);
      flag = true;
    }
  
    if (mouseX >100 && mouseX < 200 && mouseY > 200 && mouseY < 300 && mousePressed){
      clickLoop();
      rect(100,200,100,100);
      flag = true;
    }
    if (mouseX >100 && mouseX < 200 && mouseY > 300 && mouseY < 400 && mousePressed){
      clickLoop();
      rect(100,300,100,100);
      flag = true;
    }
  
    if (mouseX >200 && mouseX < 300 && mouseY > 200 && mouseY < 300 && mousePressed){
      clickLoop();
      rect(200,200,100,100);
      flag = true;
    }
    if (mouseX >200 && mouseX < 300 && mouseY > 300 && mouseY < 400 && mousePressed){
      clickLoop();
      rect(200,300,100,100);
      flag=true;
    }
    if (mouseX >300 && mouseX < 400 && mouseY > 200 && mouseY < 300 && mousePressed){
      clickLoop();
      rect(300,200,100,100);
      flag = true;
    }
    if (mouseX >300 && mouseX < 400 && mouseY > 300 && mouseY < 400 && mousePressed){
      clickLoop();
      rect(300,300,100,100);
      flag = true;
    }
  }
}

void mousePressed (){
    flag = false;
    print (clicks);
}