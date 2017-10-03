// clicks + flag
var clicks = 0;

var flag = false;

// creating an array of the chosen grid size with default values of a magic square
var grid = [];
function setup(){
  // first real attempt of understanding arrays and implementing own grid
  createCanvas(500,500);
  background(150);
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
    grid[i] = [];
     fill(255);
     rect((i*100)+100,(j*100)+100,100,100);
    }
  }

  grid[0][0] = 2;
  grid[0][1] = 9;
  grid[0][2] = 4;
  grid[1][0] = 7;
  grid[1][1] = 5;
  grid[1][1] = 3;
  grid[2][0] = 6;
  grid[2][1] = 1;
  grid[2][2] = 8;
  var x = 100; 
  var y = 100;
//   for(int i = 0; i < 3; i++){
//    for(int j = 0; j < 3; j++){
//      fill(200,200,255);
//      rect(x,y,100,100);
//      x += 100;
//    }
//    x=100;
//    y+=100;
//   }
// }
}

function clickLoop() {
  if(clicks % 2 == 0){
    fill(0,0,255);
  } 
  if(clicks % 2 == 1){
    fill(255,0,0);
  }
  clicks = clicks + 1;
}

function draw(){
   //creating logic for changing the colour of the tic tac toe cubes
  if(mouseIsPressed && flag == false){
    if (mouseX >100 && mouseX < 200 && mouseY > 100 && mouseY < 200){
     clickLoop();
     rect(100,100,100,100);
     flag = true;
    } if (mouseX >200 && mouseX < 300 && mouseY > 100 && mouseY < 200){
      clickLoop();
      rect(200,100,100,100);
      flag = true;
    } if (mouseX >300 && mouseX < 400 && mouseY > 100 && mouseY < 200){
      clickLoop();
      rect(300,100,100,100);
      flag = true;
    } if (mouseX >100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
      clickLoop();
      rect(100,200,100,100);
      flag = true;
    } if (mouseX >100 && mouseX < 200 && mouseY > 300 && mouseY < 400){
      clickLoop();
      rect(100,300,100,100);
      flag = true;
    } if (mouseX >200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
      clickLoop();
      rect(200,200,100,100);
      flag = true;
    } if (mouseX >200 && mouseX < 300 && mouseY > 300 && mouseY < 400){
      clickLoop();
      rect(200,300,100,100);
      flag=true;
    } if (mouseX >300 && mouseX < 400 && mouseY > 200 && mouseY < 300){
      clickLoop();
      rect(300,200,100,100);
      flag = true;
    } if (mouseX >300 && mouseX < 400 && mouseY > 300 && mouseY < 400){
      clickLoop();
      rect(300,300,100,100);
      flag = true;
    }
  }
}

function mousePressed (){
    flag = false;
    print (clicks);
}