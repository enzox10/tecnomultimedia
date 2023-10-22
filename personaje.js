class Personaje{
  contructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255,0,0);
    this.vida = 1;
    this.bala = new Bala();
  }
  
  dibujar(){
    this.bala.dibujar();
    
    fill(this.miColor);
    rect(this.posX, this.posY,50,50);
}
 teclaPresionada(keyCode){
 if(keyCode == LEFT_ARROW){
 this.moverIzquierda();
 }else if(keyCode == RIGHT_ARROW){
 this.moverDerecha();
 }else if(keyCode == ENTER){
   this.dispararBala();
   }
 }
moverDerecha(){
  this.posX +=10;
}
moverIzquierda(){
   this.posX -=10;
}

  estaVivo(){
  }

   dispararBala(){
     this.bala = new Bala(this.posX,this.posY);
     this.bala.disparar();
  }
  haDisparadoBala(){
  return this.bala.disparada;
  }
}
