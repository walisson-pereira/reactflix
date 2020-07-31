class InimigoTronco1 extends InimigoGenerico {
  constructor () {
      super(
        imagemTroncoDeitado,
        7, 6,
        6, 6,
        32, 32,
        3, 10
      );
    
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura/1.7, this.y + this.altura/8),
      createVector(this.x + this.largura, this.y + this.altura/4),
      createVector(this.x + this.largura/1.7, this.y + this.altura/1.1),
      createVector(this.x, this.y + this.altura/1.1),
    ]
    return shapeDeColisao;
  }
}