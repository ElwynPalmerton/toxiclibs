
var VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
  VerletParticle2D = toxi.physics2d.VerletParticle2D,
  VerletSpring2D = toxi.physics2d.VerletSpring2D,
  AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior,
  VerletMinDistanceSpring2D = toxi.physics2d.VerletMinDistanceSpring2D,
  Vec2D = toxi.geom.Vec2D,
  Rect = toxi.geom.Rect,
  GravityBehavior = toxi.physics2d.behaviors.ConstantForceBehavior;

let trampoline, attractor;
let physics;

let centerX, centerY;

function setup() {

  //Initialize the physics world.
  physics = new VerletPhysics2D;
  //These three lines could also be:
  //physics.addBehanior(newGravityBehavior(new Vec2D(0, 1)));
  const gravity = new Vec2D(0, 1);

  var myCanvas = createCanvas(windowWidth, windowHeight);
  physics.setWorldBounds(new Rect(0, 0, width, height));
  //This needs to happen after the createCanvas because otherwise it will initialize at the default value 100, 100;

  background(0, 0, 0);
  noStroke();
  fill(150, 50, 200);

  centerX = width / 2;
  centerY = height / 2;

  trampoline = new Trampoline();
  trampoline.addTassels();

  attractor = new Attractor(centerX, centerY);
  attractor.lock();

  particle = new Attractor(0, 0);
  particle.lock();
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
  trampoline.display();

  attractor.display();

  particle.orbit();
  particle.display();
}