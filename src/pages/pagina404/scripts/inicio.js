class TelaPresents {
  constructor() {
    //this.start();
    this.ativo = false;
  }

  start() {
    this.ativo = true;
    this.x = 0;
    this.y = 0;

    this.texto = '-WALISSON PEREIRA-\n&\n-IMERSÂO GAMEDEV JAVASCRIPT-\napresentam';
    this.R = 0;
    this.G = 0;
    this.B = 0;
    this.aumenta = true;

    this.contaTempo = 0;
    this.momentoTitulo = 70;
    this.tocouSom = false;
  }

  draw() {
    if (this.ativo) {
      background(0, 0, 0);

      textAlign(CENTER)
      textFont(myFont);
      textSize(20);
      fill(this.R, this.G, this.B);
      text(this.texto, width / 2, height / 2);

      this.anime();
    }
  }

  anime() {
    if (this.G > 255) {
      this.aumenta = false;
      if (this.tocouSom == false) {
        somDoPulo.play();
        this.tocouSom = true;
      }
    }

    if (this.G < 0) {
      this.ativo = false;
      this.stop();
    }

    if (this.aumenta) {
      this.G += 10;
      this.R += 10;
    } else {
      this.G -= 10;
      this.R -= 10;
    }
  }

  stop() {
    this.ativo = false;
    cenaAtual = 'telaInicial';
  }

  action() {
    this.stop();
  }

  isActive() {
    return this.ativo;
  }
}