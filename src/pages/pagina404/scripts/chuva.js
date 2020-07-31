class Chuva {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;

    this.largura = width;
    this.altura = height;
    this.larguraSprite = 192;
    this.alturaSprite = 160;

    this.frames = [
      [0, 0],
      [192, 0],
      [0, 160],
      [192, 160]
    ];

    this.parado = false;
    this.frameAtual = 0;
    this.frameInicial = 0;
    this.frameFinal = 3;

    this.ativo = false;
  }

  draw() {
    if (this.ativo) {
      image(
        this.imagem,
        this.x1, 0,
        width + 10, height,
        this.frames[this.frameAtual][0],
        this.frames[this.frameAtual][1],
        this.larguraSprite, this.alturaSprite
      );
      image(
        this.imagem,
        this.x2, 0,
        width + 10, height,
        this.frames[this.frameAtual][0],
        this.frames[this.frameAtual][1],
        this.larguraSprite, this.alturaSprite
      );
    }
  }

  move() {
    if (!this.parado) {
      this.x1 -= this.velocidade;
      this.x2 -= this.velocidade;

      if (this.x1 < -width) {
        this.x1 = width;
      }

      if (this.x2 < -width) {
        this.x2 = width;
      }
      this.anime();
    }
  }

  anime() {
    this.frameAtual++;
    if (this.frameAtual > this.frameFinal) {
      this.frameAtual = this.frameInicial;
    }
  }

  stop() {
    this.parado = true;
    this.ativo = false;
  }

  addVelocity() {
    this.velocidade++;
  }
  
  startRain() {
    this.ativo = true;
  }
}