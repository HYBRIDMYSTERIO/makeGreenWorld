
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , ground , paper, dustbin_1, dustbin_2, dustbin_3 , green;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground = new Ground(400,540,800,10);
	paper = new Paper(100,200);
	dustbin_1 = new Dustbin(500,570,200,10);
	dustbin_2 = new Dustbin(410,460,10,110);
	dustbin_3 = new Dustbin(590,460,10,110);
    green = new Dust(500,460,220,100);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  ground.displayground();
  paper.displaypapers();
  dustbin_1.displaydustbin();
  dustbin_2.displaydustbin();
  dustbin_3.displaydustbin();
  green.displaydust();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:3.8,y:-3.8});
	}
}

