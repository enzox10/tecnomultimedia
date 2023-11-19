//ENZO ALBERTO ALCANTARA ZURITA
//COMISION 5
//CUENTO : LA SIRENITA
//https://www.youtube.com/watch?v=Gq_3AOtFNe0
let juego 

function setup() {
createCanvas(windowWidth, windowHeight)
  juego = new Juego()
}


function draw() {
juego.dibujar()
}

function keyPressed(){
    juego.keyPressed()
}
function keyReleased(){
    juego.keyReleased()()
}
