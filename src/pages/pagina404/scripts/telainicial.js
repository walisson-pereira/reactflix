class TelaInicial {
  constructor() {
    this.ativo = false;
    this.start();
  }

  start() {
    this.ativo = true;
    this.imagem = imagemTelaInicial;
    this.x1 = 0;
    this.x2 = width;
    this.x = 0;
    this.y = 0;

    this.texto = 'APERTE UMA TECLA\nCLIQUE NO MOUSE\nTOQUE NA TELA';
    this.R = 0;
    this.G = 0;
    this.B = 0;
    this.aumenta = true;
        
    this.contaTempo = 0;
    this.momentoTitulo = 30;
    this.apertouQuantasVezes = 0;
  }
  
  draw() {
    if (this.ativo) {
      if(somDoTitulo.isPlaying() == false) {
        somDoTitulo.loop();
      }
      
      
      image(
        this.imagem,
        this.x1, 0,
        width, height,
        0, 0,
        192, 160
      );
      image(
        this.imagem,
        this.x2, 0,
        width, height,
        0, 0,
        192, 160
      );

      this.x1 = this.x1 - 10;
      if (this.x1 < -width) {
        this.x1 = width;
      }
      this.x2 = this.x2 - 10;
      if (this.x2 < -width) {
        this.x2 = width;
      }

      if (this.contaTempo < this.momentoTitulo) {
        this.contaTempo++;
      } else {
        image(
          this.imagem,
          this.x, this.y,
          width, height,
          192, 0,
          192, 160
        );

        textAlign(CENTER)
        fill('#fff');
        textFont(myFont);
        textSize(20);
        fill(this.R, this.G, this.B);
        text(this.texto, width / 2, height - height / 4);

        this.anime();
      }
    }
  }

  anime() {
    if (this.G > 255) {
      this.aumenta = false;
    }

    if (this.G < 0) {
      this.aumenta = true;
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
    somDoTitulo.stop();
    this.ativo = false;
    cenaAtual = 'telaHistoria';
  }

  action() {
    this.apertouQuantasVezes++;
    if (this.apertouQuantasVezes == 1 & this.contaTempo < this.momentoTitulo) {
      this.contaTempo += this.momentoTitulo;
    } else {
      this.stop();
    }
  }
  
  isActive() {
    return this.ativo;
  }
}