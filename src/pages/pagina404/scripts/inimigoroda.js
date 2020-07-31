class InimigoRoda extends InimigoGenerico {
  constructor() {
    super(
      imagemRoda,
      7, 4,
      8, 8,
      32, 32,
      3, 10
    );
    this.setBouncy();
    this.setJumpForce(20);
    this.returnToBegin();
  }

  getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura / 4, this.y + this.altura / 7),
      createVector(this.x + this.largura / 2, this.y),
      createVector(this.x + this.largura - this.largura / 4, this.y + this.altura / 7),
      createVector(this.x + this.largura, this.y + this.altura / 2),
      createVector(this.x + this.largura - this.largura / 4, this.y + this.altura / 1.1),
      createVector(this.x + this.largura / 2, this.y + this.altura),
      createVector(this.x + this.largura / 4, this.y + this.altura / 1.1),
      createVector(this.x, this.y + this.altura / 2)
    ]
    return shapeDeColisao;
  }
}