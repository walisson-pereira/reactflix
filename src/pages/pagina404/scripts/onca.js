class OncaPintada  extends Colisor {
  constructor(imagem) {
    super();
    this.estado = 'correndo';
        
    this.parada = false;
    this.imagem = imagemOncaPintada;
    this.largura = width/8;
    this.altura = height/6;
    this.larguraSprite = 32;
    this.alturaSprite = 32;
    
    this.x = 10;
    this.y = height - this.altura - height/4;
    this.xInicial = this.x;
    this.yInicial = this.y;
    
    this.frameInicial = 0;
    this.frameFinal = 3
    this.frameAtual = this.frameInicial;
    this.animaCorrida();
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 2;
    this.puloMaximo = 1;
    this.contaPulo = 0;
    
    this.velocidadeDoAtraso = 0;
    this.velocidadeRelativa = 1;
    this.atrasoMaximo = 1;
    this.contaAtraso = 0;
  }
  
  draw() {
    image(
        this.imagem,
        this.x, this.y,
        this.largura, this.altura,
        (this.frameAtual * 32), 0,
        this.larguraSprite, this.alturaSprite
      );
    
    this.applyGravity();
    this.applyAcceleration()
    this.anime();
  }
  
  animaCorrida(){
    this.frameInicial = 0;
    this.frameFinal = 3;
  }
  
  anime() {
    if(!this.parada) {
      this.frameAtual++;
      if(this.frameAtual > this.frameFinal){
        this.frameAtual = this.frameInicial;
      }
    }
  }
  
  stop() {
    this.parada = true;
  }
  
  jump() {
    if(!this.parada) {
      this.frameInicial = 0;
      this.frameFinal = 0;
      if(this.contaPulo < this.puloMaximo) {
        this.contaPulo++;
        this.velocidadeDoPulo = -25;
      } 
    }
  }
  
  applyGravity() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.contaPulo = 0;
      this.animaCorrida();
    }
  }

  delay() {
    if(!this.parada) {
      if(this.contaAtraso < this.atrasoMaximo) {
        this.contaAtraso++;
        this.velocidadeDoAtraso = -20;
      } 
    }
  }

  
  applyAcceleration() {
    this.x = this.x + this.velocidadeDoAtraso;
    this.velocidadeDoAtraso = this.velocidadeDoAtraso + this.velocidadeRelativa;
    if(this.x > this.xInicial){
      this.x = this.xInicial;
      this.contaAtraso = 0;
    }
  }
  
  isCollidingOnTop(inimigo){
    if(inimigo.isFlying() == false) {
      this.estado = 'pulando'
      const collision = this.isColliding(inimigo);
      this.estado = 'correndo';
      return collision;
    }
    return false;
  }
  
  /*
    O 'pulando' significa um polígono de colisão mais acima da onça.
    O objetivo é escapar da roda saltitante
  */
  getShape() {
    let shapeDeColisao = []
    if(this.estado == 'correndo') {
      shapeDeColisao = [
      createVector(this.x + this.largura/6, this.y + this.altura/2),
      createVector(this.x + this.largura, this.y + this.altura/2),
      createVector(this.x + this.largura, this.y + this.altura - this.altura/9),
      createVector(this.x + this.largura/6, this.y + this.altura - this.altura/9)
    ]}
    if(this.estado == 'pulando'){
            shapeDeColisao = [
      createVector(this.x + this.largura/4, this.y - this.altura),
      createVector(this.x + this.largura + this.largura, this.y - this.altura),
      createVector(this.x + this.largura + this.largura, this.y),
      createVector(this.x + this.largura/4, this.y)
    ]}
    return shapeDeColisao;
  }
}