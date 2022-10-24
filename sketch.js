function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(20)
  text("x:"+mouseX+"Y:"+mouseY,50,50)
  ellipse(width/2,height/2,400)//臉
  ellipse(width/2,height/2,200,100)//鼻子橢圓
  ellipse(width/2-40,height/2,30)//左鼻孔
  ellipse(width/2+40,height/2,30)//右鼻孔
  ellipse(width/2-100,height/2-80,30)
}

