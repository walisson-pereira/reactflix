class Heroi extends Colisor {

  constructor() {
    super();
    this.start();
  }

  start() {
    this.imagem = imagemHeroi;
    this.largura = width / 6;
    this.altura = height / 6;
    this.larguraSprite = 32;
    this.alturaSprite = 32;

    this.x = width / 6;
    this.y = height - this.altura - height / 4;
    this.xInicial = this.x;
    this.yInicial = this.y;

    /* Estados do herói */
    this.estado = 'correndo';
    this.invencivel = false;
    this.visivel = true;
    this.vivo = true;
    this.escorregando = false;

    /* A imagem do herói é composta de vários frames concatenados na horizontal
      e todas as animações que preciso estão nessa imagem.
    */
    this.animacaoCorrendo = [0, 1, 2, 3, 4, 5, 6, 7];
    this.animacaoPulando = [4, 4, 4, 4, 4, 4, 4, 4];
    this.animacaoEscorregando = [8, 8, 8, 8, 9, 9, 9, 9];
    this.animacaoMorrendo = [10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11];
    this.animacao = this.animacaoCorrendo;
    this.indiceAtual = 0;
    this.frameAtual = this.animacao[this.indiceAtual];


    /* Salto */
    this.contaPulo = 0;
    this.puloMaximo = 2;
    this.velocidadeDoPulo = 0;
    this.gravidade = 2;

    /* Escorregos */
    this.velocidadeDoAtraso = 0;
    this.velocidadeRelativa = 1;
    this.atrasoMaximo = 1;
    this.contaAtrado = 0;
  }


  draw() {
    /* Esse if é para piscar o personagem */
    if (this.invencivel) {
      if (this.indiceAtual % 4 == 0) {
        this.visivel = false;
      } else {
        this.visivel = true;
      }
    } else {
      this.visivel = true;
    }

    this.frameAtual = this.animacao[this.indiceAtual];

    if (this.visivel) {
      image(
        this.imagem,
        this.x, this.y,
        this.largura, this.altura,
        (32 * this.frameAtual), 0,
        this.larguraSprite, this.alturaSprite
      );
    }

    this.indiceAtual++;
    if (this.indiceAtual > this.animacao.length - 1) {
      this.indiceAtual = 0;
    }

    if (this.vivo) {
      this.applyGravity();
      this.applyAcceleration();
    }

    if (this.vivo == false & this.estado == 'morrendo') {
      if (this.y > -this.altura) {
        this.y -= 5;
      }
    }
  }

  jump() {
    if (this.vivo) {
      if (this.escorregando == false) {
        if (this.contaPulo < this.puloMaximo) {
          if (this.estado === 'correndo') {
            this.estado = 'pulando';
            this.animacao = this.animacaoPulando;
            this.indiceAtual = 0;
          }
          this.contaPulo++;
          this.velocidadeDoPulo = -20;
          somDoPulo.play();
        }
      }
    }
  }

  applyGravity() {
    if (this.vivo) {
      this.y = this.y + this.velocidadeDoPulo;
      this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

      if (this.y > this.yInicial) {
        this.y = this.yInicial;
        this.contaPulo = 0;
        if (this.estado === 'pulando') {
          this.animacao = this.animacaoCorrendo;
          this.indiceAtual = 0;
          this.estado = 'correndo';
        }
      }
    }
  }

  slip() {
    if (this.vivo) {
      if (this.escorregando == false) {
        this.escorregando = true;
        this.estado = 'escorregando';
        this.animacao = this.animacaoEscorregando;
        this.indiceAtual = 0;
        if (this.contaAtraso < this.atrasoMaximo) {
          this.contaAtraso++;
          this.velocidadeDoAtraso = -10;
          somDoEscorrego.play();
        }
      }
    }
  }

  applyAcceleration() {
    this.x = this.x + this.velocidadeDoAtraso;
    this.velocidadeDoAtraso = this.velocidadeDoAtraso + this.velocidadeRelativa;
    if (this.x > this.xInicial) {
      this.x = this.xInicial;
      this.contaAtraso = 0;
      if (this.escorregando == true) {
        this.escorregando = false;
        this.estado = 'correndo';
        this.animacao = this.animacaoCorrendo;
      }
    }
  }

  die() {
    if (this.vivo) {
      this.altura = parseInt(this.altura * 1.3);
      this.largura = parseInt(this.largura * 1.3);
      this.vivo = false;
      this.estado = 'morrendo';
      this.animacao = this.animacaoMorrendo;
      this.indiceAtual = 0;
      somDaMorte.play();
    }
  }

  hurt() {
    somDaBatida.play();
    if (this.vivo) {
      this.beInvincible();
    }
  }

  beInvincible() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000);
  }

  /* O formado do polígono de colisão */
  getShape() {
    if (this.invencivel == false) {
      let shapeDeColisao = []
      if (this.estado == 'correndo') {
        shapeDeColisao = [
          createVector(this.x + this.largura / 3, this.y + this.largura / 5),
          createVector(this.x + this.largura - this.largura / 4, this.y + this.largura / 15),
          createVector(this.x + this.largura - this.largura / 3, this.y + this.altura - this.altura / 6),
          createVector(this.x + this.largura / 3, this.y + this.altura - this.altura / 6)
        ]
      }
      if (this.estado == 'pulando') {
        shapeDeColisao = [
          createVector(this.x + this.largura / 3, this.y),
          createVector(this.x + this.largura - this.largura / 3, this.y),
          createVector(this.x + this.largura - this.largura / 5, this.y + this.altura - this.altura / 3),
          createVector(this.x + this.largura / 5, this.y + this.altura - this.altura / 3)
        ]
      }
      if (this.estado == 'escorregando') {
        shapeDeColisao = [
          createVector(this.x + this.largura - this.largura / 8, this.y + this.altura /8),
          createVector(this.x + this.largura, this.y + this.altura / 8),
          createVector(this.x + this.largura / 3, this.y + this.altura - this.altura / 8),
          createVector(this.x + this.largura / 6, this.y + this.altura - this.altura / 8)
        ]
      }

      return shapeDeColisao;
    }
    return false;
  }
  
  getStatus() {
    return this.estado;
  }
  
  isAlive() {
    return this.vivo | this.estado == 'morrendo';
  }
}