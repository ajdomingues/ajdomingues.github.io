# Rock, Paper or Scissor
Esse faz parte dum lote de 7 jogos.

## Regras básicas do jogo

 Regras básicas: dado um sinal, cada um dos jogadores apresenta um elemento. Pedra perde para papel (o papel embrulha a pedra); papel perde para tesoura (esta corta o primeiro); e, finalmente, a tesoura perde para a pedra, que quebra aquela

Fonte: Ciência hoje.

## Funcionamento da aplicação

No Pedra, Papel, tesoura o usuário vai escolher um das opções e o computador vai sortear um número aleatório entre 1 e 3 que equivale a um dos itens: Rock, Paper ou Scissor.

## Funcionamento da aplicação

No Pedra, Papel, tesoura o usuário vai escolher um das opções e o computador vai sortear um número aleatório entre 1 e 3 que equivale a um dos itens: Rock, Paper ou Scissor. 

O sorteio vai ser pela function `generateComputerChoice` e dá pra fazer assim:

```jsx
const randomNumber = Math.floor(Math.random() * 3) + 1;
```

Ou:

```jsx
const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
```

A `getResult` vai verificar as escolhas do computador/sistema e as do usuário e fazer as comparações pra ver quem ganhou ou se houve empate - escolheram a mesma opção.

| Escolha do computador | Escolha do usuário | Resultado |
| --- | --- | --- |
| Rock | Paper | Usuário ganhou |
| Rock | Scissors | Computador ganhou |
| Paper | Scissors | Usuário ganhou |
| Paper | Rock | Computador ganhou |
| Scissors | Rock | Usuário ganhou |
| Scissors | Paper | Usuário ganhou |