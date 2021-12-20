let dinoAnimation, fireAnimation;
let canonballImg, bgImg, playerImg, gameOverImg;
let dino, fire1, fire2, canonball1, canonball2, player, edges;
let ground1, ground2, gound3;
let pillar1, pillar2, pillar3;
let box1, box2;
let gameState = "play";

function preload() {
  dinoAnimation = loadAnimation(
    "assets/dino1.png",
    "assets/dino2.png",
    "assets/dino3.png"
  );
  bgImg = loadImage("./assets/background.png");
  fireAnimation = loadAnimation(
    "./assets/fire1.png",
    "./assets/fire2.png",
    "./assets/fire3.png",
    "./assets/fire4.png",
    "./assets/fire5.png"
  );

  canonballImg = loadImage("./assets/canonball.png");
  playerImg = loadImage("./assets/player.png");
  gameOverImg = loadImage("./assets/gameOver.png");
}

function setup() {
  createCanvas(1500, 900);
  // 1366, 625

  edges = createEdgeSprites();

  dino = createSprite(width / 1.25, height / 1.95, 50, 50);
  dino.addAnimation("dino-animation", dinoAnimation);
  dino.scale = 0.03;

  fire1 = createSprite(width / 4.6, height / 3.8, 10, 10);
  fire1.addAnimation("fire-animation", fireAnimation);
  fire1.scale = 0.03;

  fire2 = createSprite(width / 3.8, height / 3.9, 10, 10);
  fire2.addAnimation("fire-animation", fireAnimation);
  fire2.scale = 0.035;

  canonball1 = createSprite(width / 2.1, height / 4, 30, 30);
  canonball1.addImage(canonballImg);
  canonball1.scale = 0.03;

  canonball2 = createSprite(width / 2.8, height / 1.85, 30, 30);
  canonball2.addImage(canonballImg);
  canonball2.scale = 0.03;

  player = createSprite(100, 100, 30, 30);
  player.addImage(playerImg);
  player.scale = 0.015;
  player.velocityY = 2;
  // player.debug = true;

  ground1 = createSprite(width / 4, height / 2.9, width / 2.15, 80);
  ground1.setCollider("rectangle", 0, 0, width / 2.4, 50);
  ground1.visible = false;
  ground1.debug = true;

  pillar1 = createSprite(230, height / 4, 100, 90);
  pillar1.setCollider("rectangle", 0, 0, 50, 90);
  pillar1.visible = false;
  pillar1.debug = true;

  pillar2 = createSprite(width / 3.2, height / 4.2, 120, 120);
  pillar2.setCollider("rectangle", 0, 0, 60, 120);
  pillar2.visible = false;
  pillar2.debug = true;

  ground2 = createSprite(width / 1.6, height / 1.58, width / 1.38, 80);
  ground2.setCollider("rectangle", 0, 0, width / 1.38, 50);
  ground2.visible = false;
  ground2.debug = true;

  pillar3 = createSprite(width / 1.76, height / 1.87, 120, 135);
  pillar3.setCollider("rectangle", 0, 0, 65, 120);
  pillar3.visible = false;
  pillar3.debug = true;

  ground3 = createSprite(width / 2, height - 40, width, 80);
  ground3.setCollider("rectangle", 0, 0, width, 50);
  ground3.visible = false;
  ground3.debug = true;

  box1 = createSprite(width - 115, height / 2 + 40, 105, 105);
  box1.setCollider("rectangle", 0, 0, 70, 90);
  box1.visible = false;
  box1.debug = true;

  box2 = createSprite(width / 3.75, height - 130, 105, 105);
  box2.setCollider("rectangle", 0, 0, 70, 90);
  box2.visible = false;
  box2.debug = true;
}

function draw() {
  background(bgImg);

  player.collide(edges);
  player.collide(ground1);
  player.collide(ground2);
  player.collide(ground3);

  player.collide(pillar1);
  player.collide(pillar2);
  player.collide(pillar3);

  player.collide(box1);
  player.collide(box2);

  if (player.isTouching(fire1) || player.isTouching(fire2)) {
    // gameState = "end";
  }

  if (gameState === "play") {
    handlePlayerControl();
  }

  if (gameState === "end") {
    image(gameOverImg, width / 2.7, height / 3, width / 3, height / 2);
  }

  drawSprites();
}

function handlePlayerControl() {
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 5;
    player.mirrorX(1);
  } else if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 5;
    player.mirrorX(-1);
  } else if (keyIsDown(UP_ARROW)) {
    player.velocityY -= 10;
  }
  player.velocityY += 0.8;
}
