//NOTE: you have to push your code to a server to see this work.
//it does not work in the p5.js web editor
//see an example of it working here: 
// https://xarts.usfca.edu/~lberdugo/dmdstudentwork/p5linktest/

var col, d;
var radius = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('pink');
  noStroke();

  //calculate distance between ellipse's center and mouse
  d = dist(mouseX, mouseY, width / 2, height / 2)

  //make a hover effect on the ellipse
  if (d < radius / 2) {
    col = 'black';
  } else {
    col = 'yellow';
  }

  fill(col);
  ellipse(width / 2, height / 2, 100);
}

function mousePressed(){
  
  if  (d < radius / 2) {
    // this opens a link in a new tab:
    // window.open('http://www.google.com');
    
    //this code opens a link in the same tab. 
    window.open('http://www.google.com', "_self");
  }

}