
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey = createSprite(50,260,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(100,295,600,10);
  ground.x = ground.width/2;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
  background("white");
  text("Survival Time : " + score,250,20);
  score = Math.ceil(frameCount/frameRate());
  
  if(ground.x < 0)
    {
      ground.x = ground.width/2;
    }
  if(keyDown("space"))
    {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
  spawnbanana();
  spawnobstacle();
  monkey.collide(obstacleGroup);
  drawSprites();
}

function spawnbanana()
{
  if(frameCount%60 === 0)
    {
      banana = createSprite(600,Math.round(random(50,200)),20,20);
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -4;
      
      FoodGroup.add(banana);
    }
  
}

function spawnobstacle()
{
  if(frameCount%200 === 0)
    {
      obstacle = createSprite(600,275,20,20);
      obstacle.addImage("obstacle",obstacleImage);
      obstacle.scale = 0.13;
      obstacle.velocityX = -4;
      
      obstacleGroup.add(obstacle);
    }
  
}



