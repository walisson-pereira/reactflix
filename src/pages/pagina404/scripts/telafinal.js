class TelaFinal {
  constructor() {
   // this.start();
    this.ativo = false;
  }

  start() {
    this.ativo = true;
    this.imagem = imagemTelaFinal;
    this.x = 0;
    this.y = 0;

    this.R = 255;
    this.G = 255;
    this.B = 0;
    
    if(somDoFuneral.isPlaying() == false){
      somDoFuneral.play();
    }
  }

  draw() {
    if (this.ativo == true) {      
      /* imagem de fundo */
      image(
        this.imagem,
        this.x, 0,
        width, height,
        (192 * this.frameAtual), 0,
        192, 160
      );

      textFont(myFont);
      textSize(20);
      textAlign(CENTER);
      fill(this.R, this.G, this.B);
      this.texto = 'SE O JOÃOZINHO ESTUDASSE\nNA ALURA, NADA DISSO\nTERIA ACONTECIDO.\nPONTUAÇÃO: ' + pontuacao;
      text(this.texto, width / 2, height - height / 4);

    }
  }


  action() {
    this.stop();
  }

  stop() {
    cenaAtual = 'fim';
    somDoFuneral.stop();
    if(this.ativo == true) {
      this.ativo = false;
    }
    location.reload(); 
  }

  isActive() {
    return this.ativo;
  }
}