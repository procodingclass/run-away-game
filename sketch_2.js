var level1, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, backgroundIMG;
var player, playerIMG, fire, fireIMG, gameState, firegroup, setScreen;
var level2, obstacle6, obstacle7, obstacle8, obstacleIMG;
var trap, trap2, trap3, trap4, trap5, trapIMG;
var badguy, badguyIMG, badguy2, badguy2IMG, badguy3, badguy3IMG, badguy4, badguy4IMG;
var youLose, youLoseIMG,youWin, youWinIMG;
var lava1, lava2, lavaIMG;
var runaway, runawayIMG;
var button, buttonIMG;
var door, doorIMG, laserIMG;
var resetButton, resetButtonIMG;
function preload(){
  backgroundIMG = loadImage("images/bg.jpg");
  playerIMG = loadAnimation("images/anim1.png","images/anim2.png","images/anim3.png","images/anim4.png","images/anim5.png","images/anim6.png","images/anim7.png","images/anim8.png" );
  fireIMG = loadAnimation("images/fire1.png", "images/fire2.png", "images/fire3.png");
  obstacleIMG = loadImage("images/obstacle.png");
  trapIMG = loadImage("images/spike.png");
  badguyIMG = loadImage("images/badguy3.png");
  badguy2IMG = loadImage("images/badguy2.png");
  badguy3IMG = loadImage("images/badguy4.png");
  badguy4IMG = loadImage("images/badguy1.png");
  youLoseIMG = loadImage("images/losegame.png");
  lavaIMG = loadImage("images/lava.png");
  runawayIMG = loadImage("images/runaway.jpeg");
  buttonIMG = loadImage("images/startButton.png");
  doorIMG = loadImage("images/end.png");
  laserIMG = loadImage("images/laser.png");
  youWinIMG = loadImage("images/youwin.png");
  resetButtonIMG = loadImage("images/reset.png");
  
  

}

function setup() {
  createCanvas(1200,800);
  gameState = "start";
  setScreen = "first";
  level1 = createSprite(400, 200, 1200, 20);
  
  firegroup = new Group();
  for(var i=255; i<800; i+=50){
    fire = createSprite(i, 172);
  fire.addAnimation("label", fireIMG);
  fire.scale = 0.25;
  fire.setCollider("circle", 0, 0, 50);
  //for(var i = 0; i<11; i++){
    firegroup.add(fire);
  //}
  }
 
  
  
  obstacle1 = createSprite(200, 175, 50, 50);
  //obstacle1.addImage(obstacleIMG);
  //obstacle1.scale = 0.25;
  
  obstacle2 = createSprite(350, 150, 50, 100);
  obstacle3 = createSprite(500, 165, 50, 75);
  obstacle4 = createSprite(650, 145, 50, 125);
  obstacle5 = createSprite(800, 175, 50, 50);
  level2 = createSprite(700, 400, 1000, 20);
  obstacle6 = createSprite(800, 375, 50, 50);
  obstacle7 = createSprite(650, 375, 50, 50);
  obstacle8 = createSprite(500, 375, 50, 50);
  level3 = createSprite(400, 600, 1200, 20);
  level4 = createSprite(700, 790, 1500, 20);

  player = createSprite(50,125);
  player.addAnimation("running", playerIMG);
  player.scale = 0.35;
  player.setCollider("rectangle", 0, 0, 50, 170);

  trap = createSprite(875,385)
  trap.addImage(trapIMG);
  trap.scale = 0.16;
  edges = createEdgeSprites();
  trap.velocityX = random(-2, 2);
  trap.setCollider("rectangle", 0, 0, 300,100);

  trap2 = createSprite(550,385)
  trap2.addImage(trapIMG);
  trap2.scale = 0.16;
  trap2.debug = true;
  trap2.setCollider("rectangle", 0, 0, 300, 100);
  
  trap3 = createSprite(250, 385);
  trap3.addImage(trapIMG);
  trap3.scale = 0.16;
  //trap3.debug = true;
  trap3.setCollider("rectangle", 0, 0, 300,100);

  trap4 = createSprite(50, 585);
  trap4.addImage(trapIMG);
  trap4.scale = 0.16;

  trap5 = createSprite(870, 585);
  trap5.addImage(trapIMG);
  trap5.scale = 0.16;
  trap5.velocityX = random(-2,2);
  trap5.setCollider("rectangle", 0, 0, 300,100);
  
  badguy = createSprite(730, 345);
  badguy.addImage(badguyIMG);
  badguy.scale = 0.38;

  badguy2 = createSprite(400, 345);
  badguy2.addImage(badguy2IMG);
  badguy2.scale = 0.56;
  badguy2.mirrorX(-1);
  badguy2.velocityY = 1;
  //badguy2.debug = true;
  badguy2.setCollider("rectangle", 0, 0, 50, 120);

  badguy3 = createSprite(500, 545);
  badguy3.addImage(badguy3IMG);
  badguy3.scale = 0.30;
  badguy3.velocityY = 1;
  

  lava1 = createSprite(300,575);
  lava1.addImage(lavaIMG);
  lava1.scale = 0.25;
  //lava1.debug = true;

  lava2 = createSprite(675,575);
  lava2.addImage(lavaIMG);
  lava2.scale = 0.25;

  lava3 = createSprite(300,765);
  lava3.addImage(lavaIMG);
  lava3.scale = 0.25;

  door = createSprite(90,725);
  door.addImage(doorIMG);

  badguy4 = createSprite(500,740);
  badguy4.addImage(badguy4IMG);
  badguy4.scale = 0.4;

  laser = createSprite(1000,774);
  laser.addImage(laserIMG);
  laser.scale = 0.25;

  laser2 = createSprite(700,774);
  laser2.addImage(laserIMG);
  laser2.scale = 0.25;
  
  

  

  

}


function draw() {
  if(setScreen === "first"){
    background(runawayIMG);
    textSize(75);
    fill("gold");
    text(" Run Away ", 50, 100);
    textSize(50);
    text("How to play:", 50, 450);
    textSize(30);
    text("Use arrow keys to save yourslef from the obstacles, and bad guys ", 25, 600);
    text("and reach the house to win!", 25, 700);
    text("Best Played On Computer", 25, 750);
    image(buttonIMG, 100, 200, 300, 200);
   
    
    
  }
  else if(setScreen === "second"){

  
  background(backgroundIMG);  
  
  if(gameState === "start"){
    player.debug = true;
    fire.debug = true;
  if(keyIsDown(UP_ARROW)){
    player.velocityY = -8.75;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x +=5;
    player.mirrorX(1);
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x += -5;
    player.mirrorX(-1);
  }
  if(firegroup.isTouching(player)){
    gameState = "over";
    console.log(gameState);
  }
  if(trap.isTouching(player)){
    gameState = "over";
    trap.velocityX = 0;
  }
  
  if(trap2.isTouching(player)){
    gameState = "over";
    trap2.velocityX = 0;
  }

  if(trap3.isTouching(player)){
    gameState = "over"; 
  }

  if(trap4.isTouching(player)){
    gameState = "over"; 
  }

  if(badguy.isTouching(player)){
    gameState = "over"; 
  }

  if(badguy2.isTouching(player)){
    gameState = "over";
    badguy2.velocityY = 0;
  }

  if(badguy3.isTouching(player)){
    gameState = "over";
    badguy3.velocityY = 0;
  }

  if(badguy4.isTouching(player)){
    gameState = "over";
  }

  if(laser.isTouching(player)){
    gameState = "over";
  }

  if(laser2.isTouching(player)){
    gameState = "over";
  }

  if(lava1.isTouching(player)){
    gameState = "over";
  }

  if(lava2.isTouching(player)){
    gameState = "over";
  }

  if(lava3.isTouching(player)){
    gameState = "over";
  }

  player.velocityY += 0.8;
  }

  if(gameState === "over"){
    setScreen = "last"; 
  }
  if(player.isTouching(door)){
    gameState = "win";
  }

  if(gameState === "win"){
    setScreen = "winning";
  }
 
  
  player.collide(level1);
  player.collide(level2);
  player.collide(level3);
  player.collide(level4);
  player.collide(obstacle1);
  player.collide(obstacle2);
  player.collide(obstacle3);
  player.collide(obstacle4);
  player.collide(obstacle5);
  player.collide(obstacle6);
  player.collide(obstacle7);
  player.collide(obstacle8);
  player.collide(edges);
  trap.bounceOff(edges);
  trap.bounceOff(obstacle6);
  trap2.bounceOff(edges);
  trap2.bounceOff(obstacle7);
  trap2.bounceOff(obstacle8);
  trap5.bounceOff(lava2);
  trap5.bounceOff(edges);
  badguy2.bounceOff(level1);
  badguy2.bounceOff(level2);
  badguy3.bounceOff(level2);
  badguy3.bounceOff(level3);

 

  drawSprites();
  imageMode(CENTER);
  image(obstacleIMG, 200, 175, 50, 50);
  image(obstacleIMG, 350, 150, 50, 100);
  image(obstacleIMG, 500, 160, 50, 70);
  image(obstacleIMG, 650, 145, 50, 125);
  image(obstacleIMG, 800, 175, 50, 50);
  image(obstacleIMG, 400, 200, 1200, 20);
  image(obstacleIMG, 700, 400, 1000, 20);
  image(obstacleIMG, 400, 600, 1200, 20);
  image(obstacleIMG, 700, 790, 1500, 20);
  image(obstacleIMG, 800, 375, 50, 50);
  image(obstacleIMG, 650, 375, 50, 50);
  image(obstacleIMG, 500, 375, 50, 50);

  fill("red");
  text(mouseX+"  "+mouseY, 50, 700);
}
else if(setScreen === "last"){
 
  background('black');
  image(youLoseIMG, 400, 200, 500, 500);
  //resetButton = createSprite(400, 600);
  //resetButtton.addImage(resetButtonIMG);  
  //drawSprites();
  //image(resetButtonIMG, 50, 250, 100, 100); 
  //resetButton = createImg(resetButtonIMG);
  //resetButton.position(50, 250);
  //resetButton.mousePressed(changeScreen);
}
else if(setScreen === "winning"){
  background('black');
  //image(youWinIMG, 400, 200, 500, 500);
  //image(resetButtonIMG, 50, 250, 100, 100);
  //resetButton = createSprite(400, 600);
  //resetButtton.addImage(resetButtonIMG); 
  //drawSprites();
}
}
function mouseClicked(){
  if(setScreen === "first"){
    setScreen = "second";
  }
  
}
//function changeScreen(){
//  setScreen = "first";
//}
