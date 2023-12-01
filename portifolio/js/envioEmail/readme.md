# Formulário para envio de e-mails

Nesse projeto foi feito um formulário para envio de e-mails. Trata-se de uma caixa onde o usuário da aplicação/página pode enviar uma mensagem ao administrador do site à respeito de um determinado assunto.

O usuário deve informar:
- Nome
- Endereço de e-mail
- Mensagem

Todos os campos são obrigatórios.

Dentro da tag form, na action é utilizado o endereço de disparo que usa como ferramenta o site formsubmit. Na url abaixo, troque {email do administrador/destinatario} pelo endereço de e-mail de quem vai receber todas as mensagens.

```html
<form target="_blank" action="https://formsubmit.co/{email do administrador/destinatario}" method="POST">
```

**Nota 1:** Da maneira como é colocado no código acima, caso o usuários saiba inspecionar a página, vai ficar evidente o endereço de e-mail do destinatário.

No envio da primeira mensagem, o formsubmit.co vai enviar para o e-mail informado na url um pedido de ativação.

**Não tem custo**.

Você receberá no seu e-mail uma mensagem da formsubmit com as instruções.

Seguindo as orientações, na sequência você receberá o e-mail que foi enviado através do formulário.

**Nota 2:** Para funcionar, deve ser executado a página como se fosse um servidor. Em seus testes (no seu computador), utilize liveserver ou modifique o endereço colocando no começo o localhost.

No envio da mensagem, será solicitado ao usuário que responda um Captcha.

Para evitar o Captcha, deve-se hospedar a página num servidor e adicionar dentro do form a seguinte linha:

```html
<input type="hidden" name="_captcha" value="false">
```




