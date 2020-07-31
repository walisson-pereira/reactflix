class TelaHistoria {
  constructor() {
    //this.start();
    this.ativo = false;
  }
  
  start(){  
    this.ativo = true;

    this.imagem = imagemTelaHistoria;
    this.x = 0;
    this.y = 0;
    
    this.R = 255;
    this.G = 255;
    this.B = 0;
    
    this.contaTempo = 0;
    this.momentoTransicao = 200;
    this.frameInicial = 0;
    this.frameFinal = 5;
    this.frameAtual = this.frameInicial;
    
    this.texto = [
      'PELA ESTRADA A FORA\nJOÃOZINHO VAI BEM\nCONTENTE PARA UMA\nESCOLA PRESENCIAL\nQUALQUER.',
      'ENTÃO ELE ESCUTA UM\nBARULHO ESTREMECEDOR',
      'JOÃOZINHO PERCEBE QUE\nA RODA DO SEU CARRO\nSAIU SALTITANTE',
      'ELE DECIDE CONTINUAR\nO CAMINHO A PÉ.\nCORTANDO CAMINHO PELA\nFLORESTA',
      'ELE ESCUTA UM RUGIDO.\nUMA ONÇA APARECE E\nCORRE NO SENTIDO DE\nJOÃOZINHO',
      'JOÃOZINHO CORRE E CORRE\nCOMO SE NÃO HOUVESSE\nAMANHÃ.'
    ];
    
    this.jaRugiu = false;
    
    if(somDaHistoria.isPlaying()){
      somDaHistoria.jump();
    }
  }
    
  draw() {
    if(this.frameAtual > this.frameFinal){
        this.stop();
      background(0,0,0);
    }
    if(this.ativo) {
      if(somDaHistoria.isPlaying() == false) {
        somDaHistoria.loop();
      }
      
      
      /* imagem de fundo */
      image(
          this.imagem,
          this.x, 0,
          width, height,
          (192 * this.frameAtual),   0,
          192, 160
        );

      if(this.contaTempo < this.momentoTransicao) {
         this.contaTempo++;
      } else {
         this.contaTempo = 0;
         this.frameAtual++;    
      }
      textFont(myFont);
      textSize(20);
      textAlign(CENTER);
      fill(this.R, this.G, this.B);
      text(this.texto[this.frameAtual], width/2, height - height/4);

      if(this.frameAtual == 4 & this.jaRugiu == false){
        somDaOnca.play();
        somDaOnca.setVolume(4);
        this.jaRugiu = true;
      }
    }
  }
  

  action(){
    // this.frameAtual++;
    this.stop();
  }
  
  stop() {
    this.ativo = false;
    somDaHistoria.stop();
    cenaAtual = 'telaJogo';
  }
  
  isActive(){
    return this.ativo;
  }
}
