# Ferramentas para reutilização

Várias ferramentas para ser reutilizadas em diversas aplicações. A ideia é ser o mais simples possível para funções rotineiras.

## Transformar texto em maiúsuculo
Pegar um texto e retorná-lo chamando a função toUpperCase

```js
return `${texto}`.toUpperCase()    
```

## Transformar texto em minúsculo
Pegar um texto e retorná-lo chamando a função toLowerCase

```js
return `${texto}`.toLowerCase()
```

## Juntar textos
Pegar dois textos e juntá-los usando o concat

```js
return texto1.concat(texto2)
```

## Converter número interiro para binário
Converter um número para binário usando o toString(2)
```js
return num1.toString(2)
```

## Converter número binário para decimal
Converter um número de binário para decimal usando o toString(10)
```js
return num1.toString(10)
```

## Arrendondar número
Arredondar número usando o toFixed(2)
```js 
return num1.toFixed(2)
```

## Converter números romandos
Converter número de romanos para arábicos

É recebido um número em romanos por parâmetor. Criamos uma variável chamada "n" e a inicilizamos com 0.
    
```js
let n = 0;
```
Na sequência, criamos uma constante com os números romanos: I. V, X, L, C, D, M e seus respectivos valores.
```js
const numeros = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
```       
E criamos um laço de repetição do mesmo tamanho da constante com os números romanos. As variáveis "atual" e "prox" nos auxiliam a identificar em qual algorismo romano estamos no laço e qual é o próximo. É verificado se o próximo número é maior ou igual ao número atual. Dependendo da situação, é subtraído ou somando dentro da variável "n" que guarda o valor.
```js
for (let i = 0; i < romano.length; i++) {
    let atual = romano[i];
    let prox = romano[i + 1];
    if (prox && numeros[prox] > numeros[atual]) {
        n -= numeros[atual];
    } else {
        n += numeros[atual];
        }
}
```

Por último retornamos o valor de n
```js
return n;
```

## Gerando números aleatórios
Gerar um número aleatório entre 0 e 100
Chamamos a função Math.floor e dentro dela chamamos a função Math.ramdom. o processo dela é multiplicado por *100 para terminar a geração do número.

```js
return Math.floor(Math.random() * 100)
```
# Somar 2 números
Retorna a soma de 2 números

```js
return num1 + num2
```
# Subtrair 2 números
Retorna a subtração de 2 números

```js
return num1 - num2 
```
# Multiplicar 2 números
Retorna a multiplicação de 2 números

```js
return num1 * num2 
```
# Dividir 2 números
Retorna a divisão de um número pelo outro

```js
return num1 / num2 
```
# Resto da divisão
Retorna o resultado do processo para descobrir o resto da divisão entre 2 números

```js
return num1 % num2 
```
# Potência
Recebido o número e o seu expoente. Utilizamos a função Math.pow e passamos na ordem o número e o expoente.

```js
return Math.pow(num1, exp)
```
## Percentual
- É recebido por parâmetro o número e o percentual desejado.
- Multiplica-se o número pelo percentual.
- O resultado da multiplicação é dividido por 100.
- Retorna o resultado.
```js
return ((num1 * percent) / 100)
```
## Tabuada
- É recebido por parâmetro o número alvo.
- Através do laço for com 10 posições - nesse caso, o laço começa em 1 invés de 0 porque senão ficaria o primeiro item como 0 x número alvo - , é exibido a conta e depois calculado o número alvo x o número no qual o laço se encontra.

```js
for (let i = 1; i <= 10; i++) {
    console.log(`${num1} x ${i} = ${num1 * i}`)
}
```

## Calcular todos o números até
- Calcular todos os números de 1 até o alvo.
- Nesse algoritmo adaptamos a [Soma de Gauss](https://mundoeducacao.uol.com.br/matematica/soma-gauss.htm). Pegamos o número alvo dividimos por 2 e pegamos o resultado disso e multiplicamos pelo número alvo + 1. Exemplo, queremos saber a soma de todos os números até 100: (100 / 2) * (100 + 1) = 5050.


```js
let calcular = x => (x / 2) * (x + 1)
```