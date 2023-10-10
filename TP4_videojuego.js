//declaracion de let iables
//ENZO ALCANTARA ZURITA
//COMISION 5 
//TECNOLOGI MULTIMEDIAL
//https://www.youtube.com/watch?v=stDjBY5RI6M
let estado;
let  x; let  y; let  dirX; let  dirY; let  pos2; let  p1; let  p2; 
var botonInicio;
var botonInstrucciones;
var botoncreditos;

function setup() {
  createCanvas(600, 400);
  //asignacion de las let iables
  x = width/2; y= height/2; 
  dirX = 1; dirY=-1; //Direccion de la bolita
  pos2 = height/2;
  p1=0; p2=0;
estado=0;

}
function draw() {
  print(mouseX);
  print(mouseY);
botonInicio= mouseX>160 && mouseY>190 && mouseX<210 && mouseY<240 ;

botonInstrucciones= mouseX>225 && mouseY>190 && mouseX<270 && mouseY<250 ;

botoncreditos= mouseX>330 && mouseY>190 && mouseX<370 && mouseY<250 ;
 switch(estado){
 case 0: 
 background(0);
fill(255)
text("PONG",250,100,300,150),
text("Menu",300,100,140,140)
/////boton play//////
fill(150)
rect(160,190,50,50)
fill(255)
text("PLAY",170,210,40,40)
////boton instrucciones///
fill(150)
rect(225,190,80,50)
fill(255)
text("instrucciones",230,210,40,40)
////boton creditos//////
fill(150)
rect(330,190,80,50)
fill(255)
text("creditos",350,210,40,40)
break;
case 1:


 background(0);//0-255 (R,G,B)
  stroke(255); //Color Linea del medio
  line(width/2,0,width/2,height);//Linea del medio
  
  
  
  //Dibujo de personajes
  //Movimiento con Mouse
  rect(20, mouseY,10,40);//Jugador 1, Izq
  rect(width-30, pos2,10,40);//Jugador 2, Der
  //Movimiento con flechas del teclado
  if(keyIsDown(UP_ARROW))
     {
      pos2 = pos2 - 4;
     }
  if(keyIsDown(DOWN_ARROW))
     {
      pos2 = pos2 + 4;
     }
  
  square(x,y, 10,10); //Bolita
  //Movimiento de la bolita
  x = x+(2 * dirX); //Velocidad de la bolita mod numero 
  y = y+(2 * dirY);
  //Rebote de la bolita
  if(y > height)
    {
     dirY = -1;
    }
   if(y < 0)
    {
     dirY = 1;
    }
  //Rebote bolita contra el jugador 1 Izq Mouse y puntaje
  
  if(x < 30)
    {
      if(y > mouseY &&  y < mouseY +40)
      {
       dirX = 1;
      }
      if(x < 20)
      {
       x = width/2; y= height/2; 
        p2++
      }
    }
  
  //Rebote botita contra el jugador 2 Der Flechas y puntaje
   if(x > width-30)
    {
      if(y > pos2 && y < pos2 +40)
      {
       dirX = -1;
      }
      if(x > width -20)
      {
       x = width/2; y= height/2;
        p1++
      }
    }
  //Texto en pantalla de puntaje
  textSize(30);
  fill(255);
  text(p1,150,30);
  text(p2, 450,30);
 
 


break;
case 2:
background(0)
fill(255)
text("instrucciones", 100,100)
text("J1 usa las teclas arriba y abajo ",100,150)
text("J2 usa el mouse",100,200)
text("gana el que mejor puntuacion tenga",100,250)

break
case 3:
background(0)
fill(255);
text("creditos  para el trabajo practico de tecnologia multimedial", 100,100)
text("este juego es el pong dieñado en processing con p5js",100,150)
text("para el trabajo practico de tecnologia multimedial",100,200)
text("este juego costo mucho aunque no lo parece XD",100,250)

break 
}
}
