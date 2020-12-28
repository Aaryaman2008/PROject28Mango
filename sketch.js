
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImage,boy,tree,stone,ig;
var ground,mango1,mango2,mango3,mango4,mango5;
function preload()
{
boyImage=loadImage("boy1.png");    
bgImage=loadImage("bgImage.jpg");	
}

function setup() {
createCanvas(1500, 800);

engine = Engine.create();
world = engine.world;

boy=createSprite(1200,600,100,170);
boy.addImage("boy1",boyImage);
boy.scale=0.4

tree=new Tree(250,700,500,550);
stone=new Stone(1240,580,20);
ground=new Ground(750,790,1500,20);

mango1=new Mango(75,390,40);
mango2=new Mango(220,250,40);
mango3=new Mango(400,375,40);
mango4=new Mango(330,330,40);
mango5=new Mango(200,380,40);






slingshot = new Slingshot(stone.body,{x:1240,y:530});
Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(bgImage);
Engine.update(engine);
tree.display();  
drawSprites();
//boy.display();
stone.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
//mouseDragged();
//mouseReleased();
detectCollision(stone,mango1); 
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
}

function mouseDragged() {
 Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
}
      
function mouseReleased() {
 slingshot.fly()
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
   
    }
}

function detectCollision(Istone,Imango){
mangoBodyPosition=Imango.body.position;  
stoneBodyPosition=Istone.body.position; 
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)  
if(distance<=Imango.r+Istone.r){
    Matter.Body.setStatic(Imango.body,false);
}

}

