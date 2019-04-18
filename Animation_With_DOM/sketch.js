let textTyped = "BLADE";
let font;
let fontSize = 150;
let textImg;
let pointDensity = 6;
let circleRadius = 5;
let radiusSlider;
let fontSizeSlider;
let pixDensity = 1;
let inputText;
let checkbox;
let img;
let c;

let opacitySlider;
let xScale;
let yScale;
let xScaleSlider;
let yScaleSlider;

let randomAm = 10;
let finishArray = [];
let startArray = [];
let stepAmount = 30;
let counter = 0;
let cDir = true;

let xOff = 0;
let yOff = 0;

let smoothX = 0.01;
let smoothY = 1;

let nOff;

let mover = [];
let amount = 50;
let canvas2;


// let randomValues = random(5);


let animateBox;
let animate = false;
let opacity;
//let img;

function preload() {
  font = loadFont('data/FreeSansBold.ttf');
  img = loadImage("assets/gradient.png");
  img2 = loadImage('data/candy.svg');

  //This is what is being used for each pixel
  img3 = loadImage('data/fire.svg');

  //background image
  bg = loadImage("data/b2.jpg");
}

function setup() {
  // nOff = createVector(random(1000), random(1000));
  let canvas = createCanvas(750, 500);
  canvas.parent("canvasHolder");

  setUpText();
  img.loadPixels();
  frameRate(20);

  radiusSlider = createSlider(1, 20, circleRadius);
  radiusSlider.parent("radiusController");
  radiusSlider.mouseReleased(update);

  fontSizeSlider = createSlider(60, 400, fontSize);
  fontSizeSlider.parent("fontSizeController");
  fontSizeSlider.mouseReleased(update);

  denseSlider = createSlider(1, 30, 3);
  denseSlider.parent("densityController");
  denseSlider.mouseReleased(update);

  inputText = createInput(textTyped);
  inputText.parent("inputController");
  inputText.input(update);

  speedSlider = createSlider(10, 90, stepAmount);
  speedSlider.mouseReleased(update);
  speedSlider.parent('speedController');

  smoothSliderX = createSlider(0.001, 1.000, smoothX, 0.001);
  smoothSliderX.mouseReleased(update);
  smoothSliderX.parent('smControllerX');

  smoothSliderY = createSlider(0.001, 0.1, smoothY, 0.001);
  smoothSliderY.mouseReleased(update);
  smoothSliderY.parent('smControllerY');

  xScaleSlider = createSlider(-500, 500, 80);
  xScaleSlider.mouseReleased(update);
  xScaleSlider.parent('xScaleController');

  yScaleSlider = createSlider(-500, 500, 500);
  yScaleSlider.mouseReleased(update);
  yScaleSlider.parent('yScaleController');


  animateBox = createCheckbox('Animate', false);
  animateBox.changed(update);
  animateBox.parent('animateBoxController');

//   canvas2 = createCanvas(windowWidth, windowHeight);
//   canvas2.position(0,0);
//   canvas2.style('z-index','-1');
//
//   for(let i = 0; i < amount; i++) {
//     mover[i] = new Mover();
//   }
// }

}

function setUpText() {
  textImg = createGraphics(width, height);
  textImg.pixelDensity(pixDensity);
  textImg.background(225);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 50, height/2);
  textImg.loadPixels();
}

function createArrays() {
    for (let x = 0; x < textImg.width; x += pointDensity) {
        for (let y = 0; y < textImg.height; y += pointDensity) {
            let index = (x + y * textImg.width) * 4;

            let r = textImg.pixels[index];



            if (r < 128) {
                let rValue = img.pixels[index];
                let gValue = img.pixels[index + 1];
                let bValue = img.pixels[index + 2];
                let fillColor = color(rValue, gValue, bValue);

                finishArray.push({
                    xPos: x
                    , yPos: y
                    , fill: fillColor
                });
                startArray.push({
                    xPos: x + map(noise(xOff), 0, 1, -10, xScale)
                    , yPos: y + map(noise(yOff), 0, 1, -10, yScale)
                    , fill: fillColor
                })

                // MAKE THESE EQUAL TO SLIDER VARIABLES
                xOff += smoothX;
                yOff += smoothY;
            }

        }
    }
}

function draw() {
    //Bringing in Blade poster as background
    background(bg, opacity);

    noFill();
    noStroke();

    for (let i = 0; i < finishArray.length - 1; i++) {
        noFill();
        stroke(finishArray[i].fill);

        let lerpAmount = (counter / finishArray.length) * stepAmount;
        if (lerpAmount > 1) {
            lerpAmount = 1
        }
        let xPos = lerp(startArray[i].xPos, finishArray[i].xPos, lerpAmount);
        let yPos = lerp(startArray[i].yPos, finishArray[i].yPos, lerpAmount);

        // Start the text off in the center
        // Using a fire svg for each pixel, as it works well with the blade background
        image(img3, xPos + 80, yPos - 100, circleRadius, circleRadius);


    }

    if (cDir && animate == true) {
        if (counter * stepAmount < finishArray.length) {
            counter++;
        }
        else {
            cDir = false;
            counter--;

        }
    }
    else {
        //Stop animation from looping
        if (counter * stepAmount > 0) {
            counter++;
        }
        else {
            cDir = true;
        }
    }
    // for(let i = 0; i < amount; i++) {
    //   mover[i].prison();
    //   mover[i].update();
    //   mover[i].render();
    // }

}



function update() {
  circleRadius = radiusSlider.value();
  fontSize = fontSizeSlider.value();
  console.log(fontSize);
  pointDensity = denseSlider.value();
  textTyped = inputText.value();
  xScale = xScaleSlider.value();
  yScale = yScaleSlider.value();
  stepAmount = speedSlider.value();
  smoothX = smoothSliderX.value();
  smoothY = smoothSliderY.value();

  if (animateBox.checked() == true) {
      animate = true;
  }
  else {
      animate = false;
  }

  finishArray = [];
  startArray = [];
  setUpText();
  createArrays();
  counter = 0;
  // console.log(textImg);
}
