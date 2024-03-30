//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 100;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo
let raqueteSom;
let ponto;

function preload() {
  ponto = loadSound("ponto.mp3");
  raqueteSom = loadSound("raquetada.mp3");
  
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  verificarBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentarRaquete();
  verificarColisaoRaquete();
  colisaoRaqueteBiblioteca();
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentoRaqueteOponente();
  colisaoRaqueteOponenteBiblioteca()
  incluiPlacar();
  marcaPonto();
}


function mostrarBolinha() {
  circle(xBolinha,yBolinha,diametro)
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarBorda() {
   if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha < 0)
    velocidadeYBolinha *= -1;
}

function mostrarRaquete(x,y) {
  rect(x, y, compRaquete, altRaquete);
}


function movimentarRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
   }
}

function verificarColisaoRaquete() {
  if (xBolinha - raio < xRaquete + compRaquete && yBolinha - raio < yRaquete + altRaquete && yBolinha + raio >  yRaquete) {
    velocidadeXBolinha *= -1;
    raqueteSom.play();
  }
}

function colisaoRaqueteBiblioteca() {
colidiu = collideRectCircle(xRaquete, yRaquete, compRaquete, altRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raqueteSom.play();
  }
}

function colisaoRaqueteOponenteBiblioteca() {
colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, compRaquete, altRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raqueteSom.play();
  
  }
}

function movimentoRaqueteOponente() {
    if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
   if (keyIsDown(83)){
    yRaqueteOponente += 10;
   }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(8, 92, 49));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 0, 0)); 
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}


function marcaPonto() {
    if (xBolinha + raio > width) { 
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha - raio < 0) { 
        pontosDoOponente += 1; 
        ponto.play();
    }
}













