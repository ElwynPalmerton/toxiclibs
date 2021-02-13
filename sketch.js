
var VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
  VerletParticle2D = toxi.physics2d.VerletParticle2D,
  VerletSpring2D = toxi.physics2d.VerletSpring2D,
  AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior,
  VerletMinDistanceSpring2D = toxi.physics2d.VerletMinDistanceSpring2D,
  Vec2D = toxi.geom.Vec2D,
  Rect = toxi.geom.Rect;

let GravityBehavior = toxi.physics2d.behaviors.ConstantForceBehavior;

let trampoline, attractor;

let physics;

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

  trampoline = new Trampoline();


  attractor = new Attractor(width - 200, height - 200);
  physics.addParticle(attractor);
  let attraction = new AttractionBehavior(attractor, width * 2, 0.1);
  physics.addBehavior(attraction, width, 0.1);


  particle = new Attractor(200, 200);
  physics.addParticle(particle);
  attraction = new AttractionBehavior(particle, width * 2, 0.1);
  physics.addBehavior(attraction, width, 0.1);


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
  particle.display();

}