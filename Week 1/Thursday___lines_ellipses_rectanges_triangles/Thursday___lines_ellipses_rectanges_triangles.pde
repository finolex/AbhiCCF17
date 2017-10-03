size(500,400);
background(255,0,127);

//Create point
noStroke();
point(200,100);

//Create rect
fill(12,230,247);
stroke(200, 100, 0);
strokeWeight(10);

rect(10, 20, 50, 30);

//line
line(100, 20, 200, 40);

//triangle
fill(20,30,100);
triangle(20,300, 40,100, 60,200);

//ellipse
ellipse(200,300, 50,70);

//connected vertices
noStroke();
fill(255, 100, 255);
beginShape();

vertex(450, 200);
vertex(350, 30);
vertex(300, 100);
vertex(250, 300);

endShape();