// clicks + flag
int clicks = 0;
boolean flag;

// creating an array of the chosen grid size with default values of a magic square
int[][] grid;

void setup(){
  // first real attempt of understanding arrays and implementing own grid
  size(500,500);
  int [][] grid = {{2,9,4}, {7,5,3},{6,1,8}};
  int x = 100; 
  int y = 100;
  for(int i = 0; i < 3; i++){
   for(int j = 0; j < 3; j++){
     fill(200,200,255);
     rect(x,y,100,100);
     x += 100;
   }
   x=100;
   y+=100;
  }
}


void clickLoop() {
  if(clicks % 2 == 0){
    fill(0,0,255);
  }
  if(clicks % 2 == 1){
    fill(255,0,0);
  }
  clicks = clicks + 1;
}

void draw(){
   //creating logic for changing the colour of the tic tac toe cubes
  if(mousePressed && flag == false){
    if (mouseX >100 && mouseX < 200 && mouseY > 100 && mouseY < 200){
     clickLoop();
     rect(100,100,100,100);
     flag = true;
    }
   
    if (mouseX >200 && mouseX < 300 && mouseY > 100 && mouseY < 200){
      clickLoop();
      rect(200,100,100,100);
      flag = true;
    }
  
    if (mouseX >300 && mouseX < 400 && mouseY > 100 && mouseY < 200){
      clickLoop();
      rect(300,100,100,100);
      flag = true;
    }
  
    if (mouseX >100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
      clickLoop();
      rect(100,200,100,100);
      flag = true;
    }
    if (mouseX >100 && mouseX < 200 && mouseY > 300 && mouseY < 400){
      clickLoop();
      rect(100,300,100,100);
      flag = true;
    }
  
    if (mouseX >200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
      clickLoop();
      rect(200,200,100,100);
      flag = true;
    }
    if (mouseX >200 && mouseX < 300 && mouseY > 300 && mouseY < 400){
      clickLoop();
      rect(200,300,100,100);
      flag=true;
    }
    if (mouseX >300 && mouseX < 400 && mouseY > 200 && mouseY < 300){
      clickLoop();
      rect(300,200,100,100);
      flag = true;
    }
    if (mouseX >300 && mouseX < 400 && mouseY > 300 && mouseY < 400){
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