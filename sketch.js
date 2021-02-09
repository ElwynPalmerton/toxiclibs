
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

  var myCanvas = createCanvas(640, 600);
  physics.setWorldBounds(new Rect(0, 0, width, height));


  //This needs to happen after the createCanvas because otherwise it will initialize at the default value 100, 100;

  background(127, 127, 139);
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

  const NUM_PARTICLES = 10;


  // const gravity = new Vec2D(0, 1);

  for (let i = 0; i < NUM_PARTICLES; i++) {
    let p = new Particle(random(width), random(height));
    particles.push(p);
    physics.addParticle(p);
  }

  for (let i = 0; i < NUM_PARTICLES - 1; i++) {
    for (let j = j + 1; j < NUM_PARTICLES - 1; j++) {




    }
  }





  // p1 = new Particle(width / 2, 30);
  // p2 = new Particle(width / 2 + 160, 30);
  // p1.lock();

  //new VerletSpring2d
  //  1) Particle #1
  //  2) Particle #2
  //  3) Rest length - in pixels
  //  4) Strength - a number between 0 and 1.
  //         --- 1 is completely rigid.

  let spring = new VerletSpring2D(p1, p2, 160, 0.7);
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
  background(55)
  physics.update();
  // myParticle.display();
  // p1.display();
  // p2.display();

  particles.forEach(particle => {
    particle.display();
  })
}