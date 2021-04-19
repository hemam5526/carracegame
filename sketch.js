// const Engine = Matter.Engine;
// const Bodies = Matter.Bodies;
// const World = Matter.World;


var b1,p1,c1,c2,c3,c4,c5;
var road

function preload()
{

b1=loadAnimation("backg.jpg");
p1=loadImage("p.car.png");
c1=loadImage("gcar.png");
c2=loadImage("ocar.png");
c3=loadImage("bcar.png");
c4=loadImage("pcar.png");
c5=loadImage("wcar.jpg");
c6=loadImage("ycar.png");
}

function setup()
{
    createCanvas(windowWidth,windowHeight);
  
    
  
    road = createSprite(width-800,height-100,10,10);
    road.addAnimation("roadimg",b1);
    road.scale = 2
    
    player = createSprite(200,height,10,10);
    player.addImage("xyz",p1);
    player.scale=0.2;
    player.rotation = 360    
    
   
     
  
    
      

    
}

function draw()
{
    background("yellow");
    

    drawSprites();
   
}


