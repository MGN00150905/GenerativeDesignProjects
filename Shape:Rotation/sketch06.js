//Grid of circles, changing the radius
//and strokeweight based on mouse positions

let minStroke = 1;
let maxStroke = 5;
let minRad = 10;
let maxRad = 80;
let strokeColour;

let numTiles = 10;
let tileWidth;
let actRandomSeed = 1000;



function setup(){
  createCanvas(500,500);
  tileWidth = width/numTiles;
  // noLoop();
  // frameRate(1);
  strokeColour = color(255,0,0);
}

function draw(){
  randomSeed(actRandomSeed);


  translate(tileWidth/2,tileWidth/2);
  background(255);
  for(let gridY = 0; gridY < numTiles; gridY++){
    for(let gridX = 0; gridX < numTiles; gridX++){
      noFill();
      stroke(strokeColour);

      let posX = gridX*tileWidth;
      let posY = gridY*tileWidth;


      let circleRadius = map(constrain(mouseX, 0, width), 0, width,minRad, maxRad);
      let circleThickness = map(constrain(mouseY, 0, height), 0, height,minStroke, maxStroke);

      strokeWeight(circleThickness);

      let shiftX = random(-mouseX, mouseX)/20;
      let shiftY = random(-mouseY, mouseY)/20;
      ellipse(posX + shiftX, posY + shiftY, 10, 10);

    }
  }
}
