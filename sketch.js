
var VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
  VerletParticle2D = toxi.physics2d.VerletParticle2D,
  VerletSpring2D = toxi.physics2d.VerletSpring2D,
  VerletMinDistanceSpring2D = toxi.physics2d.VerletMinDistanceSpring2D,
  Vec2D = toxi.geom.Vec2D,
  Rect = toxi.geom.Rect;

let GravityBehavior = toxi.physics2d.behaviors.ConstantForceBehavior;

const particles = [];
const springs = [];

let physics;

function setup() {

  physics = new VerletPhysics2D;
  const gravity = new Vec2D(0, 1);
  const gb = new GravityBehavior(gravity);
  physics.addBehavior(gb);

  x = 20;
  y = 100;
  for (let i = 0; i < 40; i++) {
    const particle = new Particle(x * i, y);
    physics.addParticle(particle);
    particles.push(particle);
  }
  createCanvas(640, 600);

  var myCanvas = createCanvas(640, 600);
  background(127, 127, 139);
  noStroke();
  fill(150, 50, 200);

  myParticle = new Particle(300, 300);
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
  myParticle.display();

  particles.forEach(particle => {
    particle.display();
  })
}