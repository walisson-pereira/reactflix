class InimigoUrubu extends InimigoGenerico {
  constructor () {
      super(
        imagemUrubu,
        7, 2.2,
        6, 6,
        32, 32,
        8, 10
      );
    
      this.setFlying();
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x, this.y + this.altura/2),
      createVector(this.x + this.largura/2, this.y + this.altura/4),
      createVector(this.x + this.largura, this.y + this.altura/2),
      createVector(this.x + this.largura/1.7, this.y + this.altura/1.5)
    ]
    return shapeDeColisao;
  }
}