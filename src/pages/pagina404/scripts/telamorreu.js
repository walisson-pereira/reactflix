class TelaMorreu {
  constructor() {
    this.imagem = imagemMorreu;
    this.velocidade = 10;
    this.x = 0;
    this.y = 0;
    this.ativo = true;
    this.jaFalou = false;
  }
  
  draw() {
    if(this.ativo) {
      image(
          this.imagem,
          this.x, this.y,
          width, height
        );
      
      if(this.jaFalou == false) {
        somFaleceu.play();
        this.jaFalou = true;
      }
    }
  }
  
  
  stop() {
    this.ativo = false;
  }
}