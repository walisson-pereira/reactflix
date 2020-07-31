class InimigoMacaco extends InimigoGenerico {
  constructor () {
      super(
        imagemMacaco,
        7, 1.9,
        6, 6,
        32, 32,
        4, 10
      );
    
      this.setFlying();
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura/6, this.y + this.altura/4),
      createVector(this.x + this.largura/2, this.y + this.altura/4),
      createVector(this.x + this.largura/1.6, this.y + this.altura/1.3),
      createVector(this.x + this.largura/3, this.y + this.altura),
      createVector(this.x + this.largura/6, this.y + this.altura/1.4)
    ]
    return shapeDeColisao;
  }
  
  draw() {
    if (this.visivel) {
      stroke(  0, 55,  0);
      strokeWeight(3);
      line(
        this.x - this.largura,
        0,
        this.x + this.largura / 2,
        this.y + this.altura + this.altura/4
      );
      stroke(0,0,0);
      strokeWeight(1);
      
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