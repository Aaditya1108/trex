var trex,trex_running,trex_collided,ground,invisibleground,groundimage;


var count=0;
var PLAY=1;
var END=0;
var gamestate=PLAY;
var cloudsgroup,obstaclesgoup;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided=loadImage("trex_collided.png");
  groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}
function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,160,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  ground=createSprite(200,180,400,10);
  ground.addImage("ground",groundimage);
  invisibleground=createSprite(200,190,400,10);
  invisibleground.visible=false;
cloudsgroup=new Group();
  obstaclesgroup=new Group();
}

function draw() {
  background(180);
  trex.collide(invisibleground);
  if(keyDown("space")){
   trex.velocityY=-10; 
    console.log(trex.y);
  trex.velocityY=trex.velocityY+0.5;
  ground.velocityX=-2; 
  }
    trex.velocityY=trex.velocityY+0.5;
  spawnclouds();
  spawnobstacles();
  drawSprites();
}
function spawnclouds(){
  if(World.frameCount%60===0){
    var cloud=createSprite(600,120,40,10);
  cloud.velocityX=-3;
  cloud.addImage(cloudimage);
  cloud.scale=0.5;
  cloud.y=random(60,120);
    cloud.lifetime=250;
    cloudsgroup.add(cloud);
  }
  
} 
function spawnobstacles(){
  if(World.frameCount%60==0){
    var obstacle=createSprite(600,170,10,20);
    obstacle.velocityX=-6;
    var rand=Math.round( random(1,6));
    switch(rand)
    {
        case 1:obstacle.addImage(obstacle1);
        break;
        case 2:obstacle.addImage(obstacle2);
        break;
        case 3:obstacle.addImage(obstacle3);
        break;
        case 4:obstacle.addImage(obstacle4);
        break;
        case 5:obstacle.addImage(obstacle5);
        break;
        case 6:obstacle.addImage(obstacle6);
        break;
        default:break;
    }
    
      
        
          
    obstacle.scale=0.5;
    obstacle.lifetime=300;
    obstaclesgroup.add(obstacle);
  }
} 