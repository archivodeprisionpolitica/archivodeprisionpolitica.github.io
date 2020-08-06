
// DOM variables
let content = document.getElementById("content");
let myCanvas = null;


let assetsImages = [];

let assetsPrefix = "./assets/";

let assetsNames = ["1.jpg",
  "2.jpg",
  "3.jpg"
];

// image files are 100x100
// new size
let assetsResize = 30;

let maskFileName = assetsPrefix + "mask.png";
let maskImage = null;

let backgroundCollage = null;

function preload() {

  for (let i = 0; i < assetsNames.length; i++) {
    assetsImages.push(loadImage(assetsPrefix + assetsNames[i]));
  }
  
  maskImage = loadImage(maskFileName);

}

function setup() {

  // canvas size
  myCanvas = createCanvas(600, 400);

  // DOM manipulation
  myCanvas.parent(content);

  // white background
  background(255, 0);

  // dark red
  stroke(100, 0, 0);
  
  fill(0, 255/2);

  strokeWeight(4);

  for (let j = 0; j < height; j = j + assetsResize) {
    for (let i = 0; i < width; i = i + assetsResize) {
      let currentImage = random(assetsImages);
      image(currentImage,
        i,
        j, assetsResize, assetsResize);
    }
  }
  
  // create empty image
  backgroundCollage = createImage(width, height);
  
  // load backgroundCollage.pixels[] and pixels[]
  backgroundCollage.loadPixels();
  loadPixels();
  
  // copy canvas to backgroundCollage by doing this
  // copy pixels[] to backgroundCollage.pixels[]
  for (let i = 0; i < backgroundCollage.pixels.length; i++) {
    backgroundCollage.pixels[i] = pixels[i];
  }
  
  backgroundCollage.updatePixels();
  updatePixels();
  
  // white background
  background(255);
  
  // image(maskImage, 0, 0);
  // image(backgrounCollage, 0, 0);
  
  // do the masking
  backgroundCollage.mask(maskImage);
  
  // draw the masked image
  image(backgroundCollage, 0, 0);

    // drawNumber1(15, 50, 20, 80);
    // drawNumber8(40, 50, 25, 80, 10, 8, 20);
    // drawHyphen(57.5, 50, 10, 10);
    // drawLetterO(80, 50, 25, 80, 1.7);
}

function draw() {}

function drawNumber1(posX, posY, sizeX, sizeY) {

  // start from upper left point
  // then go clockwise

  beginShape();
  // upper left point
  vertex((posX - 2 * sizeX / 4) * width / 100,
    (posY - 2 * sizeY / 4) * height / 100);
  // upper right point
  vertex((posX + 1 * sizeX / 4) * width / 100,
    (posY - 2 * sizeY / 4) * height / 100);
  // go down in parallel
  vertex((posX + 1 * sizeX / 4) * width / 100,
    (posY + 1 * sizeY / 4) * height / 100);
  // go right
  vertex((posX + 2 * sizeX / 4) * width / 100,
    (posY + 1 * sizeY / 4) * height / 100);
  // go down
  vertex((posX + 2 * sizeX / 4) * width / 100,
    (posY + 2 * sizeY / 4) * height / 100);
  // go left
  vertex((posX - 2 * sizeX / 4) * width / 100,
    (posY + 2 * sizeY / 4) * height / 100);
  // go up
  vertex((posX - 2 * sizeX / 4) * width / 100,
    (posY + 1 * sizeY / 4) * height / 100);
  // go left
  vertex((posX - 1 * sizeX / 4) * width / 100,
    (posY + 1 * sizeY / 4) * height / 100);
  // go up
  vertex((posX - 1 * sizeX / 4) * width / 100,
    (posY - 1 * sizeY / 4) * height / 100);
  // go left
  vertex((posX - 2 * sizeX / 4) * width / 100,
    (posY - 1 * sizeY / 4) * height / 100);
  // go up
  vertex((posX - 2 * sizeX / 4) * width / 100,
    (posY - 2 * sizeY / 4) * height / 100);
  endShape();
}


function drawNumber8(posX, posY, sizeX, sizeY, sizeNeckX, ellipseX, ellipseY) {

  beginShape();

  // starting point at center neck left
  vertex((posX - sizeNeckX / 2) * width / 100,
    (posY) * height / 100);

  // go from starting point to upper point
  bezierVertex((posX - sizeX / 2) * width / 100,
    (posY - sizeY / 4) * height / 100,
    (posX - sizeX / 2) * width / 100,
    (posY - sizeY / 2) * height / 100,
    (posX) * width / 100,
    (posY - sizeY / 2) * height / 100);

  // go from upper point to center neck right
  bezierVertex((posX + sizeX / 2) * width / 100,
    (posY - sizeY / 2) * height / 100,
    (posX + sizeX / 2) * width / 100,
    (posY - sizeY / 4) * height / 100,
    (posX + sizeNeckX / 2) * width / 100,
    (posY) * height / 100);

  // go from center neck right to lower point
  bezierVertex((posX + sizeX / 2) * width / 100,
    (posY + sizeY / 4) * height / 100,
    (posX + sizeX / 2) * width / 100,
    (posY + sizeY / 2) * height / 100,
    (posX) * width / 100,
    (posY + sizeY / 2) * height / 100);

  // go from lower point to center neck right
  bezierVertex((posX - sizeX / 2) * width / 100,
    (posY + sizeY / 2) * height / 100,
    (posX - sizeX / 2) * width / 100,
    (posY + sizeY / 4) * height / 100,
    (posX - sizeNeckX / 2) * width / 100,
    (posY) * height / 100);

  endShape();

  ellipse((posX) * width / 100,
    (posY - sizeY / 4) * height / 100,
    (ellipseX) * width / 100,
    (ellipseY) * height / 100);

  ellipse((posX) * width / 100,
    (posY + sizeY / 4) * height / 100,
    (ellipseX) * width / 100,
    (ellipseY) * height / 100);
}

function drawHyphen(posX, posY, sizeX, sizeY) {
  beginShape();
  vertex((posX - sizeX / 2) * width / 100,
    (posY - sizeY / 2) * height / 100);
  vertex((posX + sizeX / 2) * width / 100,
    (posY - sizeY / 2) * height / 100);
  vertex((posX + sizeX / 2) * width / 100,
    (posY + sizeY / 2) * height / 100);
  vertex((posX - sizeX / 2) * width / 100,
    (posY + sizeY / 2) * height / 100);
  vertex((posX - sizeX / 2) * width / 100,
    (posY - sizeY / 2) * height / 100);
  endShape();
}

function drawLetterO(posX, posY, outerWidth, outerHeight, ratio) {
  // outer circle
  ellipse(posX * width / 100,
    posY * height / 100,
    outerWidth * width / 100,
    outerHeight * height / 100);
  // inner circle
  ellipse(posX * width / 100,
    posY * height / 100,
    (outerWidth / ratio) * width / 100,
    (outerHeight / ratio) * height / 100);
}
