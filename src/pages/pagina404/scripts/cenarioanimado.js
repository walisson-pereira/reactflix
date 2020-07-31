class CenarioAnimado {
  constructor(imagem, velocidade) {
    this.trovoada = false;
    this.imagem = imagemCenarioCeu;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
    
    this.largura = width;
    this.altura = height;
    this.larguraSprite = 192;
    this.alturaSprite = 160;
    
    this.sequenciaDeFrames = [0];
    
    this.parado = false;
    this.frameInicial = 0;
    this.frameAtual = this.frameInicial;
    this.frameFinal = 0;
    
    this.contaTempo = 0;
    this.momentoMudanca = 10;
  }
  
  draw() {
    image(
        this.imagem,
        this.x1, 0,
        width+10, height,
        this.sequenciaDeFrames[this.frameAtual] * 192, 0,
        this.larguraSprite, this.alturaSprite
      );
    image(
        this.imagem,
        this.x2, 0,
        width+10, height,
        this.sequenciaDeFrames[this.frameAtual] * 192, 0,
        this.larguraSprite, this.alturaSprite
      );
    
    this.contaTempo++;
  }
  
  move() {
    if(!this.parado) {
      this.x1 -= this.velocidade;
      this.x2 -= this.velocidade;

      if(this.x1 < -width) {
        this.x1 = width;
      }

      if(this.x2 < -width) {
        this.x2 = width;
      }
      this.anime();
    }
  }
  
  anime() {
    if(this.contaTempo > this.momentoMudanca) {
      this.contaTempo = 0;
      this.frameAtual++;
      if(this.frameAtual > this.frameFinal){
        this.frameAtual = this.frameInicial;
      }
    }
  }
  
  stop() {
    this.parado = true;
  }
  
  setThunderstorm() {
    if(this.trovoada == false) {
      this.trovoada = true;
      this.sequenciaDeFrames = [
        1, 1, 1, 1, 1, 1, 2, 1, 2, 3, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 2, 4, 1];

      this.frameInicial = 0;
      this.frameAtual = this.frameInicial;
      this.frameFinal = this.sequenciaDeFrames.length - 1;
    }
  }
  
  setDark() {
    if(this.trovoada == false) {
      this.sequenciaDeFrames = [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      this.frameInicial = 0;
      this.frameAtual = this.frameInicial;
      this.frameFinal = this.sequenciaDeFrames.length - 1;
    }
  }
  
  addVelocity() {
    this.velocidade++;
  }
}