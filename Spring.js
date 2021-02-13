class Spring extends VerletSpring2D {
  constructor(p1, p2, distance, strength) {
    super(p1, p2, distance, strength);
    this.p1 = p1;
    this.p2 = p2;
  }

  display() {
    stroke(0, 255, 0);
    strokeWeight(1);

    line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
  }
}