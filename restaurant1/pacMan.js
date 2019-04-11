i = 1.85 // upper mouth radian
x = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing
xPos = -50

function setup() { 
  let canvas= createCanvas(windowWidth, 200);
    canvas.parent("setPosition")
    
} 

function draw() { 
  noStroke();
  background(255);
  //Pacman body
  fill(255, 255, 0);
  ellipse(xPos, 100, 200, 200);
  
  //Pacman mouth
  fill(255);
  // if the upper mouth radian reaches 2*PI, 
  // the direction reverses.
  // this affects the lower mouth as well.
  if (i >= 2 || i <= 1.8) {
    speed = speed*(-1) 
  }
  arc(xPos, 100, 200, 200, 
      (i+=speed)*PI, (x-=speed)*PI, PIE);
  
  //Pacman eye
  fill(0);
  ellipse(xPos, 50, 15, 15);

  //make it move
  xPos += 3;
  if (xPos > width+75) {
  xPos = -50
  }
}