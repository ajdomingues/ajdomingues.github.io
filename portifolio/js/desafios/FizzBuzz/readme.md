FizzBuzz é uma brincadeira matemática e de programação muito comum em entrevistas de emprego para programadores. 

A ideia básica do jogo é contar de 1 a 100, e quando um número é múltiplo de 3, em vez de dizer o número, deve-se dizer "Fizz". Se um número é múltiplo de 5, deve-se dizer "Buzz". Se o número é múltiplo tanto de 3 como de 5, deve-se dizer "FizzBuzz". 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, ...

* Criamos a const `fizzBuzz` que recebe o valor limite digitado pelo usuário.
* No for, o no nosso contador vai ser a variável `i` que inicia de 1 e não de 0 - do contrário daria errado o procedimento, pos qualquer número divido por zero daria zero. O contador ganha +1 a cada laço do for. A variável-contador `i` vai ser utilizada também para checarmos os números até chegar ao valor limite.
* Validações:
    * Pra saber se um número é divisível por outro, vamos utilizar o operador de módulo, `%` no JS, para testarmos o resto da divisão. Por exemplo: se 9 % 3 é igual a 0 significa que 9 é divisível por 3.
    1. Validação 1: testamos se o contador é divisível por 3 e divisível por 5 - nessa usamos o operador && pois tem que ser válido para ambas as condições:
```js
if (i % 3 === 0 && i % 5 === 0)     
```
Se verdadeiro, imprime 'FizzBuzz'.

2. Adicionamos um `else if` para a validação 2: testamos se o contador é divisível por 3.

```js
else if (i % 3 === 0) 
```
Se verdadeiro, imprimimos 'Fizz'.

   3. Mais um `else if` para a validação 3: testamos se o contador é divisível por 5.

```js
else if (i % 5 === 0)
```
Se verdadeiro, imprime 'Buzz'.

4. Caso não se encaixe em nenhuma das condições, imprime o número do contador.