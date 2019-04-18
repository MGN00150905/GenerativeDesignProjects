//Week 3

let numTiles = 20;
let tileWidth;

function setup(){
  createCanvas(500,500);
  tileWidth = width/numTiles;
  angleMode(DEGREES);
  // noLoop();
  // frameRate(1);
}

function draw(){
  background(155, 30);

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
      let angle = atan2(mouseY - posY, mouseX - posX)+ 20;

      translate(posX, posY);

      rotate(angle);

      fill(255)
      strokeWeight(.5);
      line(-tileWidth/2, tileWidth, tileWidth, -tileWidth/2);

      pop();

    }
  }
}
function mousePressed(){
  randomSeed(1000);
}
