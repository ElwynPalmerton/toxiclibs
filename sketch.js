
var VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
  VerletParticle2D = toxi.physics2d.VerletParticle2D,
  VerletSpring2D = toxi.physics2d.VerletSpring2D,
  VerletMinDistanceSpring2D = toxi.physics2d.VerletMinDistanceSpring2D,
  Vec2D = toxi.geom.Vec2D,
  Rect = toxi.geom.Rect;

let GravityBehavior = toxi.physics2d.behaviors.ConstantForceBehavior;

const particles = [];
const springs = [];
let p1, p2;

let physics;

function setup() {

  //Initialize the physics world.
  physics = new VerletPhysics2D;
  //These three lines could also be:
  //physics.addBehanior(newGravityBehavior(new Vec2D(0, 1)));
  const gravity = new Vec2D(0, 1);
  // const gb = new GravityBehavior(gravity);
  // physics.addBehavior(gb);

  var myCanvas = createCanvas(windowWidth, windowHeight);
  physics.setWorldBounds(new Rect(0, 0, width, height));


  //This needs to happen after the createCanvas because otherwise it will initialize at the default value 100, 100;


  background(0, 0, 0);
  noStroke();
  fill(150, 50, 200);


  //Create n particles
  //   ---Near center but randomly distributed away from it.
  //Loop over them and connect to all the other particles.
  //Add the edge connections to the particle instance.
  //
  //Create an attractor in the center to balance it.
  //
  //Change the loop above to randomize the connections.
  //
  //Integrate this with the BFS algorithm.
  //   -Check to see what I need from the BFS sketch.
  //   -Add a button to run the algorithm.
  //   -Run the algorithm and change colors for each change.



  // for (let i = 0; i < 40; i++) {
  //   const particle = new Particle(x * i, y);
  //   physics.addParticle(particle);
  //   particles.push(particle);
  // }

  // const NUM_PARTICLES = 20;


  // const gravity = new Vec2D(0, 1);

  const COLS = 20;
  const ROWS = 20;
  const NUM_PARTICLES = ROWS * COLS;

  const xDist = width / COLS;
  const yDist = height / ROWS;

  for (let i = 0; i < ROWS; i++) {
    let particleRow = [];
    for (let j = 0; j < COLS; j++) {
      let p = new Particle(i * xDist + xDist / 2, j * yDist + yDist / 2);
      particleRow.push(p);
      physics.addParticle(p);
    }
    particles.push(particleRow);
  }

  //Link all of the particles together.  
  //Lock the corners.

  const DIST = 20;
  const STRENGTH = 0.001;

  for (let i = 0; i < ROWS - 1; i++) {
    for (let j = 0; j < COLS; j++) {
      let p1 = particles[i][j];
      let p2 = particles[i + 1][j];

      let spring = new Spring(p1, p2, DIST, STRENGTH);
      springs.push(spring);
      physics.addSpring(spring);
    }
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS - 1; j++) {
      let p1 = particles[i][j];
      let p2 = particles[i][j + 1];
      let spring = new Spring(p1, p2, DIST, STRENGTH);
      springs.push(spring);
      physics.addSpring(spring);
    }
  }

  particles[0][0].lock();
  particles[0][COLS - 1].lock();
  particles[ROWS - 1][COLS - 1].lock();
  particles[ROWS - 1][0].lock();


  // p1 = new Particle(width / 2, 30);
  // p2 = new Particle(width / 2 + 160, 30);
  // p1.lock();

  //new VerletSpring2d
  //  1) Particle #1
  //  2) Particle #2
  //  3) Rest length - in pixels
  //  4) Strength - a number between 0 and 1.
  //         --- 1 is completely rigid.

  // let spring = new VerletSpring2D(p1, p2, 160, 0.7);
  //To show the spring I need to make a class which extends VerletSpring2D and has a display method.

  // physics.addParticle(p1);
  // physics.addParticle(p2);
  // physics.addSpring(spring);

}

let run = true;
function keyPressed(e) {
  if (keyCode === 32) {
    run = !run;
    run ? loop() : noLoop();
  }
}

function draw() {
  background(0, 0, 0);
  physics.update();
  // myParticle.display();
  // p1.display();
  // p2.display();

  // particles.forEach(row => {
  //   row.forEach(particle => {
  //     particle.display();
  //   })
  // })


  springs.forEach(spring => {
    spring.display();
  })
}