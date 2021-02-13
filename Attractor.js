class Attractor extends VerletParticle2D {
  constructor(x = width / 2, y = height / 2) {
    let pos = new Vec2D(x, y);
    super(pos)
    this.x = x;
    this.y = y;
    this.radius = 200;



  }


  display() {
    noFill();
    stroke(255, 0, 255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }




}