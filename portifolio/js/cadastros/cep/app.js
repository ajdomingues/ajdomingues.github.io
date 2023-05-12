'use strict'

const limparFormulario = () => {
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
}

const preeencherFormulario = (endereco) => {
    limparFormulario()
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
    document.getElementById('numero').focus() // depois de preencher/trazer os campos acima, foca no campo número

}

const ehNUmero = (numero) => /^[0-9]+$/.test(numero)

const cepValido = (cep) => cep.length == 8 && ehNUmero(cep)

const procuraCep = async () => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {

        const dados = await fetch(url)
        const endereco = await dados.json()

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado'
            // TODO: colocar um alert ou modal sinalizando o erro
        } else {
            preeencherFormulario(endereco)
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto'
        // TODO: colocar um alert ou modal sinalizando o erro
    }

}

document.getElementById('cep')
    .addEventListener('focusout', procuraCep)