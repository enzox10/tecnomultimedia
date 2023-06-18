//comision 5
//Enzo Alcantara Zurita
//tecnologia multimedial
//https://www.youtube.com/watch?v=4ROissd2pP8
int cantidadXDeModulos;
int cantidadYDeModulos;
float angulo;
PImage imagen;

void setup(){
  size(800,400);
  imagen =loadImage("arteoptico.png");
  //imagen.resize(400, 400);
  background(255); 
  cantidadXDeModulos = 30;
  cantidadYDeModulos = 30;
}
void draw(){
background(255);
//image(imagen,0,0);
  strokeWeight(3);
    beginShape();
vertex(534,297);
vertex(602,392);
vertex(667,297);
vertex(785,295);
vertex(728,197);
vertex(785,103);
vertex(667,100);
vertex(601,3);
vertex(534,98);
vertex(415,100);
vertex(470,198);
vertex(415,292);
vertex(533,297);
    endShape();
    
    strokeWeight(2);
    beginShape();
vertex(543,276);
vertex(600,357);
vertex(656,279);
vertex(753,276);
vertex(706,199);
vertex(755,119);
vertex(653,116);
vertex(601,37);
vertex(546,116);
vertex(446,117);
vertex(495,198);
vertex(447,275);
vertex(542,279);
    endShape();
    
     strokeWeight(3);
    beginShape();
    
vertex(543,276);
vertex(600,357);
vertex(656,279);
vertex(753,276);
vertex(706,199);
vertex(755,119);
vertex(653,116);
vertex(601,37);
vertex(546,116);
vertex(446,117);
vertex(495,198);
vertex(447,275);
vertex(542,279);
vertex(477,262);
vertex(551,263);
vertex(600,324);
vertex(646,263);
vertex(723,259);
vertex(686,200);
vertex(720,135);
vertex(644,132);
vertex(601,74);
vertex(556,131);
vertex(475,133);
vertex(513,198);
vertex(476,259);
vertex(552,264);
        endShape();
        
         strokeWeight(2);
    beginShape();
    vertex(504,248);
vertex(563,248);
vertex(598,293);
vertex(638,251);
vertex(696,245);
vertex(668,197);
vertex(695,150);
vertex(634,147);
vertex(600,103);
vertex(565,146);
vertex(504,148);
vertex(531,199);
vertex(503,244);
    endShape();
    
             strokeWeight(3);
    beginShape();
    vertex(529,232);
vertex(572,235);
vertex(599,268);
vertex(624,234);
vertex(668,231);
vertex(649,199);
vertex(666,166);
vertex(621,163);
vertex(599,132);
vertex(576,162);
vertex(532,165);
vertex(552,198);
vertex(531,230);
     endShape();
     
     strokeWeight(2);
    beginShape();
    vertex(556,176);
vertex(580,174);
vertex(600,153);
vertex(617,172);
vertex(643,174);
vertex(630,197);
vertex(643,216);
vertex(615,220);
vertex(601,237);
vertex(584,219);
vertex(556,219);
vertex(568,196);
vertex(557,175);
    endShape();
    
    
    strokeWeight(3);
 beginShape();
vertex(575,186);
vertex(581,196);
vertex(574,208);
vertex(589,208);
vertex(597,220);
vertex(606,208);
vertex(622,207);
vertex(617,198);
vertex(623,184);
vertex(608,187);
vertex(598,175);
vertex(589,186);
vertex(576,187);
vertex(581,197);
vertex(575,207);
    endShape();
     

 invertirColores();
  translate(600,200);
  imagen.resize(400, 400);
  image(imagen,-600,-200);

  dibujoArte();
  if (mouseX>400){
    angulo+=0.1;
      
  }
}
  
  void dibujoArte(){
  for (int i = 0; i < 30 ; i++){
    rotate(radians(angulo));
    rectMode(CENTER);
    float tamaño = map(i,0,29,400,100);
    fill( i%2*255);
   
    rect (0, 0, tamaño, tamaño);   
    //circle(10,0,tamaño);
    scale(0.9);
    
  }
}

  void invertirColores(){
    rectMode (CORNER);
    blendMode (DIFFERENCE);
    //triangle(535,300,665,300,603,395);
    //triangle(545,295,655,295,603,367);
    //triangle(555,285,645,285,603,342);
    //triangle(565,275,635,275,603,325);
    //triangle(575,265,625,265,603,307);
    //triangle(585,255,615,255,603,282);
    //triangle(590,245,610,245,603,265);
    //triangle(730,195,665,300,800,300);
    //triangle(715,195,655,295,787,293);
    //triangle(705,195,645,285,769,284);
    //triangle(690,195,635,275,751,275);
    //triangle(675,195,625,265,733,265);
    //triangle(660,195,615,255,715,257);
    //triangle(645,195,605,245,700,245);



}  
void mousePressed() {
  angulo=0;
  
  println("vertex("+mouseX+","+mouseY+");");
}
