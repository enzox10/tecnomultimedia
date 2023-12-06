class App {
  constructor() {
    this.cantidadDePantallas = 11
    this.pantalla = 0
      this.botonInicio = new Boton(width/2, height/2, 100 , 50,"Inicar","Iniciar")
      this.botonSiguiente = new Boton(width/2, height/2,100 , 50, "Siguiente", "siguiente") 
      this.botonVolver = new Boton(width/4, height/2, 100, 50, "Volver", "volver") 
      this.botonUniversal1 = new Boton(width/4, height/4, 100, 50, "Ir a pantalla 3", 3)
      this.botonUniversal2 = new Boton(width/4, height/4, 100, 50, "Ir a pantalla 0", 0)
      this.imagen = loadImage("assets/1")
      this.fondo = loadImage("assets/9.png")
    this.fondo2 = loadImage("assets/1.png") 
    this.fondo3 = loadImage("assets/2.png")
    this.fondo4 = loadImage("assets/3.png") 
    this.fondo5 = loadImage("assets/4.png") 
    this.fondo6 = loadImage("assets/5.png")
    this.fondo7 = loadImage("assets/6.png") 
    this.fondo8 = loadImage("assets/7.png") 
    this.fondo9 = loadImage("assets/8.png")
    this.estado = "Iniciar"
      this.personaje = new Personaje(width/2, height, 100)
      this.enemigos = []
    this.cantidadEnemigos = 10
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width/2, width,100), random(height/2), random(100, 50))
    }
 
    this.fondo10 = loadImage("assets/10.png")
    this.fondo11 = loadImage("assets/11.png")
    
}
 actualizar() {
    stroke(255, 255, 0)
      strokeWeight(3)

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover()
    }
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        if (dist(
        this.personaje.x,
        this.personaje.y,
        this.enemigos[i].x,
        this.enemigos[i].y) < this.personaje.tam/2 + this.enemigos[i].tam/2) {
        this.personaje.colision = true
        this.personaje.tam--
      }
    }

    if (this.personaje.tam <= 60) {
      this.estado = "Perdiste"
    }

    if (this.personaje.y <= 0) {
      this.estado = "Ganaste"
    }
  }


  dibujar() {
    if (this.estado == "Iniciar") {
    if (this.pantalla == 0) {
      background(0)
      image(this.fondo2, 0, 0, width, height)
        this.botonInicio.dibujar()
    }
    }
    if (this.pantalla == 1) {
      background(55)
      image(this.fondo3, 0, 0, width, height)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
             

    }
    if (this.pantalla == 2) {
      background(100)
      image(this.fondo4, 0, 0,width, height)
         this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    }
    if (this.pantalla == 3) {
      background(155)
      image(this.fondo5, 0, 0,width, height)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    }
    if (this.pantalla == 4) {
      background(200)
            image(this.fondo6, 0, 0,width, height)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
        this.botonUniversal1.dibujar()
    }
    if (this.pantalla == 5) {
      background(255)
             image(this.fondo7, 0, 0,width, height)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
        this.botonUniversal2.dibujar()
    }
    if (this.pantalla == 6) {
      background(255)
             image(this.fondo8, 0, 0,width, height)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
        this.botonUniversal2.dibujar()
  }
  if (this.pantalla == 7) {
      background(255)
             image(this.fondo9, 0, 0,width, height)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
        this.botonUniversal2.dibujar()
  }
  if (this.pantalla == 8) {
    
      background(255)
        image(this.fondo, 0, 0,width, height)
        
      else if (this.estado == "Juego") {
      image(this.fondo, 0, 0, width, height)
        this.actualizar()
        this.personaje.actualizar()
        this.personaje.dibujar()
        for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        this.enemigos[i].dibujar()
      }
    } else if (this.estado == "Ganaste" ) { 
     background(255,255,0)
    image(this.fondo3, 0, 0, width, height)
    }
    else if (this.estado == "Perdiste"){
      background(222,2,2)
      image(this.fondo4, 0, 0, width, height)
    }
    }
    
   
    }
  
  mouseClicked() {
    this.botonSiguiente.mouseClicked()
      this.botonVolver.mouseClicked()
     
      if (this.pantalla == 4) {
      this.botonUniversal1.mouseClicked()
    }
    if (this.pantalla == 5) {
      this.botonUniversal2.mouseClicked()
    }
  }

  cambiarPantalla(param) {
    console.log(this.pantalla)
          console.log(param)

    if (param == "siguiente" && this.pantalla < this.cantidadDePantallas) {

      this.pantalla++
    } else if (param == "volver" && this.pantalla > 0) {
      this.pantalla--
    } else if (param != "volver" && param != "siguiente"){
        this.pantalla=param
    }
  }
   keyPressed() {
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
    this.personaje.keyPressed()
  }
  keyReleased(){
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
  this.personaje.keyReleased()
}
}
