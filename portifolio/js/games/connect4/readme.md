# Conecte 4

Exercício feito com base no vídeo: https://www.youtube.com/watch?v=ec8vSKJuZTk&t=16801s

**Objetivo do jogo:** 2 jogadores tentam conectar 4 fichas pelo tabuleiro que pode ser na vertical, horizontal ou diagonal.

A `winningArrays` é um array que armazena as combinações possíveis pelo tabuleiro. 

Na `checkBoard` é validado as condições e os movimentos dos jogadores. Ela verifica também situações em que o jogador tenta colocar uma ficha numa posição impossível: no lugar onde já tem uma ficha ou sem outra ficha por baixo (a menos que esteja na base).