
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1;
var ground2;
var ground3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ballo =
	{
		isStatic : false,
		density : 1.2,
        friction : 0,
		restitution : 0.3
	}
	ball = Bodies.circle(260, 100, 50, ballo);
	World.add(world, ball);

	ground1 = new Ground(width/2, 670, width, 20);
	ground2 = new Ground(1100, 600, 20, 120);
	ground3 = new Ground(1600, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  keyPressed();
  
  ellipse(ball.position.x, ball.position.y, 50, 50);
  ground1.display();
  ground2.display();
  ground3.display();
  //drawSprites();
 
}

function keyPressed() 
{
   if (keyCode === UP_ARROW)
   {
	Matter.Body.applyForce(ball, ball.position, {x: 5, y: -20});
   }
}

