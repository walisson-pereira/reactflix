class PowerUp extends InimigoGenerico {
  constructor () {
      super(
        imagemPowerUp,
        1, 1.5,
        12, 12,
        32, 32,
        1, 10
      );
      /*
        Tipo = 0 -> banana
        Tipo = 1 -> maçã
        Tipo = 2 -> melancia
      */
      this.setNoHurt(); //não machuca
      this.tipo = 0;
      this.change(); //sorteia uma imagem para o power up
      this.frameInicial = this.tipo;
      this.frameFinal = this.tipo;
      this.frameAtual = this.frameInicial;
    
      this.returnToBegin();
    }

  
  getShape() {
    const shapeDeColisao = [
      createVector(this.x, this.y + this.altura/7),
      createVector(this.x + this.largura, this.y + this.altura/7),
      createVector(this.x + this.largura, this.y + this.altura/1.1),
      createVector(this.x, this.y + this.altura/1.1),
    ]
    return shapeDeColisao;
  }
  
  change() {
    this.tipo = Math.floor(Math.random() * 3);  
  }
  
  startMove(){
    this.change();
    this.emMovimento = true;
  }
}