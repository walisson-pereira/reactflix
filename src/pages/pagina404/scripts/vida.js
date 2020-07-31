class Vida {
  constructor(vidaInicial) {
    this.vidaInicial = vidaInicial;
    this.start();
  }
  
  draw(){
    this.drawLives(20, 20);
  }
  
  drawLives(x,y) {
    const largura = 30;
    const altura = 30;
    const deslocamento = largura + 10;
    fill(255,255,255);
    let i;
    for(i=0;i<this.vidaAtual;i++){
      rect(x+(i*deslocamento), y, largura, altura);
    }
  }
  
  start(){
    this.vidaAtual = this.vidaInicial;
  }
  
  reduceHealth() {
    // console.log('reduzindo a vida');
    if (this.vidaAtual > 0){
      this.vidaAtual--;
    }
  }
  
  addHealth() {
    // console.log('aumentando a vida');
    // if (this.vidaAtual < this.vidaInicial) { //eu decidi não limitar, já que há poucos power ups
      this.vidaAtual++;
    // }
  }
  
  isAlive(){
    if(this.vidaAtual < 2) {
      this.vidaAtual = 0;
      return false;
    }
    return true;
  }
  
  get() {
    return this.vidaAtual;
  }
}