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

## Aula 3
- Organização da estrutura do projeto visando a manutenção.
    - Criado a pasta `src` e movido pra dentro dela a pasta `assets`. Na sequência, dentro de `src` foi criado a pasta `styles` e foi movido pra dentro dela os arquivos `style.css` e `reset.css`.
    - Renomeado o arquivo `style.css`  para `sidebar-footer.css`.
    - Ajustei o caminho dos links para `sidebar-footer.css` e `reset.css` adicionando um `./src/styles` no começo da url:
    
    ```html
    <link rel="stylesheet" href="./src/styles/reset.css" />
    <link rel="stylesheet" href="./src/styles/sidebar-footer.css">
    ```
    
    - Depois, ajustei o caminho da favicon e do logo do Spotify colocando um `./src` no começo da url:
    
    ```html
    <link rel="shortcut icon" href="./src/assets/icons/favicon.png" type="image/x-icon">
    ```
    
    ```html
    <img src="./src/assets/icons/logo-spotify.png" alt="Logo do Spotify">
    ```
    

- Utilização de variáveis no css:
    - Foi criado o arquivo `vars.css` dentro da pasta `styles`. Nele serão utilizadas as variáveis de estilos que se repetem ao longo do código. Movi para ele a `root` que eu já tinha feito por conta própria na aula 1.
    - Adicionado a chamada do `vars.css` no head do `index.html`:
    
    ```html
    <link rel="stylesheet" href="./src/styles/vars.css">
    ```
    
- Criado os botões para navegar, caixa de pesquisa, botão para login e o inscreva-se. Foi criado a seção `main`. Para estilizar a `main` foi criado também o `main-content.css`. Adicionado a chamada dele no head do `index.html`:

```html
<link rel="stylesheet" href="./src/styles/main-content.css">
```

- Nas variáveis de css, alterei o nome de algumas cores que já tinha escolhido a fim de evitar conflitos com as variáveis escolhidas no projeto da aula.

## Aula 4
- Incluso no `main-content.css` os atributos para os cards.
- Criado o arquivo `media-queries.css` dentro da pasta `src/styles`. Essa folha de estilos vai fazer com que a página se adapte para diferentes tamanhos de telas.
- Adicionado a chamada para `media-queries.css` no head do arquivo `index.html`.

```html
<link rel="stylesheet" href="./src/styles/media-queries.css" />
```

- Utilizado o json server parar criar uma “api fake” a fim de validar alguns processos do frontend sem ter o backend.
- Para instalar, foi aberto o terminal na pasta do projeto e executado o seguinte comando²:

```powershell
npm i json-server -g
```

² É necessário ter instalado o node para executar o comando.

Após o processo acima, foi criado o arquivo `artists.json` dentro da pasta `api-artists`. Vamos utilizar o `artists.json` para emular a nossa api. Foi disponibilizado todo o conteúdo desse arquivo.

Comando para fazer com que o json-server fique “escutando o arquivo”:

```powershell
json-server --watch api-artists/artists.json --port 3000
```

- Seguindo as orientações da aula, alterei a posição da declaração do arquivo `app.js`  para antes de fechar o `body` no `index.html`. Isso serve para atrasar o carregamento do JavaScript e ganha-se performance.

```html
<script type="text/javascript" src="./app.js"></script>
</body>
```

- Foi implementado o `app.js`  com a função de busca. Na constante url foi adicionado o caminho da “api fake”.
