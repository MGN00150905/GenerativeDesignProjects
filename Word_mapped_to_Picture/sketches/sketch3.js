//In this step I had a go at splitting the whole sentence into individual words and inserting them into an array
//Displaying a complete random pallete of HSB colours in the array of words

var sourceText = 'Colour plays a major role in any brands visual identity. It can set the mood, attract attention and even spark emotions – in some cases, it can cause physical reactions, so it is important to get right. Whether designing something for yourself or a client, your choice of hue for logos, campaigns, websites or advertisements will massively determine how the brand is perceived by the public. With this in mind, youll want to ensure you choose the right palette to win over the target customer.';
//Split string into an array of words so that we can access them individually
var words = sourceText.split(" ");
var font = 'sans-serif';
var font2 = 'Verdana';




function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noLoop();


  textFont(font);
  textAlign(CENTER, CENTER);
  background(360);
  fill(mouseX);

}

function draw() {


  for (var i = 0; i < words.length; i++) {
    textSize(random(100));
    fill(random(360), random(100), random(100), random(100));
    text(words[i], random(width), random(height));
  }

}



//Save screenshot of canvas
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') {
      textFont(font2);
    }


}
