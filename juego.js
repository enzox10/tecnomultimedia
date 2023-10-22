class Juego{
   contructor(cantidadEnemigos){
     this.cantidadEnemigos = cantidadEnemigos;
     this.crearPersonaje();
     this.crearEnemigos();
   }
   
   dibujar(){
     this.botonIniciar=  botonIniciar
this.interfaz

interfaz(){
  
  if(this.estado== "inicio" ){
  rect(200,200,200,200)
  if(this.estado == "juego")
  
  }
text(vidas==10)

if(this.personaje.vidas<=0)

if(this.estado =="ganaste")
background(255)
text("ganaste",width/2,height/2)
if(this.estado =="perdiste")
text("perdiste",width/2,height/2)

}
     this.personaje.dibujar();
     
     for(let i =0; i < this.cantidadEnemigos,10;i++){
    this.enemigos[i].dibujar();
     }
     
     this.controlarDisparosAEnemigos();
   }
   iniciar(){
   }
   crearEnemigo(){
     this.enemigos = [];
  for(let i =0;i <this.cantidadEnemigo;i++){
    this.enemigos[i]= new Enemigo(i*40,100);
  }
  }
  crearPersonaje(){
  this.personaje = new Personaje(width/2,300);
  }
  personajeGano(){
    
  }
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
  controlarDisparosAEnemigos(){
  if(this.personaje.haDisparadoBala()){
    for(let i =0;i <this.cantidadEnemigo;i++){
   this.enemigos[i].haTocadoLaBala(this.personaje.bala);
    }
  }
  }
}
}
}
