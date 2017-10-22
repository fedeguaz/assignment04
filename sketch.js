function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('#003153');
  push();
  translate(width*1/3,height/2);
  rotate(-90);
  
  var diameter=0;
  if(width>height){
    diameter=height;
  } else {
    diameter=width;
  }
  
  if(hour()>12){
    var nhour=hour()-12;
  }else {
    var nhour=hour();
  }
  spara=second()*6;
  mpara=minute()*6;
  hpara= nhour*30;
  
  //clockHand(spara,diameter*0.2,diameter/80,'#E30B5C');
  clockHand(mpara,diameter*0.1,diameter/80,'#FFD800');
  //clockHand(hpara,diameter*0.1,diameter/80,'#FF7F50');
  
  pop();
  
  push();
  translate(width*1/3,height/3);
  rotate(-90);
  
  var diameter=0;
  if(width>height){
    diameter=height;
  } else {
    diameter=width;
  }
  
  if(hour()>12){
    var nhour=hour()-12;
  }else {
    var nhour=hour();
  }
  spara=second()*6;
  mpara=minute()*6;
  hpara= nhour*30;
  
  //clockBand(spara,diameter*0.2,diameter/80,'#E30B5C');
  //clockBand(mpara,diameter*0.15,diameter/80,'#FFD800');
  clockBand(hpara,diameter*0.1,diameter/80,'#FF7F50');
  pop();
  
  push();
  translate(width*1/3,height*2/3);
  rotate(-90);
  
  var diameter=0;
  if(width>height){
    diameter=height;
  } else {
    diameter=width;
  }
  
  if(hour()>12){
    var nhour=hour()-12;
  }else {
    var nhour=hour();
  }
  spara=second()*6;
  mpara=minute()*6;
  hpara= nhour*30;
  
  clockSand(spara,diameter*0.1,diameter/80,'#E30B5C');
  //clockSand(mpara,diameter*0.15,diameter/80,'#FFD800');
  //clockSand(hpara,diameter*0.1,diameter/80,'#FF7F50');
  pop();
  
  push();
  translate(width*3/4,height/2);
  rotate(-90);
  
  var diameter=0;
  if(width>height){
    diameter=height;
  } else {
    diameter=width;
  }
  
  if(hour()>12){
    var nhour=hour()-12;
  }else {
    var nhour=hour();
  }
  spara=second()*6;
  mpara=minute()*6;
  hpara= nhour*30;
  
  clockRand(spara,diameter*0.3,diameter/80,'#E30B5C');
  clockRand(mpara,diameter*0.2,diameter/80,'#FFD800');
  clockRand(hpara,diameter*0.1,diameter/80,'#FF7F50');
  
  pop();
}

function clockHand(para,size,weight,color){
  fill(255,255,255,30);
  strokeWeight(weight);
  stroke(color);
  arc(0,0,size,size,0,para);
  
  fill(255,255,255,60);
  noStroke();
  ellipse(0,0,size,size)
}

function clockBand(para,size,weight,color){
  fill(255,255,255,30);
  strokeWeight(weight);
  stroke(color);
  arc(0,0,size,size,0,para);
  
  fill(255,255,255,60);
  noStroke();
  ellipse(0,0,size,size)
}

function clockSand(para,size,weight,color){
  fill(255,255,255,30);
  strokeWeight(weight);
  stroke(color);
  arc(0,0,size,size,0,para);
  
  fill(255,255,255,60);
  noStroke();
  ellipse(0,0,size,size)
}

function clockRand(para,size,weight,color){
  fill(255,255,255,30);
  strokeWeight(weight);
  stroke(color);
  arc(0,0,size,size,0,para);
  
  fill(255,255,255,60);
  noStroke();
  ellipse(0,0,size,size)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}