class Enemigo{
   contructor(posX, posY){
  this.posX=posX;
  this.posY=posY;
  this.miColor=color(0,255,0);
  this.vida=true; 
  this.bala = new Bala();  
}

 dibujar(){
   if(this.vida){
   fill(this.miColor);
   ellipse(this.posX, this.posY,30,30);
   }
}
moverDerecha(){
}
moverIzquierda(){
}

  estaVivo(){
  }
  matar(){
  this.vida= false;
  }
  haTocadoLaBala(bala){
  if(dist(this.posX, this.posY, bala.posX)<15){
    this.matar();
  }
  }
  }
