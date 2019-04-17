//Blend modes and pixel Array

var sourceText = 'Colour plays a major role in any brands visual identity. It can set the mood, attract attention and even spark emotions – in some cases, it can cause physical reactions, so it is important to get right. Whether designing something for yourself or a client, your choice of hue for logos, campaigns, websites or advertisements will massively determine how the brand is perceived by the public. With this in mind, youll want to ensure you choose the right palette to win over the target customer.';
var words = sourceText.split(" ");
var size;
var font = 'sans-serif';
var font2 = 'Verdana';

var hueValues = [];
var satValues = [];
var brightnessValues = [];





function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();


  textFont(font);
  textAlign(CENTER, CENTER);
  background(0);
  fill(0);

}

function draw() {
  for (var i = 0; i < words.length; i++) {
    hueValues[i] = random(360);
    satValues[i] = random(100);
    brightnessValues[i] = random(100);
    textSize(random(100));
    fill(hueValues[i], satValues[i], brightnessValues[i]);
    text(words[i], random(width), random(height));
  }

}



//Save screenshot of canvas
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = random(360);
      satValues[i] = random(100);
      brightnessValues[i] = random(100);
      textSize(random(100));
      blendMode(ADD);
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  if (key == '2') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = random(360);
      satValues[i] = 100;
      brightnessValues[i] = random(100);
      textSize(random(100));
      blendMode(DIFFERENCE);
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  if (key == '3') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = 360;
      satValues[i] = random(100);
      brightnessValues[i] = random(100);
      textSize(random(100));
      blendMode(EXCLUSION);
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  if (key == '4') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = random(360);
      satValues[i] = random(100);
      brightnessValues[i] = 100;
      textSize(random(100));
      blendMode(SCREEN);
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  //Zero saturation with random hue and brightness values
  if (key == '5') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = random(360);
      satValues[i] = 0;
      brightnessValues[i] = random(100);
      textSize(random(100));
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  //Very little amount of hue with random saturation and brightness values
  if (key == '6') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = 80;
      satValues[i] = random(100);
      brightnessValues[i] = random(100);
      textSize(random(100));
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  if (key == '7') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = random(360);
      satValues[i] = random(100);
      if (words[i] <= 4) {
        brightnessValues[i] = 100;
      } else {
        brightnessValues[i] = random(0, 40);
      }
      textSize(random(100));
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(width), random(height));
    }
  }
  //Full saturation and strong hue with random brightness values to give a turquise palette effect
  if (key == '8') {
    clear();
    background(0);
    for (var i = 0; i < words.length; i++) {
      hueValues[i] = 165;
      satValues[i] = 100;
      brightnessValues[i] = random(100);
      textSize(random(100));
      fill(hueValues[i], satValues[i], brightnessValues[i]);
      text(words[i], random(0,mouseX), random(height));
    }
  }
}
