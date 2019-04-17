//Manipulating the pixel array to loop through each pixel
//Using mouse co-ordinates to represent the hue and saturation of the background

var t1 = 'D';
var font = 'sans-serif';


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); //Set pixel density to 1 pixel per pixel
  colorMode(HSB, 360, 100, 100);

  textFont(font);
  textAlign(CENTER, CENTER);
  background(255);
  fill(0);

}

function draw() {
  //background(255);
  loadPixels();

  var rS = (100);

  //mapping mouse co-ordinates to the scale in hue[0-360] and saturation[0-100] on the X and Y axis.
  var mx = map(mouseX, 0, width, 0, 360);
  var my = map(mouseY, 0, height, 0, 100);

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;

      //hue [0-360]
      pixels[index + 0] = mx;
      //saturation [0-100]
      pixels[index + 1] = my;
      //brightness [0-100]
      pixels[index + 2] = x;
      //alpha [0-100]
      pixels[index + 3] = y;
    }
  }

  updatePixels();

  //Only incease the size of the font when the mouse has passed the center of the canvas on the x-axis
  textSize((mouseX - width / 2) * 5 + 1);
  text(t1, width / 2, mouseY);
}



//Save screenshot of canvas
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

//Use different letters by typing. The typed key will override the character stored in 'text'
function keyTyped() {
  text = key;
}

function mouseDragged() {
  textSize((mouseX - width / 2) * 5 + 1);
  text(t1, width / 2, mouseY);
}
