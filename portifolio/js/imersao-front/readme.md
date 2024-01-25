# Imersão Frontend 2024
Exercício feito na Imersão Frontend 2024 da Alura.

## Aula 1

Nesta aula foi iniciado o projeto da recriação da página inicial do Spotify por meio do HTML e do CSS.

- Revisão: HTML, CSS e JS na prática
- Criado a pasta dos projeto e colocado dentro os 3 arquivos: `index.html` , `style.css` e `app.js`¹.
- Copiado para dentro do projeto a pasta assets disponibilizado na imersão.
- Adicionei os links integrando os 3 arquivos por conta própria e coloquei a favicon.
- Por conta própria também, no arquivo css, usei o esquema de variáveis para as cores a fim de reutilizá-las ao longo do código. Exemplo da declaração - usada no topo do arquivo `style.css`:

```css
:root {
  --fundoPrimario: #000;
  --fundoSecundario: #121212;
  --brancoAreia: #b3b3b3;
}
```

Exemplo da chamada:

```css
background-color: var(--fundoSecundario);
```

- Utilizado o arquivo `reset.css` para resertar/limpar os padrões de estilos do html antes que sejam aplicados os novos - nesse caso o nosso `sytle.css`.
- Feito a estilização do fundo, logo, dos botões início e buscar.
- Nos ícones, foi utilizado o CDN do [Font Awesome](https://fontawesome.com/icons) importando o link dentro da head e chamando os ícones específicos dentro das classes.

Importação/declaração:

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
  integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE"
  crossorigin="anonymous"
/>
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
  integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
  crossorigin="anonymous"
/>
```

Chamada:

```html
<span class="fa fa-home"></span> <span>Início</span>
```
Neste exemplo, no site, lugar do “fa fa-home” aparece o ícone home: 🏠. 

<aside>
💡 O ícone pode ter um formato diferente dependendo do sistema operacional que vai abrir o site.

</aside>

¹ Na aula colocaram o arquivo js como `script.js`. Deixei no meu código `app.js` pois é um padrão que gosto de usar.

## Aula 2

- Nessa aula foi trabalhado a estrutura do bloco do menu lateral.
- Foi apresentado o padrão BEM para css que é uma metodologia de organização de css.  Exemplo de uso no html:

```html
<div class="library__content">
  <button class="library__button"></button>
</div>
```

Exemplo de uso no css:

```css
.section-playlist__content{}
```

No [site da Alura](https://www.alura.com.br/artigos/criando-componentes-css-com-padrao-bem#utilizando-o-padrao-bem) tem um artigo explicando o seu funcionamento e conceito.

- Trabalhado os botões para os botões:
    - Sua biblioteca
    - Criar playlist
    - Português do Brasil

Continuamos utilizando a biblioteca do Font Awesome para pegar os ícones.

Na aula, foi dado a dica para para ir inserindo os atributos no `style.css` na mesma ordem que eles vão aparecendo no `index.html`.

Criei o hábito de, ao colocar uma classe numa tag no html, já inseri-la no css para trabalhar nelas depois. Deixo assim:

```css
.library__content{}
.section-playlist{}
.section-playlist__content{}
.text{}
.title{}
.subtitle{}
.section-playlist__button{}
.cookies{}
.languages{}
.languages__button{}
```

<aside>
💡 Outra dica que uso é, no html, selecionar e copiar o nome da classe e colar no CSS. Isso evita erro de digitação que pode impedir que o estilo seja aplicado naquela classe e gere transtornos na hora de localizar o que está de errado. Caso o atributo seja combinado com outros, basta adaptar na hora de fazer a estilização.

</aside>

Como a fonte é sempre a mesma, no css, adicionei a fonte dentro da tag `body`. Assim, dispensa a necessidade de repetir em toda as seções/classes que tem texto.