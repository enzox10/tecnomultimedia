PImage imagen;

void setup(){
  size(800,400);
  background(#49A79F);
  imagen = loadImage("herramienta.jpg");
  imagen.resize(400, 400);
}

void draw(){
 background(#49A79F);
  image(imagen, 0, 0);

  image(imagen, width/1, 0);
  
 quad(738 , 54,768 , 72   , 667 , 128 ,638 , 102); 
 fill(#2D527E);
 quad(667 , 127 , 768 , 72, 765 , 101 ,670 , 148);
 fill(#2D527E);
 quad(640 , 102, 623 , 96 , 723 , 52, 737 , 54 );
 fill(#949EAA);
  stroke(3);
  strokeWeight(3);
  beginShape();
  vertex( 668 , 148 ); 
 vertex( 665 , 128 ); 
 vertex( 639 , 104 ); 
 vertex( 621 , 96 ); 
 vertex( 608 , 104 ); 
 vertex( 626 , 110 ); 
 vertex( 649 , 137 ); 
 vertex( 650 , 150 ); 
 vertex( 669 , 146 ); 
  endShape();
  fill(#434446);
  beginShape();
  vertex( 648 , 136 ); 
 vertex( 649 , 148 ); 
 vertex( 554 , 200 ); 
 vertex( 522 , 249 ); 
 vertex( 515 , 232 ); 
 vertex( 553 , 186 ); 
 vertex( 647 , 135 ); 
  endShape();
  
  beginShape();
  vertex( 646 , 134 ); 
 vertex( 553 , 183 ); 
 vertex( 514 , 231 ); 
 vertex( 461 , 158 ); 
 vertex( 525 , 148 ); 
 vertex( 607 , 104 ); 
 vertex( 625 , 111 ); 
 vertex( 646 , 132 ); 
  endShape();
 fill(#313943);
 
 beginShape();
 vertex( 626 , 113 ); 
 vertex( 510 , 165 ); 
 vertex( 523 , 188 ); 
 vertex( 639 , 124 ); 
 vertex( 626 , 112 ); 
 endShape();
 
 beginShape();
 vertex( 522 , 187 ); 
 vertex( 494 , 202 ); 
 vertex( 474 , 177 ); 
 vertex( 509 , 165 ); 
 vertex( 521 , 186 ); 
 vertex( 518 , 179 ); 
 vertex( 492 , 199 ); 
 vertex( 488 , 192 ); 
 vertex( 515 , 174 ); 
 vertex( 511 , 166 ); 
 vertex( 480 , 185 ); 

 endShape();
 
 fill(#767B81);
 beginShape();
 vertex( 515 , 231 ); 
 vertex( 495 , 252 ); 
 vertex( 447 , 194 ); 
 vertex( 414 , 224 ); 
 vertex( 410 , 218 ); 
 vertex( 438 , 165 ); 
 vertex( 458 , 158 ); 
 vertex( 513 , 230 ); 

 endShape();
 
 beginShape();
 vertex( 452 , 201 ); 
 vertex( 418 , 232 ); 
 vertex( 424 , 236 ); 
 vertex( 467 , 220 ); 
 vertex( 453 , 201 ); 
 endShape();
 
 beginShape();
 vertex( 514 , 230 ); 
 vertex( 522 , 250 ); 
 vertex( 499 , 265 ); 
 vertex( 495 , 252 ); 
 vertex( 514 , 233 ); 
 endShape();
 
 beginShape();
 vertex( 467 , 218 ); 
 vertex( 476 , 229 ); 
 vertex( 432 , 241 ); 
 vertex( 425 , 237 ); 
 vertex( 468 , 220 ); 
 endShape();
 
 fill(#202121);
 beginShape();
 vertex( 414 , 223 ); 
 vertex( 425 , 224 ); 
 vertex( 452 , 200 ); 
 vertex( 447 , 193 ); 
 vertex( 416 , 221 ); 

 endShape();
 
 beginShape();
 vertex( 496 , 255 ); 
 vertex( 517 , 236 ); 
 vertex( 519 , 242 ); 
 vertex( 498 , 258 ); 
 vertex( 497 , 256 ); 
 endShape();
 }
 
 void  mousePressed () {
  println ( " vertex( " + mouseX + " , " + mouseY + " ); " );
}
