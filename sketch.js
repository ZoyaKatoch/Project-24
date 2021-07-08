
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
    dustbin = new DustBin(655, 390, 100, 10);
    paper = new Paper(100, 300, 10);
    ground = new Ground(width / 2, 400, width, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbin.display();
  paper.display(); 
  ground.display();

  
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 15,
		y: -15
	  });
	}
  }

