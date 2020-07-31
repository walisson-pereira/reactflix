class InimigoCobraBote extends InimigoGenerico {
  constructor () {
      super(
        imagemCobraBote,
        7, 4,
        6, 6,
        32, 64,
        4, 10
      );
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura / 3, this.y + this.largura / 3.5),
      createVector(this.x + this.largura - this.largura / 3, this.y + this.largura / 3.5),
      createVector(this.x + this.largura - this.largura / 6, this.y + this.altura ),
      createVector(this.x + this.largura / 6, this.y + this.altura)
    ]    
    return shapeDeColisao;
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
          this.pule();
        }
        this.aplicaGravidade();
      }

    }
  }
}