var hr;
var mn;
var sc;
var hrAngle, mnAngle, scAngle;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  translate(400,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  
  push();
  
  rotate(scAngle);
  stroke("green");
  strokeWeight(3);
  line(0,0,100,0);

  pop()

  push();
  
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,75,0);

  pop()

  push();
  
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);

  pop()
  
  stroke("green");
  noFill();
  strokeWeight(6);
  arc(0,0,350,350,0,scAngle);
  
  stroke("blue");
  arc(0,0,330,330,0,mnAngle);

  stroke("yellow");
  arc(0,0,310,310,0,hrAngle);
 // drawSprites();
}