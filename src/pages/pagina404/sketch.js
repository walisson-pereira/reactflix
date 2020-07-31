function setup() {
  createCanvas(576, 480);
  collideDebug(false);
  //createCanvas(windowWidth, windowHeight);
  frameRate(30);
  telaMorreu = new TelaMorreu();

  telaPresents = new TelaPresents();
  telaInicial = new TelaInicial();
  telaHistoria = new TelaHistoria();
  telaJogo = new TelaJogo();
  //jogo.setup() ??? os professores usaram isso. Se tiver tempo eu testo depois.
  telaFinal = new TelaFinal();
  
  cenaAtual = 'telaPresents';
  // cenaAtual = 'telaJogo';

  
  cenas = {
    telaPresents,
    telaInicial,
    telaHistoria,
    telaJogo,
    telaFinal
  }
  cenas[cenaAtual].start();
  agoraPodeApertar = true;
}

function keyPressed() {
  if(key != ''){
    action();
  }
}

function mouseClicked() {
  action();
}

function action() {
  if(agoraPodeApertar == true){
    if(cenaAtual != 'fim') {
      cenas[cenaAtual].action();
    } else {
      alert('Recarrega o browser, pois eu ainda não aprendi a fazer isto automaticamente ;P');
    }
  }
}


function draw() {
  if(cenaAtual != 'fim') {  
    if(cenas[cenaAtual].isActive() == false){
      cenas[cenaAtual].start();
    }
    cenas[cenaAtual].draw();
  }
}