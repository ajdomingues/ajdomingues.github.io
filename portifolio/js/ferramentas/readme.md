# Ferramentas para reutilização

Várias ferramentas para ser reutilizadas em diversas aplicações. A ideia é ser o mais simples possível para funções rotineiras.

## Transformar texto em maiúsculo

Pegar um texto e retorná-lo chamando a função toUpperCase

```jsx
return `${texto}`.toUpperCase()
```

## Transformar texto em minúsculo

Pegar um texto e retorná-lo chamando a função toLowerCase

```jsx
return `${texto}`.toLowerCase()
```

## Juntar textos

Pegar dois textos e juntá-los usando o concat

```jsx
return texto1.concat(texto2)
```

## Converter número inteiro para binário

Converter um número para binário usando o `toString()`.

```jsx
return num1.toString(2)
```

## Converter número binário para decimal

Converter um número de binário para decimal usando o `toString()`

```jsx
return num1.toString(10)
```

## Arredondar número

Arredondar número usando o `toFixed()`.

```jsx
return num1.toFixed(2)
```

## Converter números romanos para decimais

Converter número de romanos para arábicos. É recebido um número em romanos por parâmetro. Criamos uma variável `n` e a inicializamos com 0.

```jsx
let n = 0;
```

Na sequência, criamos uma constante com os números romanos: I. V, X, L, C, D, M e seus respectivos valores.

```jsx
const numeros = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
```

E criamos um laço de repetição do mesmo tamanho da constante com os números romanos. As variáveis `atual` e `prox` nos auxiliam a identificar em qual algarismo romano estamos no laço e qual é o próximo. É verificado se o próximo número é maior ou igual ao número atual. Dependendo da situação, é subtraído ou somando dentro da variável `n` que guarda o valor.

```jsx
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

Por último retornamos o valor de `n`.

```jsx
return n;
```

## Converter números decimais para romanos

Converter número de romanos para arábicos - O número decimal é passado por parâmetro. Adicionamos numa constante todos os números romanos possíveis:

```jsx
const numerosRomanos = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];
```

- Depois, criamos um laço de repetição que vai armazenar na variável resultado os números decimais conforme ele for identificando:

```jsx
for (const numeral of numerosRomanos) {
  while (numeroRestante >= numeral.value) {
    resultado += numeral.symbol;
    numeroRestante -= numeral.value;
  }
}
return resultado;
```

## Gerando números aleatórios

Gerar um número aleatório entre 0 e 100 chamamos a função `Math.floor` e dentro dela chamamos a função `Math.random`. O processo dela é multiplicado por 100 para terminar a geração do número.

```jsx
return Math.floor(Math.random() * 100);
```

# Somar 2 números

Retorna a soma de 2 números:

```jsx
return num1 + num2
```

# Subtrair 2 números

Retorna a subtração de 2 números:

```jsx
return num1 - num2;
```

# Multiplicar 2 números

Retorna a multiplicação de 2 números:

```jsx
return num1 * num2;
```

# Dividir 2 números

Retorna a divisão de um número pelo outro:

```jsx
return num1 / num2;
```

# Resto da divisão

Retorna o resultado do processo para descobrir o resto da divisão entre 2 números:

```jsx
return num1 % num2;
```

# Potência

Recebido o número e o seu expoente. Utilizamos a função `Math.pow` e passamos na ordem o número e o expoente.

```jsx
return Math.pow(num1, exp);
```

## Percentual

- É recebido por parâmetro o número e o percentual desejado.
- Multiplica-se o número pelo percentual.
- O resultado da multiplicação é dividido por 100.

```jsx
return (num1 * percent) / 100;
```

## Soma percentual

- É recebido o número e o percentual alvo por parâmetro
- Multiplica-se o número pelo percentual.
- O resultado da multiplicação é dividido por 100.
- O resultado é somado ao próprio número.

```jsx
return num1 + (num1 * percent) / 100;
```

## Subtrair percentual

- É recebido o número e o percentual alvo por parâmetro
- Multiplica-se o número pelo percentual.
- O resultado da multiplicação é dividido por 100.
- É subtraído do número o valor acima.

```jsx
return num1 + (num1 * percent) / 100;
```

## Tabuada

- É recebido por parâmetro o número alvo.
- Através do laço for com 10 posições - nesse caso, o laço começa em 1
invés de 0 porque senão ficaria o primeiro item como 0 x número alvo, é exibido a conta e depois calculado o número alvo x o número no qual o laço se encontra.

```jsx
for (let i = 1; i <= 10; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
}
```

## Calcular todos o números até

- Calcular todos os números de 1 até o alvo.
- Nesse algoritmo adaptamos a [Soma de Gauss](https://mundoeducacao.uol.com.br/matematica/soma-gauss.htm). Pegamos o número alvo, dividimos por 2 e pegamos o resultado disso e multiplicamos pelo número alvo + 1.

$$
(n \div 2) * (n + 1)
$$

- Exemplo, queremos
saber a soma de todos os números até 100: (100 / 2) * (100 + 1) = 5050.

```jsx
let calcular = x => (x / 2) * (x + 1)
```

## Área do círculo

- Calcular a área do círculo
- É recebido o raio através de parâmetro. O cálculo é veio usando a constante interna `Math.PI` multiplicada pela função de potência, `Math.pow` com o raio elevado a 2.

$$
\Pi * (raio ^2)
$$

```jsx
const area = Math.PI * Math.pow(raio, 2)
```

## Verificar a ordem dos números
Verificar numa sequência de 2 números: menor e maior.

Os números são recebidos por parâmetro. Através de uma condicional, verificamos se o primeiro é maior que o segundo. Caso seja, é invertido seus valores.

```jsx
if (min > max) [max, min] = [min, max]
```

## Gerador letras

- Sortear letras aleatórias

Aqui criei uma constante com todas as letras de a à z. Em seguida, criei uma variável par armazenar as letras geradas. Utilizei o `Math.floor` e o `random` para sortear uma letra fazendo com que o número gerado esteja entre o range de 0 à 25 - para percorrer a sequência toda (26 letras).

```jsx
letrasGeradas += letras[Math.floor(Math.random() * 25)]
```

## Contar dias

- É recebido a quantidade de anos. Utilizamos uma const para fazer o
cálculo recebendo a quantidade de anos e multiplicado por 365.

```jsx
const contarDias = anos => anos * 365
```

## Calcular aprovação

- Verificar a nota recebida por parâmetro. O cálculo foi armazenado dentro de uma const onde verifica se a nota é maior ou igual a determinada nota de corte. Assim, utiliza-se uma ternária para determinar o conteúdo se é verdadeiro (aprovado) ou falso (reprovado).

```jsx
const resultado = nota => nota >= notaCorte ? 'Aprovado' : 'Reprovado'
```

## Conversores

### Moedas

- A função recebe o valor do dólar pra converter através de parâmetro.
- Coletei a data atual na cont `hoje` e usamos a função `new Date`.
- Para utilizarmos a API do BCB, precisamos de um formato específico da data:‘(mês + 1)-dia-ano’. Criei a variável `formatarData` e aproveitei a `hoje` para pegar esses dados.
- Na `url` guardei a url da API gratuita do BCB e dentro dela passamos o nosso formato de data com a data atual usando`${ }` e crases/backticks. Incluímos na URL que desejamos que o retorno seja no formato `json`.
- Invocamos a função `fetch` e passamos a `url` como parâmetro.
    - Extraí da resposta as informações que precisamos.
    - Na const `valorReal` fazemos a conta do valor da cotação x valor do dolar.
    - Formatei para deixar com 2 casas após a vírgula usando `toFixed` e template string para formatar a resposta.

### Temperatura

### Converter graus Celsius em
Farenheit

$$
F = C * 1,8 + 32
$$

Onde F é o Farenheit e C a temperatura em Celsius.

```jsx
 `${temp}°C é ${(temp * 1.8) + 32}°F `
```

### Converter graus Farenheit
em Celsius

$$
C = \frac{F - 32} {1.8}
$$

Onde F é o Farenheit e C a temperatura em Celsius.

```jsx
 `${temp}°F é ${(temp - 32) / 1.8}°C`
```

### Converter graus Celsius em
Kelvin

$$
TK = TC + 273
$$

- T de temperatura, K de Kelvin e C de Celsius.

```jsx
 `${temp}°C é ${temp + 273.15}°K `
```

### Comprimento

### Quilômetros em milhas

$$
mi = \frac {km} {1.609344}
$$

```jsx
`${vel1} km é ${vel1 / 1.609344} mi`
```

### Milhas em quilômetros

$$
km = mi * 1.609344
$$

```jsx
`${vel1} Mi é ${vel1 * 1.609344} km`
```

### Centímetros em polegadas

$$
pol = \frac{cm}{2.54}
$$

```jsx
`${medida1}cm é ${medida1 / 2.54}pol`
```

### Polegadas em centímetros

$$
cm = pol * 2.54
$$

```jsx
`${medida1}pol é ${medida1 * 2.54}cm`
```

### Nanômetros em centímetros

- Fórmula:

$$
cm = \frac {nm}{10000000}
$$

```jsx
`${medida1}nm é ${medida1 / 10000000}cm`
```

### Centímetros em nanômetros

- A fórmula;

$$
cm = nm * 10000000
$$

```jsx
`${medida1}cm é ${medida1 * 10000000}nm`
```

### Jardas em metros

- A fórmula é:

$$
m = yd * 0.9144
$$

```jsx
`${medida1}yd é ${medida1 * 0.9144}m`
```

### Metros em jardas

- A fórmula é:

$$
yd = m / 0.9144
$$

```jsx
`${medida1}m é ${medida1 / 0.9144}yd`
```

### Microns em centímetros

- A fórmula é:

$$
cm = µm / 10000
$$

```jsx
`${medida1}µm é ${medida1 / 10000}cm`
```

### Centímetros em microns

- A fórmula é:

$$
µm = m / 10000
$$

```jsx
`${medida1}cm é ${medida1 * 10000}µm`
```

### Velocidade

### Quilômetros por hora
em metros por segundo

- A fórmula é:

$$
 ms = \frac{kmh}{3.6}
$$

```jsx
`${vel1} km/h é ${vel1 / 3.6} m/s`
```

### Metros por segundo
em quilômetros por hora

- A fórmula é :

$$
kmh = ms * 3.6
$$

```jsx
`${vel1} m/s é ${vel1 * 3.6} km/h`
```

### Tempo

### Horas em minutos

- A fórmula é:

$$
min = h * 60
$$

```jsx
`${tempo1}h é ${tempo1 * 60}min`
```

### Minutos em horas

- A fórmula é:

$$
h = \frac {min}{60}
$$

```jsx
`${tempo1}min é ${tempo1 / 60}h`
```