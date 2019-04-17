//Week 3 Making your own svg and importing it into a p5 sketch

let numTiles = 10;
let tileWidth;
let img;

function preload(){
  shapes = [];
  img = img(loadImage('data/logo.svg'));
}

function setup(){
  createCanvas(500,500);
  tileWidth = width/numTiles;
  angleMode(DEGREES);
  // noLoop();
  // frameRate(1);
}

function draw(){
  background(255);

  //picks same set of random numbers each time
  randomSeed(100);


  for(let gridY = 0; gridY < numTiles; gridY++){
    for(let gridX = 0; gridX < numTiles; gridX++){
      // rectMode(CENTER);
      strokeCap(PROJECT);
      fill(0);
      push();

      let posX = gridX*tileWidth+tileWidth/2;
      let posY = gridY*tileWidth+tileWidth/2;

      //finds the angle between the mouse and each line
      let angle = atan2(mouseY - posY, mouseX - posX)+105;

      translate(posX, posY);

      rotate(angle);
      imageMode(CENTER);
      image(img,0,0 , 20, 20);

      pop();

    }
  }
}
function mousePressed(){
  randomSeed(1000);
}
