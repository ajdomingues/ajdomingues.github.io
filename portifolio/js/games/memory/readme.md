Exercício feito com base no vídeo: [link](https://www.youtube.com/watch?v=ec8vSKJuZTk&t=5727s&ab_channel=freeCodeCamp.org)
# Jogo da memória
O jogo consiste em encontrar os pares das figuras mediante os cartões. 6 imagens foram escolhidas para o jogo: 🍔🍟🌭🍦🥤🍕.

O endereços das imagens foram armazenados dentro do vetor `cardArray`. A forma encontrada para embaralhar de forma aleatória foi:

```jsx
cardArray.sort(() => 0.5 - Math.random());
```

A `createBoard` é a função que cria o tabuleiro carregando em loop e preenchendo com as imagens fornecidas pelo `cardArray`. Os cartões ficam com a imagem padrão até serem clicados. Ao clicar, ativam a função `flipCard` que exibe a imagem.

Cada cartão clicado é armazenado numa variável e depois é verificado se há combinação através da função `checkForMatch`.  

Se as combinações baterem, o sistema dá a mensagem de que foi encontrado uma combinação e remove os 2 cartões do jogo. Além de somar +1 na pontuação.

Se não baterem, o sistema dá a mensagem para tentar novamente e vira de volta os cartões.