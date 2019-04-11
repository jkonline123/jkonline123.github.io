var ball = {
  x: 200,
  y: 30,
  speed: 0,
  display: function() {
    fill(0,0,255);
    ellipse(this.x, this.y, 24, 24);
    fill(0,0,255);
    ellipse(this.x+90, this.y, 24,24);
    fill(0,0,255);
    ellipse(this.x+150, this.y, 24,24);
    fill(0,0,255);
    ellipse(this.x+190, this.y, 24,24);
  },
  move: function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;

  },
  bounce: function() {
    if (this.y > height) {
      this.speed = this.speed * -0.95;
    }
  }
};

var gravity = 0.2;

function setup() { 
  let canvas= createCanvas(600, 50);
    canvas.parent("setPosition")
    
} 

function draw() {
  background(255,255,255,255);
  ball.display();
  ball.move();
  ball.bounce();
}
