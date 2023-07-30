Projeto para exibir alguns aprendizados em com HTML e CSS.

# Títulos
h1, h2, h3, h4, h5, e h6
```html
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
```

# Parágrafos
tag p
```html
<p>Parágrafo de exemplo</p>
```

## Negrito, Itálico, etc

Frase com negrito

```html
<p>O vídeo fornece uma maneira <strong> poderosa </strong>de ajudá-lo a provar seu argumento.</p>
```

Negrito e itálico
```html
<p>Texto em <b>negrito</b> e <i>itálico</i> </p>
```

Sobrescrito e Subscrito
```html
<p>2<sup>2</sup>=4 e H<sub>2</sub>0 = Água!</p>
```

Espaço exagerado
```html

<p>Pra funcionar, teria que ser assim Espaço &nbsp;&nbsp;&nbsp;&nbsp; bem exagerados entre palavras</p>
```

# Listas

## Lista ordenada

```html
    <ol>
        <li>Will</li>
        <li>Carlton</li>
        <li>Asheley</li>
        <li>Hilary</li>
    </ol>
```

## Lista não ordenada

```html
    <ul>
        <li>Queijo
            <!-- lista aninhada -->
            <ul>
                <li>Prato</li>
                <li>Mussarela</li>
            </ul>
        </li>
        <li>Leite</li>
        <li>Manteiga</li>
        <li>Pão</li>
    </ul>

```

## Lista de definições
    
```html
    <dl>
        <!-- termo -->
        <dt>Baas</dt>
        <!-- definição -->
        <dd>Backend Como Serviço</dd>
        <dt>IaaS</dt>
        <dd>Infraestrutura Como Serviço</dd>
        <dt>PaaS</dt>
        <dd>Plataforma Como Serviço</dd>
        <dt>SaaS</dt>
        <dd>Software Como Serviço</dd>
    </dl>

```