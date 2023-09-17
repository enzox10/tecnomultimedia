//declaracion de let iables
//ENZO ALCANTARA ZURITA
//COMISION 5 
//TECNOLOGI MULTIMEDIAL
//
let estado = 0
let  x; let  y; let  dirX; let  dirY; let  pos2; let  p1; let  p2;
let pressed = false 

function setup() {
  createCanvas(600, 400);
  //asignacion de las let iables
  x = width/2; y= height/2; 
  dirX = 1; dirY=-1; //Direccion de la bolita
  pos2 = height/2;
  p1=0; p2=0;
}
 

function draw() {
 programa() 
  
}

function drawMenu(){
fill(255)
text("Menu", 300,100)
drawButton(150,200, "START");
drawButton(280,200, "creditos");
}
function drawButton(x,y,label) {
rectMode(CENTER)

}
if ( mouseX > x - buttonwidth / 2 && mouseX< x + buttonwidht/2 &&
  mouseY> y - buttonheight / 2 && mouseY < y + buttonheight/2) {
  fill(200,0,0);
  if (mouseIsPressed){
  handletbuttonClick(label);
  }
  }
  else {
    fill(250);
  }
  rect(x,y, buttonwidth, buttonheight);
  fill(255);
  text1(CENTER,CENTER)
  text2(label,x,y)
  
}

function mousePressed() {
  mousePress = !mousePress
}
