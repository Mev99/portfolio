let angle = 0
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
let postman
let images = []
// * Draw variables


function preload() {
  html = loadImage('/src/public/html_icon.png')
  css = loadImage('/src/public/css_icon.png')
  sass = loadImage('/src/public/sass_icon.png')
  js = loadImage('/src/public/js_icon.png')
  ts = loadImage('/src/public/ts_icon.png')
  react = loadImage('/src/public/react_icon.png')
  nextjs = loadImage('/src/public/nextjs_icon.png')
  node = loadImage('/src/public/node_icon.png')
  mongodb = loadImage('/src/public/mongodb_icon.png')
  git = loadImage('/src/public/git_icon.png')
  postman = loadImage('/src/public/postman_icon.png')
  images = [html, css, sass, js, ts, react, nextjs, node, mongodb, git]
}

function setup() {
  // let canvas = createCanvas(650, 600, P2D);
  // canvas.parent('mushroom_spores');
  // canvas.position(425, 190);
  // let fps = getTargetFrameRate();
  // text(fps, 330, 200, 50, 50)

  let canvas_tech = createCanvas(600, 300, WEBGL)
  canvas_tech.parent('canvas_tech')
}

let posX = 50
let posY = 0
let posZ = 0
let test = 45
let positions = [
  [-230, -100, 0],
  [-150, -100, 0],
  [-50, -100, 0],
  [50, -100, 0],
  [150, -100, 0],
  [-250, 0, 0],
  [-150, 0, 0],
  [-50, 0, 0],
  [50, 0, 0],
  [150, 0, 0],
]
function draw() {
  let index = 0
  background(225, 26, 26);
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
}


