var iss;
var backgroundImg;
var spacecraft;
var hasDocked
var movingSpacecraft

function preloaf(){
iss = loadImage("images/iss.png")
backgroundImg = loadImage("images/spacebg.jpg")
spacecraft = loadImage("images/spacecraft1.png")
movingSpacecraft = loadImage("images/spacecraft2.png","images/spacecraft3.png","images/spacecraft4.png")


}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite(300,300,100,40);
  iss = addImage("spacecraftImg")
  iss.scale = 0.5
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  
  if(!hasDocked){
 // Write code to set random x position for spacecraft
  iss.x= 330
}
if (keyDown("LEFT_ARROW")) {
  spacecraft.addImage("images/spacecraft4.png")
  spacecraft.velocityX = velocityX-20
}

if (keyDown("RIGHT_ARROW")) {
  spacecraft.addImage("images/spacecraft3.png")
  spacecraft.velocityX = velocityX+20
}

  
 if (keyDown("DOWN_ARROW")) {
  spacecraft.addImage("images/spacecraft2.png")
  
}

if (keyDown("UP_ARROW")) {
  spacecraft.addImage("images/spacecraft2.png")
  spacecraft.velocityX = velocityY-20
}
if(spacecraft.isTouching(iss)){
fill("white")
textSize(20)
text("Docking Successful")

}
}