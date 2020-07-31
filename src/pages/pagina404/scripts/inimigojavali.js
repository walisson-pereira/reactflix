class InimigoJavali extends InimigoGenerico {
  constructor () {
      super(
        imagemJavali,
        7, 4,
        6, 6,
        32, 32,
        5, 10
      );
    
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura/15, this.y + this.altura/1.8),
      createVector(this.x + this.largura/2, this.y + this.altura/4),
      createVector(this.x + this.largura, this.y + this.altura/2),
      createVector(this.x + this.largura/1.7, this.y + this.altura/1.1),
      createVector(this.x + this.largura/6, this.y + this.altura/1.5),
    ]
    return shapeDeColisao;
  }
}