
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

	paper = new Paper(100,40,30,30);

	dustbin1 = new dustbin(350,100,100,40);
	dustbin2 = new dustbin(250,140,40,100);
	dustbin3 = new dustbin(450,140,40,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



