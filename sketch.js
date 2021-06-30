
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var mangoImg, boyImg, stoneImg, treeImg, engine,world,ground,stone,tree;
var mango1,mango2,mango3,mango4,mango5,boy,sling;
var launchingForce=100;
function preload()
{
 boyImg = loadImage("Plucking mangoes/boy.png");
 mangoImg = loadImage("Plucking mangoes/mango.png");
 stoneImg = loadImage("Plucking mangoes/stone.png");
 treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,699,800,50);
	stone = new Stone(200,200);
	tree = new Tree(1050,580);
	mango1 = new Mango(900,160,40);
	mango2 = new Mango(1140,150,40);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,230,40);
	ground =new Ground(width/2,600,width,20);
	sling=new Boy(stone.body,{x:235,y:420});
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
	
	}


function draw() {
	background(230);
	
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);

 
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  tree.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  drawSprites();
 

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  sling.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



