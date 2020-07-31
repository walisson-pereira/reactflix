class TelaJogo {

  constructor() {
    //this.start();
    this.ativo = false;
  }

  start() {
    this.ativo = true;
    this.pontuacao = new Pontuacao();
    // this.pontuacao.set(400); // debug
    this.vida = new Vida(3);

    this.gameOver = false;
    this.escuridao = 0;
    this.velocidade = 10;
    //this.indiceMaximo = 2;

    this.listaInimigos = [
      [0, 1],
      [0, 1, 2, 3, 4],
      [0, 1, 2, 3, 4, 5, 6, 7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    this.fasesAtivadas = [false, false, false, false, false];
    this.contaTempo = 0; //vou usar na fase 4 para incrementar a velocidade;

    /* cenarios contém os cenários do fundo */
    this.cenarios1 = [];
    this.cenarioCeu = new CenarioAnimado(imagemCenarioCeu, 0);
    this.cenarios1.push(this.cenarioCeu);
    this.cenarioAtras = new Cenario(imagemCenarioAtras, 1);
    this.cenarios1.push(this.cenarioAtras);
    this.cenarioChao = new Cenario(imagemCenarioChao, 3);
    this.cenarios1.push(this.cenarioChao);

    /* cenarios2 contém os cenários que ficam no plano a frente do herói */
    this.cenarios2 = []
    this.cenarioFrente = new Cenario(imagemCenarioFrente, 5);
    this.cenarios2.push(this.cenarioFrente);
    this.chuva = new Chuva(imagemChuva, 1);
    this.cenarios2.push(this.chuva);

    this.heroi = new Heroi();

    this.oncaPintada = new OncaPintada();

    somDoJogo.loop();

    this.estavaColidindo = false;

    this.inimigos = [];
    this.inimigoTronco1 = new InimigoTronco1();
    this.inimigos.push(this.inimigoTronco1);
    this.inimigoTronco2 = new InimigoTronco2();
    this.inimigos.push(this.inimigoTronco2);
    this.inimigoJavali = new InimigoJavali();
    this.inimigos.push(this.inimigoJavali);
    this.inimigoCobraRastejante = new InimigoCobraRastejante();
    this.inimigos.push(this.inimigoCobraRastejante);
    this.inimigoUrubu = new InimigoUrubu();
    this.inimigos.push(this.inimigoUrubu);
    this.inimigoMacaco = new InimigoMacaco();
    this.inimigos.push(this.inimigoMacaco);
    this.inimigoCobraBote = new InimigoCobraBote();
    this.inimigos.push(this.inimigoCobraBote);
    this.inimigoPlantaCarnivora = new InimigoPlantaCarnivora();
    this.inimigos.push(this.inimigoPlantaCarnivora);
    this.inimigoPoca = new InimigoPoca();
    this.inimigos.push(this.inimigoPoca);
    this.inimigoRoda = new InimigoRoda();
    this.inimigos.push(this.inimigoRoda);
    /* Coloco o powerUp na lista de inimigos como último elemento 
      Se ele estiver na lista, é mais fácil fazer os testes de colisão
    */
    this.powerUp = new PowerUp();
    this.inimigos.push(this.powerUp);
    /* todos os inimigos estão no início da tela? */

    this.fase = 0;
    this.pontuacaoReferencia = 0; //vou usar isso para dificultar

    //Escolher um inimigo
    this.inimigoAtual = this.inimigos[0];
    this.inimigoAtual.startMove();
    this.horaDoPowerUp = false; //não é hora do power up
    this.totalDePowerUp = 5;
  }

  draw() {

    /* quando o herói morrer, coloca o fundo preto */
    if (this.gameOver)
      background(0);
    
    /* Cenários do fundo */
    if (this.gameOver == false) { // É estético: para ficar o fundo preto na morte
      this.cenarios1.forEach(cenario => {
        cenario.draw();
        cenario.move();
      });
    }

    /* e a onça que o segue */
    this.oncaPintada.draw();


    /* Agora, colocar os inimigos */
    /*
      Vou criar todos os inimigos e deixá-los no canto direito.
      Um é escolhido para atravessar a tela.
      Quando ele termina a travessia, vai direto para o canto direito.
      ai um novo inimigo será sorteado para passar a tela.
    */
    //desenha um inimigo
    this.inimigoAtual.draw();
    this.inimigoAtual.move();
    
    if (this.inimigoAtual.x < -this.inimigoAtual.largura) {
      /* Inimigo já passou, vamos escolher outro */
      this.setCurrentStage();
      this.inimigoAtual.stopMove();
      this.inimigoAtual.returnToBegin();

      this.indiceInimigoAtual = parseInt(Math.floor(Math.random() * this.listaInimigos[this.fase].length));

      if (this.horaDoPowerUp == true & this.horaDoPowerUp > 0) { //para quando for hora do power up
        this.indiceInimigoAtual = 10;
        this.horaDoPowerUp--;
        this.horaDoPowerUp = false;
      }

      let velocidadeSorteada = parseInt(Math.floor(Math.random() * (this.fase + 5)));
      
      this.inimigoAtual = this.inimigos[this.indiceInimigoAtual];
      this.inimigoAtual.setVelocity(this.velocidade + velocidadeSorteada);
      this.inimigoAtual.change();
      this.inimigoAtual.startMove();
    }


    /* Entra o herói */
    this.heroi.draw();

    /* Desenhar os cenários da frente */
    if(this.gameOver == false) { //Estético: tira o cenário na hora da mensagem de morte
      this.cenarios2.forEach(cenario => {
        cenario.draw();
        cenario.move();
      });
    }



    /* Desenha os efeitos nostalgicos na tela */
    /* Deixar com mais cara de old school com as linhas pretas na parte superior e inferior */
    fill(0, 0, 0);
    rect(0, 0, width, height / 8);
    rect(0, height - height / 8, width, height - height / 8);

    /* Desenha a quantidade de vidas */
    this.vida.draw();

    /* Desenha a pontuação */
    this.pontuacao.draw()
    this.pontuacao.add();

    /* Desenhar os efeitos especiais da fase */
    fill(0, 0, 0, this.escuridao); //fase 1 = 0, fase 2 = 40, fase 3 = 80, fase 4 = 120, fase 5 = 140
    rect(0, height / 8, width, height - height / 8);

    /* Verifico se o herói colide com a onça quando ele escorrega
      faço essa verificação fora do laço de colisões para que 
      seja feito de acordo com o framerate 
      Se a onça o alcançar, a morte é imediata
      OBS: se fizer a pergunta ao contrário: se a onça
      colide com o herói, o jogo trava e no momento eu não sei o pq,
      pois é o mesmo método herdado da mesma classe mãe*/
    if (this.heroi.isColliding(this.oncaPintada)) {
      this.oncaPintada.stop();
      this.gameOver = true;
      somDaOnca.play(); 
    }

    /* Hora de testar se o herói colidiu com algum inimigo/obstáculo */
    this.inimigos.forEach(inimigo => {
      if (this.heroi.isColliding(inimigo)) {
        /* o segundo if é para garantir que ele só colida uma vez */
        if (this.estavaColidindo == false) {
          this.estavaColidindo = true;
          if (inimigo.causeHurt()) {
            //this.vida.reduceHealth() //perde uma vida
            /* verificar se o herói já morreu */

            if (this.vida.isAlive() == false) {
              this.gameOver = true;
            } else {
              this.heroi.hurt(); //fica invencível e piscando
              this.vida.reduceHealth();
            }
          } else {
            /* Se o inimigo for deslizante (Ex. uma poça d'agua), o herós escorrega e a onça pode pegá-lo
             Se a onça alcançar o herói, é morte imediata */
            if (inimigo.getSlip()) {
              this.heroi.slip();
            } else {
              /* soubrou só a opção do power up */
              this.vida.addHealth();
              this.heroi.beInvincible();
              somDoPowerUp.play();
            }
          }
        }
      } else {
        /* se o herói parou de colidir, então depois desse if, ele pode colidir de novo */
        if (this.estavaColidindo == true) {
          this.estavaColidindo = false;
        }
      }

      /* A onça também precisa escapar dos inimigos/obstáculos */
      /* Ela pula se ele vier pelo chão */
      if (this.oncaPintada.isColliding(inimigo)) {
        this.oncaPintada.jump();
      }
      /* Ela também pode recuar se for necessário */
      if (this.oncaPintada.isCollidingOnTop(inimigo)) {
        this.oncaPintada.delay();
      }
    });


    

    /* Se o jogo estiver acabado, vamos parar as classes */
    if (this.gameOver) {
      somDoJogo.stop();
      this.oncaPintada.stop();
      this.cenarios1.forEach(cenario => {
        cenario.stop();
      });
      this.cenarios2.forEach(cenario => {
        cenario.stop();
      });
      this.inimigos.forEach(inimigo => {
        inimigo.stop();
      });

      /* Mata o herói e para a pontuação */
      this.pontuacao.stop();
      this.heroi.die();

      /* Quando o herói subir o suficiente, coloca a mensagem na tela */
      if (this.heroi.y <= -this.heroi.altura) {
        pontuacao = this.pontuacao.get();
        telaMorreu.draw();
        setTimeout(() => {
            this.stop();
        }, 2000);
      }
    }
  }

  action() {
    if (this.heroi.isAlive()) {
      this.heroi.jump();
    }
  }

  isActive() {
    return this.ativo;
    //return this.heroi.isAlive();
    /* é isto que faz com que eu não consiga animar, pois o skretch ao ver, inicia o jogo
      o herói tem que avisar que está morto só quando chegar no céu
    */
  }

  stop() {
    cenaAtual = 'telaFinal';
    this.ativo = false;    
  }

  setCurrentStage() {
    const pontos = this.pontuacao.get();
    if (pontos < 100) {
      if (this.totalDePowerUp == 5) { //***************************
        //this.horaDoPowerUp = true; resolvi não colocar power up no início
        this.totalDePowerUp--;
        this.cenarios1[2].addVelocity();
        this.cenarios2[0].addVelocity();
      }
      this.fase = 0;
      this.velocidade = 10;
      this.escuridao = 0;
    } else if (pontos < 200) {
      if (this.totalDePowerUp == 4) { //***************************
        this.horaDoPowerUp = true;
        this.totalDePowerUp--;
        this.cenarios1[2].addVelocity();
        this.cenarios2[0].addVelocity();
      }
      this.fase = 1;
      if (this.fasesAtivadas[this.fase] == false) {
        this.fasesAtivadas[this.fase] = true;
        this.velocidade = 12;
        this.escuridao = 40;
        this.cenarios1[2].addVelocity();
        this.cenarios2[0].addVelocity();
      }
    } else if (pontos < 400) {
      if (this.totalDePowerUp == 3) { //***************************
        this.horaDoPowerUp = true;
        this.totalDePowerUp--;
        this.cenarios1[2].addVelocity();
        this.cenarios2[0].addVelocity();
      }
      this.fase = 2;
      if (this.fasesAtivadas[this.fase] == false) {
        this.fasesAtivadas[this.fase] = true;
        this.velocidade = 14;
        this.escuridao = 80;
        this.cenarioCeu.setDark();
        this.cenarios1.forEach(cenario => {
          cenario.addVelocity();
        });
        this.cenarios2[0].addVelocity();
      }
    } else if (pontos < 800) {
      if (this.totalDePowerUp == 2) { //***************************
        this.horaDoPowerUp = true;
        this.totalDePowerUp--;
        this.cenarios1[2].addVelocity();
        this.cenarios2[0].addVelocity();
      }
      this.fase = 3;
      if (this.fasesAtivadas[this.fase] == false) {
        this.fasesAtivadas[this.fase] = true;
        this.velocidade = 16;
        this.escuridao = 120;
        this.cenarioCeu.setThunderstorm();
        this.chuva.startRain();
        this.cenarios2[0].addVelocity();
      }
    } else {
      if (this.totalDePowerUp == 1) { //***************************
        this.horaDoPowerUp = true;
        this.totalDePowerUp--;
      }
      this.fase = 4;
      if (this.fasesAtivadas[this.fase] == false) {
        this.fasesAtivadas[this.fase] = true;
        this.velocidade = 18;
        this.escuridao = 160;
        this.cenarios2[0].addVelocity();
        this.cenarios2[0].addVelocity();
        this.cenarios2[0].addVelocity();
      } else {
        this.contaTempo += 1;
        if (this.contaTempo > 500) {
          this.contaTempo = 0;
          this.velocidade += 2;
        }
      }
    }
  }
}