class Particle extends VerletParticle2D {

  constructor(x, y) {
    let pos = new Vec2D(x, y);
    super(pos)
    this.x = x;
    this.y = y;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }

}