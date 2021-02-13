class Attractor extends VerletParticle2D {
  constructor(x = width / 2, y = height / 2) {
    let pos = new Vec2D(x, y);
    super(pos)
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.radius = 200;

    physics.addParticle(this);
    let attraction = new AttractionBehavior(this, width * 2, 0.1);
    physics.addBehavior(attraction, width, 0.1);

  }

  orbit() {
    this.angle += 0.01;
    this.x = Math.sin(this.angle) * 300 + centerX;
    this.y = Math.cos(this.angle) * 300 + centerY;
    particle.set(this.x, this.y);
  }

  display() {
    noFill();
    stroke(255, 0, 255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }




}