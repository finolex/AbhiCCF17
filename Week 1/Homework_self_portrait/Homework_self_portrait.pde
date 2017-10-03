//general document settings
size(750,750);
background(200,236,255);



//creating mr meeseeks
fill(100,200,255);

//larger head
ellipse(375,300,350,350);

//smaller chin
ellipse(375,335,200,300);

//creating blank circle to get rid of stroke from chin
noStroke();
ellipse(375,305,340,340);

//creating eyes
fill(0,0,0);
ellipse(345,265, 25,25);
fill(255,255,255);
ellipse(347,262,7,7);
stroke(0,0,0);
line(310,260, 330,230);

//creating mouth
fill(0,0,0);
ellipse(375,400,100,30);
ellipse(332,387,20,40);
ellipse(340,390,30,30);
ellipse(345,390,30,30);
ellipse(350,393,25,25);

//creating hair
stroke(0,0,0);
fill(125,255,125);
triangle(360,100, 320,150, 400,125);
triangle(370,100, 340,180, 400,125);
triangle(380,100, 360,210, 400,125);

//dimples
stroke(0,0,0);
line(300,360, 300,410);

//teeth top row
fill(255,255,255);
rect(350,382,10,10,2);
rect(361,385,10,10,2);
rect(371,385,10,10,2);
//teeth bottom row
rect(351,403,10,10,2);
rect(361,405,10,10,2);
rect(371,405,10,10,2);


//creating right half
noStroke();
fill(200,236,255);
rect(375,0, 750,750);



//ice king creation
//face
stroke(0,0,0);
fill(100,150,255);
rect(375,130, 175,244, 10);

//chin
stroke(0,0,0);
fill(100,150,255);
triangle(375,370, 375,485, 549,370);
//overlay chin
noStroke();
triangle(376,365, 376,484, 549,370);

//crown
stroke(0,0,0);
fill(200,200,255);
//bottom row
triangle(390,210, 420,195, 430,160);
triangle(450,200, 480,195, 500,140);
triangle(480,250, 540,245, 580,80);
//top row
triangle(390,140, 420,135, 430,90);
triangle(450,140, 480,135, 493,80);

//eyes
//outer
stroke(0,0,0);
fill(20,50,255);
ellipse(450,265,60,20);
//inner white
noStroke();
fill(200,240,255);
ellipse(450,264,13,15);
//pupil
noStroke();
fill(0,0,0);
ellipse(450,261,6,6);

//nose
stroke(0,0,0);
fill(20,50,255);
triangle(376,275, 376,360, 410,360);

//mouth
stroke(100,150,255);
fill(50,100,255);
ellipse(400,405, 48, 20);
noStroke();
fill(0,0,0);
ellipse(395,405, 60, 2);

//scars
stroke(20,50,255);
strokeWeight(2);
line(450,400, 485,370);
line(450,370, 490,335);
line(450,350, 500,300);
line(450,330, 530,260);

//ear
stroke(0,0,0);
strokeWeight(1);
fill(100,200,255);
triangle(551,220, 548,300, 600,210);