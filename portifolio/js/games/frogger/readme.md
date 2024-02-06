# Frogger
**Objetivo do jogo:** na primeira parte, o sapinho tem que desviar dos carros. Quando ele chega na lagoa, precisa subir nos troncos para chegar do outro lado.

Exercício feito com base no vídeo: [Learn JavaScript by Building 7 Games - Full Course (youtube.com)](https://www.youtube.com/watch?v=ec8vSKJuZTk&t=5727s&ab_channel=freeCodeCamp.org)

No CSS, troquei algumas elementos do jogo por emojis a fim de ficar mais animado.

## function moveFrog

A `function moveFrog` é responsável por interpretar as teclas (setas do teclado) pressionadas e fazer a movimentação do sapo no jogo.

## function autoMoveElements

A `function autoMoveElements` é responsável por disparar as funções para movimentar os elementos do jogo - execeto o sapo.

## function moveLogRight

É responsável por fazer o movimento dos troncos que vão da esquerda pra direita.

## function moveLogLeft

É responsável por fazer o movimento dos troncos que vão da direita pra esquerda.

## function checkOutComes

A  é responsável por interpretar as teclas (setas do teclado) pressionadas e fazer a movimentação do sapo no jogo.

## function moveCarRight

A `moveCarRight` faz o deslocamento dos veículos na pista da esquerda pra direita.

## function moveCarLeft

A `moveCarLeft` faz o deslocamento dos veículos na pista da direita pra esquerda.

## function lose

A `function lose` verifica se o sapo teve alguma colisão com um carro ou a água. Ao acontecer, o sapo é removido e dá a mensagem. Ela é disparada pela função `checkOutComes`.

## function win

A `function win` verifica se o sapo está dentro do quadradinho vermelho, o usuário soltou a tecla. Dá a mensagem. Ela é disparada pela função `checkOutComes`.

Ela é disparada pela função `checkOutComes`.

## startPauseButton

A const **`startPauseButton`** inicia ou pausa os contadores.
