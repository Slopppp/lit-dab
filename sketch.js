var tdab,trun,tded;
var grout, grout_1
var grout_image
var invisibleGround
var cloudsGroup,cloudImage
var obstacleGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
function preload() {
trun=loadAnimation('trex1.png','trex3.png','trex4.png') 
tded=loadImage('trex_collided.png')
grout_image=loadImage("ground2.png")
couldImage=loadImage("cloud.png")
obstacle1=loadImage('obstacle1.png')
obstacle2=loadImage('obstacle2.png')
obstacle3=loadImage('obstacle3.png')
obstacle4=loadImage('obstacle4.png')
obstacle5=loadImage('obstacle5.png')
obstacle6=loadImage('obstacle6.png')
}



function setup() {
createCanvas(400, 400);
  tdab = createSprite(200,380,20,50);
  tdab.addAnimation ('running',trun)
 
  grout = createSprite(200,380,400,20);
grout.addImage("ground",grout_image);
grout.x = grout.width /2;
  grout.velocityX=-2;
 invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
  cloudsGroup=new Group();
  
obstacleGroup=new Group();

  
}

function draw() {
  background('white');
  if(keyDown("space") ){
      tdab.velocityY = -12 ;
     
    }
  tdab.collide(invisibleGround)
    //add gravity
    tdab.velocityY = tdab.velocityY + 0.8;
  spawnClouds();
if (grout.x < 0){
      grout.x = grout.width/2;
    }
  spawnObstacles();
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = random(280,320);
    cloud.addImage(couldImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = tdab.depth;
    tdab.depth = tdab.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -4;
    //generate random obstacles
    var rand = Math.round( random(1,6));
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
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}