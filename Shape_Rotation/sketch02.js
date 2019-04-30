
let numTiles = 6;
let tileWidth;

function setup(){
  createCanvas(windowWidth,windowHeight);
  tileWidth = width/numTiles;
  angleMode(DEGREES);
  background(0);
  colorMode(HSB);
}

function draw(){
  for(let gridY = 0; gridY < numTiles; gridY++){
    for(let gridX = 0; gridX < numTiles; gridX++){
      // rectMode(CENTER);
      strokeWeight(1);
      push();
      translate(gridX*tileWidth+tileWidth/2, gridY*tileWidth+tileWidth/2);
      rotate(mouseX);
      scale(1/3);
      fill(mouseX/2, mouseY/2, mouseX);
      ellipse(-tileWidth/2, tileWidth, tileWidth, 50);
      pop();

    }
  }
}
