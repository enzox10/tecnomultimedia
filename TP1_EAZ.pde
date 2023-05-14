//ENZO ALBERTO ALCANTARA ZURITA 
//COMISION5 
//TURNONOCHE DE 6PM A 8PM JUEVES
PImage img1;
PImage img2;
PImage img3;
PImage img4;
PFont fuente;
int img=1;
float y=50;
float x=50;
float velocidad = 1;
int tiempo = 7;
int tiempobotonreinicio =second();

void setup(){
  size(640,480);
 
  img1 = loadImage("gunsandroses.jpg");
  img2 = loadImage("kiss.jpg");
  img3 = loadImage("acdc.jpg");
  img4 = loadImage("bonjovi.jpg");
  
  fuente= createFont("Stylus BT",70);
  println(PFont.list());
  
  tiempo = second();
}
void draw(){
 if (img ==1){
  image(img1,0,0,640,480);
  textFont(fuente);
  fill(#FF2C2C);
  text("Guns and roses \n paradise city",y-80,200,250);
  y = y +velocidad;
}else if(img ==2){ 
  image(img2,0,0,640,480);
  fill(#0024FF);
  text("kiss\n detroit rock city.",y-220,x-30,600,200);
  x = x +velocidad;
}else if(img ==3){
image(img3,0,0,640,480);
fill(#2DFF00);
text("thunderstruck \n AC/DC.",y-60,x-50,500,250);
x+= velocidad;
y+= velocidad;
if(x>450){
  velocidad = 0;
  }
}

 if(second() - tiempobotonreinicio > 10 && img == 3){
  image(img4,500,370,100,50);
}
  
  if(second() - tiempo > 3){
    img++;
    tiempo = second();
  }
  
  if(img > 3){
    img = 3;
  }
}

void mousePressed(){
  if(img==3 && mouseX > 500&& mouseX < 600&& mouseY > 370&&
mouseY < 420){
  img =1;
  tiempo = second();
  x=50;
  y=50;
  velocidad=1; 
  }
}
