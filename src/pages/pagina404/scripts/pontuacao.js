class Pontuacao {
  constructor() {
    this.pontos = 0;
    this.parado = false;
  }
  
  draw() {
    textAlign(RIGHT)
    fill('#fff');
    textFont(myFont);
    textSize(30);
    text(parseInt(this.pontos), width - 20, 50);
  }
  
  add() {
    if(!this.parado) {
      this.pontos = this.pontos + .2;
    }
  }
  
  stop(){
    this.parado = true;
  }
  
  get() {
    return parseInt(this.pontos);
  }
  
  set(valor) {
    this.pontos = valor; //uso no debug
  }
}