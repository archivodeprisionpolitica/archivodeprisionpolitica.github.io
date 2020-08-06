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
 
  // do the masking
  backgroundCollage.mask(maskImage);
  
  // draw the masked image
  image(backgroundCollage, 0, 0);

 }

function draw() {}
