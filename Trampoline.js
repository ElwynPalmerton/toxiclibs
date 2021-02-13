class Trampoline {


  constructor(rows = 20, cols = 20) {


    this.COLS = cols;
    this.ROWS = rows;

    const NUM_PARTICLES = this.ROWS * this.COLS;

    const xDist = width / this.COLS;
    const yDist = height / this.ROWS;
    this.particles = [];
    this.springs = [];

    for (let i = 0; i < this.ROWS; i++) {
      let particleRow = [];
      for (let j = 0; j < this.COLS; j++) {
        let p = new Particle(i * xDist + xDist / 2, j * yDist + yDist / 2);
        particleRow.push(p);
        physics.addParticle(p);
      }
      this.particles.push(particleRow);
    }

    //Link all of the particles together.  
    //Lock the corners.

    const DIST = 40;
    const STRENGTH = 0.005;

    for (let i = 0; i < this.ROWS - 1; i++) {
      for (let j = 0; j < this.COLS; j++) {
        let p1 = this.particles[i][j];
        let p2 = this.particles[i + 1][j];

        let spring = new Spring(p1, p2, DIST, STRENGTH);
        this.springs.push(spring);
        physics.addSpring(spring);
      }
    }

    for (let i = 0; i < this.ROWS; i++) {
      for (let j = 0; j < this.COLS - 1; j++) {
        let p2 = this.particles[i][j + 1];
        let p1 = this.particles[i][j];
        let spring = new Spring(p1, p2, DIST, STRENGTH);
        this.springs.push(spring);
        physics.addSpring(spring);
      }
    }

    this.particles[0][0].lock();
    this.particles[0][this.COLS - 1].lock();
    this.particles[this.ROWS - 1][this.COLS - 1].lock();
    this.particles[this.ROWS - 1][0].lock();

    this.sheetify();

  }


  sheetify() {
    for (let i = 0; i < this.ROWS; i++) {
      this.particles[0][i].lock();
    }

    for (let i = 0; i < this.ROWS; i++) {
      const rowEnd = this.particles.length - 1;
      this.particles[rowEnd][i].lock();
    }

    for (let i = 0; i < this.COLS; i++) {
      this.particles[i][0].lock();
    }

    for (let i = 0; i < this.COLS; i++) {
      const colEnd = this.particles[0].length - 1;
      this.particles[i][colEnd].lock();
    }

  }

  display() {
    this.springs.forEach(spring => {
      spring.display();
    })
  }



}