var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    box1= new Box(320, 620, 20,100);
	box2= new Box(480, 620, 20,100);
	box3= new Box(width/2, 660, 180,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  if(packageSprite.y >= 600){
	  fill("blue");
	  textSize(20);  
	text("YOU DID IT SAFE LANDING",250,300);
}

  drawSprites();
  box1.display();
  box2.display();
  box3.display();
 
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x+=20;
		Matter.Body.translate(packageBody,{x:20,y:0});
	}
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x-=20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}

 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



