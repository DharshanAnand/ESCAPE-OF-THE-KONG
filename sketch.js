var monkey,monkeyrunning;
var ground;
var bk,bkimg;
var count ;
var bimage;
var bananasGroup;
var oimage;   
var obstaclesGroup;
function preload()
{
 monkeyrunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 bkimg=loadImage("jungle.png"); 
  bimage=loadImage("banana.png"); 
   oimage=loadImage("stone.png");
}

function setup() {
  
  createCanvas(600,400);
  monkey=createSprite(40,300,10,10);
 monkey.addAnimation("running",monkeyrunning);
  
  ground=createSprite(200,350,1200,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
bk=createSprite(200,260,800,400);
  bk.addImage(bkimg);
  bk.velocityX=-4;
  bk.scale=2.5;
  bk.x=bk.width/2;
  
  count=0;
  
 bananasGroup = new Group(); 
 obstaclesGroup = new Group(); 
}

function draw() {
  background("white");
  
   monkey.scale=0.07;
   monkey.collide(ground);
  if(keyDown("space")){
   monkey.velocityY=-7;  
 }
  
  if (bk.x<0) {
   bk.x=bk.width/2;
     }
  monkey.depth=bk.depth;
  monkey.depth=monkey.depth+1;
  
 count.depth=bk.depth;
 count.depth=count.depth+3;
  
  if(ground.x<0){
   ground.x=ground.width/2;  
     
     }
  
  
  
  
  
  
  
  switch(count){
    case 10: monkey.scale=0.12;
           break;
  case 20: monkey.scale=0.14;
           break;
  case 30: monkey.scale=0.16;
           break;
  case 40: monkey.scale=0.18;
           break;
           default:break;    
  }
  
  
   if(bananasGroup.isTouching(monkey)){
   count=count+2;  
  monkey.scale=monkey.scale+0.1
     }
  
  
  if(obstaclesGroup.isTouching(monkey)){
  monkey.scale=0.07;
    score=0;
   
    
    
     
     }
  
  spawnbananas();
  spawnobstacles();
  monkey.velocityY= monkey.velocityY+0.3; 
 drawSprites();
  fill("white");
  
  textSize(18);
  text("  Score: "+ count, 75, 50);
}



function spawnbananas() {
  
  if (World.frameCount % 80 === 0) {
 var  b = createSprite(600,275,40,10); 
   b.y= random(160,220); 
   b.addImage(bimage);
   b.scale = 0.05;
   b.velocityX = -5;
   b.lifetime = 130  
   b.depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
   bananasGroup.add(b);               
 
  }
}
  function spawnobstacles() {
  
  if (World.frameCount % 80 === 0) {
 var  o = createSprite(600,320,40,10); 
   o.x= random(599,600);
   o.addImage(oimage);
   o.scale = 0.15;
   o.velocityX = -5;
   o.lifetime = 130;
   o.depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
   obstaclesGroup.add(o);   
  }
  }
