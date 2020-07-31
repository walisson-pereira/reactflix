# Joãozinho vai para a escola

Jogo desenvolvido durante a imersão gamedev javascript promovido pela Alura nos dias 22 a 26 de julho de 2020.
O jogo trata-se de uma corrida sem fim (endless running).

## Sinopse:

Joãozinho estava indo para uma escola presencial para estudar. Seu carro quebra. Ele decide continuar caminhando pela floresta, mas uma onça o avista e começa uma perseguição.

## Comandos:

Há apenas um botão de ação que pode ser qualquer tecla do teclado, um clique do mouse ou um toque na tela (se for o caso).

## Screenshots:

![Screenshot tela de título](https://github.com/walisson-pereira/joaozinho-vai-para-a-escola/blob/master/screenshots/screenshot1.png?raw=true)

![Screenshot tela de jogo](https://github.com/walisson-pereira/joaozinho-vai-para-a-escola/blob/master/screenshots/screenshot2.png?raw=true)

# Onde jogar:

O jogo pode ser jogado online via link da biblioteca p5.js

https://editor.p5js.org/walissonfp/present/ftjYo-vkN

## Níveis:

Há 5 níveis:
* Nível 1 -> de 0 a 99 pontos -> Só aparece dois tipos de obstáculos: tronco rolando e tronco em pé;
* Nível 2 -> de 100 a 199 pontos -> Aparecem 5 tipos de obstáculos: além dos anteriores, javali, cobra rastejante e urubu;
* Nível 3 -> de 200 a 399 pontos -> Aparecem 8 tipos de obstáculos: além dos anteriores, macaco, cobra pronta pro bote e planta carnívora;
* Nível 4 -> de 400 a 799 pontos -> Aparecem 10 tipos de obstáculos: além dos anteriores, poça d'água e a roda perdida.
* Nível 5 -> a partir de 800 pontos -> Aparecem todos os anteriores. O que muda aqui é a velocidade que vai crescendo mais rapidamente.

Há power ups que surgem nos início dos níveis 2, 3, 4 e 5.

## Regras básicas
O personagem pode realizar um pulo no ar (pulo duplo).
Ele começa com 3 vidas e a cada toque em um obstáculos, perde uma.
Se o obstáculo for a poça d'água, o personagem não sofre dano, mas escorrega.
Quando o personagem escorrega, a onça pode alcançá-lo e isto causa a morte imediata do personagem.

## Misc
O jogo conta com paralax e a animação do cenário que vai escurecendo até começar uma chuva.
A estética é inspirada no jogo Pitfall do Atari 2600.
Músicas e efeitos sonoros encontrados em pesquisa pelo youtube e editado com audacity.
Sprites feitos no https://www.piskelapp.com/
O jogo foi programado no editor da biblioteca p5.js https://p5js.org/

## Instruções de uso

Baixe ou clone o código deste repositório e rode o arquivo shell script ./run.sh (este arquivo é feito para rodar no linux com python3 e firefox instalado).

## Changelog

04/07/2020 - Correção de bugs
