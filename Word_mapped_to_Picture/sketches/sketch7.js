//Loading an image. Picture of roses. Mapping the image pixels value to type.
//The pixels of the image control the configuration of the letters.

//The size of each letter depends on the grey values of the pixels in the image.

/* Before a letter is drawn, its positionin dislay co-ordinates is matched to the corrosponding position
in the original image in pixel co-ordinates */


'use strict';

var t1 = "Colour plays a major role in any brands visual identity. It can set the mood, attract attention and even spark emotions – in some cases, it can cause physical reactions, so it is important to get right. Whether designing something for yourself or a client, your choice of hue for logos, campaigns, websites or advertisements will massively determine how the brand is perceived by the public. With this in mind, youll want to ensure you choose the right palette to win over the target customer.";
var fontSizeMax = 30;
var fontSizeMin = 10;
var spacing = 12; // line height
var letSpace = 0.5; // between letters

var fontSame = false;
var blackAndWhite = false;

var img;

function preload() {
  img = loadImage('data/rose.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Times');
  textSize(10);
  textAlign(LEFT, CENTER);
  print(img.width + ' • ' + img.height);
}

function draw() {
  background(0);

  var x = 0;
  var y = 10;
  var counter = 0;

  /*The writing process continues as long as the the current writing position, y,
  is still less than the height of the display */
  while (y < height) {
    // translate position (display) to position (image)
    img.loadPixels();
    // Converting display co-ordinates into image co-ordinates
    //Mapping image to pixel array
    var imgX = round(map(x, 0, width, 0, img.width))
    var imgY = round(map(y, 0, height, 0, img.height))
    var c = color(img.get(imgX, imgY));

    //Getting grayscale values
    var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
    var colscale = round(red(c) * 0.822 + green(c) * 0.907 + blue(c) * 0.971);

    push();
    translate(x, y);

    //If the mode is set to fontSame the font size is set to a fixed value
    if (fontSame) {
      textSize(fontSizeMax);
      //If the mode is set to blackAndWhite the fill with grey values
      if (blackAndWhite) {
        fill(greyscale);
      } else {
        fill(c);
      }
    } else {
      // greyscale to fontsize
      var fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
      var fontSize2 = map(colscale, 0, 255, fontSizeMax, fontSizeMin);
      //Ensuring the value is at least 1. Cannot generative font with negative size values
      fontSize = max(fontSize, 1);
      fontSize2 = max(fontSize2, 1);
      textSize(fontSize);
      if (blackAndWhite) {
        fill(0);
      } else {
        fill(c);
      }
    }
    //Grabs all letters
    var letter = t1.charAt(counter);
    text(letter, 0, 0);
    var letterWidth = textWidth(letter) + letSpace;
    //Value of X is increased by its character width
    x += letterWidth;

    pop();

    // Wraps line when it has reached the width of the canvas
    // Y value increased by line spacing and restarts at 0 on x-axis
    if (x + letterWidth >= width) {
      x = 0;
      y += spacing;
    }

    counter++;
    if (counter >= t1.length) {
      counter = 0;
    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  // Change render mode
  if (key == '1') fontSame = !fontSame;
  // Change color mode to HSB
  if (key == '2')   colorMode(HSB);
  // Reduce the size of the rows to make image more detailed
  if (key == '3')   spacing = 4;
  // Set the font size corrospond to the amount of colour in each pixel
  if (key == '4')   textSize(fontSize2);
  // Refresh canvas
  if (key == '5')   location.reload();
  loop();
}

function keyPressed() {
  // change fontSizeMax with arrow keys up/down
  if (keyCode == UP_ARROW) fontSizeMax += 2;
  if (keyCode == DOWN_ARROW) fontSizeMax -= 2;
  // change fontSizeMin with arrow keys left/right
  if (keyCode == RIGHT_ARROW) fontSizeMin += 2;
  if (keyCode == LEFT_ARROW) fontSizeMin -= 2;
  loop();
}
