class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.6,
        'friction':0.68,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push()
    translate (pos.x, pos.y);
    rotate (this.body.angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("green")
    fill(255);
    rect(0,0, this.width, this.height);
    pop()
  }
};
