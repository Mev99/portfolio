// * Variables for the images
let html
let css
let sass
let js
let ts
let nextjs
let react
let mongodb
let node
let git
let images = []
// * Draw variables
let boxes = []
let angle = 0
let camAngle = 0
let rotAngle = 0
// * Second option for showing techs
let posX = 50
let posY = 0
let posZ = 0
let test = 45
let positions = []
let flag = false
function preload() {
  html = loadImage('src/public/html_icon.png')
  css = loadImage('src/public/css_icon_2.png')
  sass = loadImage('src/public/sass_icon.png')
  js = loadImage('src/public/js_icon.png')
  ts = loadImage('src/public/ts_icon.png')
  react = loadImage('src/public/react_icon.png')
  nextjs = loadImage('src/public/nextjs_icon.png')
  node = loadImage('src/public/node_icon.png')
  mongodb = loadImage('src/public/mongodb_icon.png')
  git = loadImage('src/public/git_icon.png')

  images = [html, css, sass, js, ts, react, nextjs, node, mongodb, git]
}

function setup() {
  let canvas_tech = createCanvas(windowWidth, 200, WEBGL)
  canvas_tech.parent('canvas_tech')

  // * Rotating cam in the center
  // for (let i = 0; i < 10; i++) {
  //   let angle = TWO_PI / 10 * i;
  //   let x = cos(angle) * RADIUS;
  //   let z = sin(angle) * RADIUS;
  //   boxes.push(createVector(x, 0, z));
  // }
}
function draw() {
  canvas1()
}

function canvas1() {
  // * Second option for showing techs
  if (windowWidth <= 800) {
    positions = [
      [-100, -150, 0],
      [0, -150, 0],
      [100, -150, 0],
      [-100, -50, 0],
      [0, -50, 0],
      [100, -50, 0],
      [-100, 50, 0],
      [0, 50, 0],
      [100, 50, 0],
      [0, 150, 0]
    ]
    if (flag === false) {
      windowResized()
      flag = true
    }
  } else if (windowWidth > 800) {
    positions = [
      [-200, -50, 0],
      [-100, -50, 0],
      [0, -50, 0],
      [100, -50, 0],
      [200, -50, 0],
      [-200, 50, 0],
      [-100, 50, 0],
      [-0, 50, 0],
      [100, 50, 0],
      [200, 50, 0],
    ]
  }
  let index = 0
  background(26, 26, 26);
  noStroke()
  for (const tex of images) {
    push()
    translate(positions[index][0], positions[index][1], positions[index][2])
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    texture(tex);
    box(test);
    pop()
    index++
  }
  angle += 0.01

  // let index = 0
  // background(26, 26, 26);
  // noStroke()
  // // * Light
  // // * Cam positions
  // let camX = sin(camAngle) * 170;
  // let camY = 0;
  // let camZ = cos(camAngle) * 170;
  // camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);

  // for (let i = 0; i < 10; i++) {
  //   // * Distance between boxes and positions
  //   let angle = TWO_PI / 10 * i;
  //   let x = cos(angle) * 120;
  //   let z = sin(angle) * 120;

  //   push();
  //   translate(x, 0, z);
  //   rotateX(rotAngle);
  //   rotateY(rotAngle);
  //   rotateZ(rotAngle);
  //   texture(images[index]);
  //   box(23);
  //   pop();
  //   index++
  // }
  // camAngle -= 0.01;
  // rotAngle += 0.01
}

function windowResized() {
  if (windowWidth <= 800) {
    resizeCanvas(windowWidth, 420)
    return
  }
  resizeCanvas(windowWidth, 200)
}