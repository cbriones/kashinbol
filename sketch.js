var vel= 0;
var velProyectil;
var cajas = [];
var n_vertical = 1500;
var puntaje = 0;
var sliderSpeed;


function setup() {
  //frameRate(120);
  createCanvas(windowWidth, windowHeight);
   micaja1 = new CajaObj();
   miproyectil = new proyectiles();
  sliderSpeed = createSlider(0, 5, 1, .1);
}

function mousePressed(){
  vel = vel + 3;
}

function CajaObj(){

  var r = random();
  this.x = width/10;
  this.y = height-30;

  this.mover = function() {
   
   if (this.y > height-30){
    vel= -vel*0.6;
    this.y = height-30;
   }
   else if (this.y < 30){
    vel = -vel;
    this.y = 30;
    
   }
   else 
    {this.y = this.y - vel; 
   vel = vel - 0.1;}
  
  }

  this.mostrar = function(){
    fill(255);
    ellipse(this.x, this.y, 60, 60);
  }
}

function proyectiles(){
  this.x = width;
  this.y = map(random(), 0, 1, 30, height-30);

  this.mover = function() {
    if (this.x < 0) {
      this.x = width;
      this.y = map(random(), 0, 1, 30, height-30);
    }
   
  this.x = this.x - sliderSpeed.value()*10;

  }

  this.mostrar = function(){
    fill(255, 0 , 0);
    ellipse(this.x, this.y, 60, 60);
  }
}

function draw() {
 
  background(0);
  micaja1.mostrar();
  micaja1.mover();
  miproyectil.mostrar();
  miproyectil.mover();
  if (dist(micaja1.x, micaja1.y, miproyectil.x, miproyectil.y)<60){
    miproyectil.x = width;
    miproyectil.y = map(random(), 0, 1, 0, height-30);
    puntaje++;
  }
  textSize(60);
  text(puntaje, 30, 60);
}

//agregar un gráfico que vaya indicando cuánto he ido comiendo por minuto.
