//Changing around inputs for pixel arrays in background

var t1 = ['Colour plays a major role in any brands visual identity. It can set the mood, attract attention and even spark emotions – in some cases, it can cause physical reactions, so it is important to get right. Whether designing something for yourself or a client, your choice of hue for logos, campaigns, websites or advertisements will massively determine how the brand is perceived by the public. With this in mind, youll want to ensure you choose the right palette to win over the target customer. Thats where colour theory helpfully steps in. Its the very study of colour, and a science in itself. So before you start to consider colour choices, read the following guide, so you can gain a better understanding behind the meaning of colour. We will explore the basics of colour theory that you will need to get your head around – the colour wheel, colour harmony and the context in which colours are used. We will also give you some tips on colour schemes. Then we will take a deeper look at individual colours and how theyre perceived.'];
var font = 'sans-serif';

var fontSize = 200;


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

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;

      pixels[index + 0] = mouseX;
      pixels[index + 1] = y;
      pixels[index + 2] = x;
      pixels[index + 3] = mouseY;
    }
  }

  updatePixels();



  textSize(20);
  if (mouseY < 100) {
    textFont('Times new roman');
  } else if (mouseY > 100 && mouseY < 200) {
    textFont('Aerial');
  } else if (mouseY > 200) {
    textFont('Century Gothic');
  }

  fill(mouseX, mouseY, 100);
  textStyle(BOLD);
  textLeading((mouseX / width) * 64);
  text(t1, width/8, height/8, windowWidth, windowHeight); // Text wraps within text box


}



//Save screenshot of canvas
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
