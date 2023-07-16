//ENZO ALBERTO ALCANTARA ZURITA
//COMISION5
//94026/5
//TECNOLOGIA MULTIMEDIAL
//https://www.youtube.com/watch?v=zAl05Tb_khQ

int pantalla = 0;
boolean on;
PImage[] imagenes;
String texto[];
String textosPantallaUno[];

void setup(){
  size(600,600);
  rectMode(CENTER);
  texto=loadStrings("textoyolo.txt");
  imagenes = new PImage[12];
  for (int i = 0; i <12; i++) {
    texto[i] = texto[i].replaceAll("\\\\n", "\n");
    imagenes[i] = loadImage(i+".png");
    imagenes[i].resize(width, height);
  }
textSize(20);
}
  void draw(){
 println("X:");
println(mouseX);
println("Y:");
println(mouseY);
 dibujarPantallas();
  }
  void dibujarPantallas(){
    
    image(imagenes[pantalla],0,0);
    
    if(pantalla==0){
      text(texto[pantalla],15,15);
  dibujarBoton("cuad",width/20,height/1-60,25,1,"   comenzar");
    }
  if(pantalla==1){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,2,"  siguiente");
}
if(pantalla==2){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,3,"  siguiente");
}
if(pantalla==3){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,4,"  siguiente");
  }
  if(pantalla==4){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,5,"  siguiente");
  }
if(pantalla==5){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,6,"  siguiente");
}
if(pantalla==6){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,7,"  siguiente");
}
if(pantalla==7){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,8,"  siguiente");
}
if(pantalla==8){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,9,"  final1");
  dibujarBoton("cuad",width/20,height/1-30,25,10,"  final2");
  dibujarBoton("cuad",width/20,height/1-90,25,11,"  final3");
  }
  if(pantalla==9){
    text(texto[pantalla],15,15);
   dibujarBoton("cuad",width/20,height/1-60,25,0,"reiniciar");
  }
  if(pantalla==10){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,0,"reiniciar");
  }
  if(pantalla==11){
    text(texto[pantalla],15,15);
    dibujarBoton("cuad",width/20,height/1-60,25,0,"reiniciar");
  }
  
  }
