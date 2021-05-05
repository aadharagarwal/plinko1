var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 1);

  
  for (var k = 5; k <= 900; k = k + 79) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 65; j <= width - 15; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 20; j <= width - 15; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = -17; j <= width -20; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 20; j <= width - 15; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
  

}

function draw() {
  background("black");
  text(mouseX + ',' + mouseY, mouseX, mouseY)
  textSize(20)

  Engine.update(engine);
  ground.display();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  
  for (var b = 0; b < particles.length; b++){
    particles[b].display()
  }
}