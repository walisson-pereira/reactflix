class InimigoGenerico {
  constructor(
    imagem,
    x, y,
    largura, altura,
    larguraSprite, alturaSprite,
    totalDeFrames, velocidade
  ) {
    this.emMovimento = false;
    this.machuca = true;
    this.voando = false; //uso para saber se a onça recua ou não
    this.saltitante = false;
    this.deslizante = false;
    this.visivel = true;
    this.imagem = imagem;
    this.souPowerUp = false; //por padrão, um inimigo não é um power up. O nome da classe poderia ser objeto ou obstáculo, mas estou com preguiça de mudar agora.


    this.largura = width / largura;
    this.altura = height / altura;
    this.x = width/2;
    this.y = height - this.altura - height / y;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.xInicial = this.x;
    this.yInicial = this.y;

    this.frameInicial = 0;
    this.frameFinal = totalDeFrames - 1;
    this.frameAtual = this.frameInicial;

    this.velocidade = 10;

    this.contaPulo = 0;
    this.puloMaximo = 1;
    this.velocidadeDoPulo = 0;
    this.forcaDoPulo = 20;
    this.gravidade = 1;
  }

  draw() {
    if (this.visivel) {
      image(
        this.imagem,
        this.x, this.y,
        this.largura, this.altura,
        (this.frameAtual * this.larguraSprite), 0,
        this.larguraSprite, this.alturaSprite);


      this.anime();
      if(this.saltitante) {
        if (this.y >= this.yInicial) {
          this.jump();
        }
        this.applyGravity();
      }

    }
  }

  move() {
    if (this.emMovimento) {
      this.x = this.x - this.velocidade;

      if (this.saltitante) {
        if (this.y >= this.yInicial) {
          this.jump();
        }
        this.applyGravity();
      }
    }
  }

  anime() {
    if (this.emMovimento) {
      this.frameAtual++;
      if (this.frameAtual > this.frameFinal) {
        this.frameAtual = this.frameInicial;
      }
    }
  }

  stop() {
    this.emMovimento = false;
  }

  setBouncy() {
    this.saltitante = true;
  }

  addVelocity() {
    this.velocidade++;
  }

  setVelocity(velocidade) {
    this.velocidade = velocidade;
  }

  jump() {
    if (this.contaPulo < this.puloMaximo) {
      this.contaPulo++;
      this.velocidadeDoPulo = -1 * this.forcaDoPulo;
    }
  }

  applyGravity() {
    if (this.emMovimento) {
      this.y = this.y + this.velocidadeDoPulo;
      this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

      if (this.y > this.yInicial) {
        this.y = this.yInicial;
        this.contaPulo = 0;
      }
    }
  }

  returnToBegin() {
    this.x = width;
  }

  getSlip() {
    return this.deslizante;
  }

  getBouncy() {
    return this.saltitante;
  }
  
  setSlip() {
    this.deslizante = true;
  }
  
  setJumpForce(forca) {
    this.forcaDoPulo = forca;
  }
  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x, this.y),
      createVector(this.x + this.largura, this.y),
      createVector(this.x + this.largura, this.y + this.altura),
      createVector(this.x, this.y + this.altura),
    ]
    return shapeDeColisao;
  }
  
  setHurt() {
    this.machuca = true;
  }
  setNoHurt() {
    this.machuca = false;
  }
  causeHurt() {
    return this.machuca;
  }
  setPowerUp() {
    this.souPowerUp = true;
  }
  isPowerUp() {
    return this.souPowerUp;
  }
  setFlying(){
    this.voando = true;
  }
  isFlying(){
    return this.voando;
  }
  isOnScreen() {
    let resposta = false;
    
    if (this.x > -this.largura & this.x < width) {
      resposta = true;
    }
    
    return resposta;
  }
  startMove(){
    this.emMovimento = true;
  }
  stopMove() {
    this.emMovimento = false;
  }
  change() {
    /* só vai fazer sentido se for um power up -> muda a figura aleatoriamente */
  }
}