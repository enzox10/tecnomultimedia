

function juego(){
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
  
}

function boton(x, y, tam, texto, fondo, colorDeTexto) {

    fill(fondo)
    if (mousePressed &&
    dist(mouseX, mouseY, x, y) < tam / 2) {
    }
circle(x-40, y- 330, tam/ 3)
   

   
}
function mousePressed() {
  if(estado===0 && botonInicio){
 estado=1;
 }
if(estado===0 && botonInstrucciones){
 estado=2;
}
if(estado===0 && botoncreditos){
 estado=3;
}
}
