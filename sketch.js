var song 
var songIsplay=false
var amp


function preload(){
  song = loadSound("song.mp3");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  rectMode(CENTER)
  background(220);

push()
  stroke(0)
  fill(0)
  textSize(30)//字體大小
  text("x:"+mouseX+",y"+mouseY,windowWidth/2-700,windowHeight/2-330)
pop()
    
push()
  translate(width/2,height/20)
  rectMode(CENTER)
  noStroke()
  fill(255)
  ellipse(-450,550,125,125)
  ellipse(-450,470,100,100)
  
  fill(89,58,0)
  ellipse(-450,585,10,10)
  ellipse(-450,565,10,10)
  ellipse(-450,545,10,10)
  ellipse(-435,455,5,5)
  ellipse(-465,455,5,5)

  fill(224,127,0)
  beginShape()
  vertex(-455,470)
  vertex(-445,480)
  vertex(-420,460)
  endShape(close)

  fill(163,9,7)
  noStroke()
  ellipse(-450,505,15)
  triangle(-450,505,-430,515,-430,495)
  triangle(-450,505,-470,515,-470,495)
pop()

push()
  fill(242,192,13)
  noStroke()
  translate(width/2,height/2)
  rotate(6)
  ellipse(-95,228,30,50)
  rotate(6)
  ellipse(-90,243,30,50)
  rotate(6)
  ellipse(-85,236,30,50)
pop()

push()
  fill(242,192,13)
  noStroke()
  translate(width/2,height/2)
  rotate(354)
  ellipse(95,228,30,50)
  rotate(354)
  ellipse(90,243,30,50)
  rotate(354)
  ellipse(85,236,30,50)
pop()

push()
  translate(width/2,height/2)
  stroke(10)
  fill(0)
  ellipse(0,0,500,500)
pop()

push()
  translate(width/2,height/2)   
  noStroke()
  fill(255)
  ellipse(0,100,400,250)
pop()

push()
  translate(width/2,height/2)  
  noStroke()
  fill(255)
  ellipse(-100,-31,160,180)
  ellipse(100,-31,160,180)
pop()

push()
  translate(width/2,height/2)  
  fill(0)
  ellipse(80,-29,50)
  ellipse(-80,-29,50)
  fill(255)
  ellipse(75,-29,20)
  ellipse(-75,-29,20)
pop()

push()
  if(mouseIsPressed)
{
  translate(width/2,height/2) 
  fill(194,66,89)
  noStroke()
  ellipse(0,-25,50,40)
  fill(235,162,162)
  ellipse(150,25,30,20)
  ellipse(-150,25,30,20)
  stroke(204,129,141)
  strokeWeight(2)
  line(-155,20,-160,35)
  line(-148,20,-153,35)
  line(-141,20,-146,35)
  line(155,20,160,35)
  line(148,20,153,35)
  line(141,20,146,35)
}
else
{
  translate(width/2,height/2) 
  fill(194,66,89)
  noStroke()
  ellipse(0,-33,50,40)
}
pop()

push() 
  translate(width/2,height/2)  
  noStroke()
  fill(242,192,13)
  ellipse(0,-33,60,40)
pop()


}


function mousePressed()
{
  console.log(0)
  if(!songIsplay){
    
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()
  }
  else{
    song.pause()
    songIsplay=false
  }
}