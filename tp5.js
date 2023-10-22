//ENZO ALCANTARA ZURITA
//COMISION 5 
//TECNOLOGIA MULTIMEDIAL
let juego 
let posX, posY;
let vida; 
var botonInicio;
function setup() {
 createCanvas(400,400);
  objJuego = new Juego(10);
  estado=0;
}


function draw(){
   background(200);
  objJuego.dibujar();
  print(mouseX);
  print(mouseY);
botonInicio= mouseX>160 && mouseY>190 && mouseX<210 && mouseY<240 ;



fill(255)
text("Sirenita",250,100,300,150),

rect(160,190,50,50)
fill(255)
text("PLAY",170,210,40,40)
function keyPressed(){
    objJuego.teclaPresionada(keyCode);
}
}
function mousePressed() {
  if(estado===0 && botonInicio){
 estado=1;

}
}
