class Colisor {
  constructor() {}
  
  /* Shape padrão */
  getShape() {
    const shapeDeColisao = [
      createVector(this.x, this.y),
      createVector(this.x + this.largura, this.y),
      createVector(this.x + this.largura, this.y + this.altura),
      createVector(this.x, this.y + this.altura),
    ]
    return shapeDeColisao;
  }

  /*colisão*/
  isColliding(inimigo) {
    // noFill();
    const heroiShape = this.getShape();
    const inimigoShape = inimigo.getShape();
    // let i;
    // //desenha o polígono de colisão do herói
    // beginShape();
    // for (i = 0; i < heroiShape.length; i++) {
    //   vertex(heroiShape[i].x, heroiShape[i].y);
    // }
    // endShape(CLOSE);
    // //desenha o polígono de colisão do inimigo
    // beginShape();
    // for (i = 0; i < inimigoShape.length; i++) {
    //   vertex(inimigoShape[i].x, inimigoShape[i].y);
    // }
    // endShape(CLOSE);

    const hit = collidePolyPoly(heroiShape, inimigoShape, true);

    return hit;
  }  
}
