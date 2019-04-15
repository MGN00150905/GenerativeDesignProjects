//Grid of rects, changing the radius
//and strokeweight based on mouse positions

//restructure the code so that you can rotate each rectangle
//relative to its position

let minStroke = 1;
let maxStroke = 5;
let minRad = 10;
let maxRad = 80;
let strokeColour;
let mySlider;

let numTiles = 5;
let tileWidth;
let actRandomSeed = 1000;

function preload(){
  img = loadImage('data/cigar.svg');
}

function setup(){
  background(54);
  createCanvas(500,500);
  imageMode(CENTER);
  angleMode(DEGREES);

  mySlider = createSlider(5,100,10);
  mySlider.position(10, 510);
  mySlider.style("width", "180px");
  mySlider.addClass("murt");

}

function draw(){
  randomSeed(actRandomSeed);
  numTiles = mySlider.value();
  tileWidth = width/numTiles;


  translate(tileWidth/2,tileWidth/2);
  background(255);
  for(let gridY = 0; gridY < numTiles; gridY++){
    for(let gridX = 0; gridX < numTiles; gridX++){
      noFill();

      let posX = gridX*tileWidth;
      let posY = gridY*tileWidth;


      let angle = atan2(mouseY-posY,mouseX-posX)+50;
      push();
      translate(posX, posY);

      rotate(angle);
      image(img, 0, 0, 40, 40);
      pop();


    }
  }
}
