const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow = [];
var maxSnow = 10;
var backgroundImg

function preload(){
  backgroundImg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  if(frameCount % 1 === 0){
    for(var i=0; i<maxSnow; i++){
    snow.push(new SnowFall(random(0,1000), random(0,800),0))
  }
  }

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  
  for(var i = 0;i < maxSnow; i++){
    snow[i].display();
    snow[i].changePosition();
    } 
  drawSprites();
}