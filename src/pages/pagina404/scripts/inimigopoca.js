class InimigoPoca extends InimigoGenerico {
  constructor () {
      super(
        imagemPoca,
        7, 5,
        6, 6,
        32, 32,
        1, 10
      );
    
      this.setSlip();
      this.setNoHurt(); //A poça não machuca, mas faz o herói deslizar.
      this.returnToBegin();
    }
  
    getShape() {
    const shapeDeColisao = [
      createVector(this.x + this.largura / 10, this.y + this.altura / 2),
      createVector(this.x + this.largura, this.y + this.altura / 2),
      createVector(this.x + this.largura, this.y + this.altura),
      createVector(this.x + this.largura / 10, this.y + this.altura)
    ]
    return shapeDeColisao;
  }
}