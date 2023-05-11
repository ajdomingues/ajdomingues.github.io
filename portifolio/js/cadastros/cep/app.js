'use strict'

const procuraCep = async () => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    // fetch(url).then(response=>response.json()).then(console.log) // executa e trás uma promise / retorno assíncrono
    const endereco = await dados.json()
    const dados = await fetch(url)
}

document.getElementById('cep')
    .addEventListener('focusout', procuraCep)

