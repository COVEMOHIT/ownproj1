var b1;
var b2;
var b3;
var b1img,b2img,b3img
function preload(){
b1img=loadAnimation("bus12.png","bus123.png","bus1234.png")


}

function setup() {
  createCanvas(800,400);
 b1= createSprite(400, 200, 50, 50);
 b2=createSprite(200, 150, 50, 50)
 b3=createSprite(300, 100, 50, 50)
}

function draw() {
  background(255,255,255);  
  
  b1.addAnimation("bus1",b1img);














  drawSprites();


}