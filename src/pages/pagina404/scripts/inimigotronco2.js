class InimigoTronco2 extends InimigoGenerico {
  constructor() {
    super(
      imagemTroncoEmPe,
      8, 5,
      8, 3,
      32, 64,
      1, 10
    );

    this.returnToBegin();
  }
  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura/4, this.y + this.altura / 7),
      createVector(this.x + this.largura - this.largura/4, this.y + this.altura / 7),
      createVector(this.x + this.largura - this.largura/4, this.y + this.altura / 1.1),
      createVector(this.x + this.largura/4, this.y + this.altura / 1.1),
    ]
    return shapeDeColisao;
  }
}