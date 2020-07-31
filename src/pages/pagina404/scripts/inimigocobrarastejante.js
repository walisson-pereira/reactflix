class InimigoCobraRastejante extends InimigoGenerico {
  constructor () {
      super(
        imagemCobraRastejante,
        7, 4.2,
        6, 6,
        32, 32,
        4, 10
      );
    
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x, this.y + this.altura/3),
      createVector(this.x + this.largura/4.3, this.y + this.altura/4),
      createVector(this.x + this.largura, this.y + this.altura/2),
      createVector(this.x + this.largura, this.y + this.altura/1.2),
      createVector(this.x + this.largura/5, this.y + this.altura/1.2)
    ]
    return shapeDeColisao;
  }
}