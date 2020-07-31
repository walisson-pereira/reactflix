class InimigoPlantaCarnivora extends InimigoGenerico {
  constructor() {
    super(
      imagemPlantaCarnivora,
      8, 5,
      8, 3,
      32, 64,
      4, 10
    );
    this.returnToBegin();
    
    this.contaPasso = 0; //vou usar isso para mudar o frame
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
  
  
  /* Refiz o anime da planta carnífora para que a animação fique mais lenta
      Outra forma de resolver isso é incluindo mais quadros na imagem*/
  anime() {
    if (this.emMovimento) {
      if(this.contaPasso > 5) {
        this.frameAtual++;
        this.contaPasso = 0;
      }
      if (this.frameAtual > this.frameFinal) {
        this.frameAtual = this.frameInicial;
      }
      
      this.contaPasso++;
    }
  }
}