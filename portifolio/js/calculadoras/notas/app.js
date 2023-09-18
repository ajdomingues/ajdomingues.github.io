const calculate = document.getElementById('calculate')

// const valorTotal = document.getElementById('numberEnter').value
const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1]

function quantidadeNotas(valor, nota) {
    const quantidade = Math.floor(valor / nota)
    return quantidade
}

function quantidadesPorNota(valor, notas) {
    const listaNotas = notas.map(nota => {
        const quantidade = quantidadeNotas(valor, nota)
        valor = valor - (quantidade * nota)
        return { nota, quantidade }
    })
    return listaNotas
}

function formatar(notas) {
    const valor = document.getElementById('numberEnter').value
    const notasNecessarias = quantidadesPorNota(valor, notas)
    console.log(valor)

    notasNecessarias.forEach(({ quantidade, nota }) => {
        console.log(`${quantidade} nota(s) de R$ ${nota},00`)
    })
}

function validar(numero) {
    if (numero <= 0) {
        return `Valor inválido!`
    }
}


calculate.addEventListener('click', formatar(notasDisponiveis))
// calculate.addEventListener('click', formatar(valorTotal, notasDisponiveis))
// formatar(valorTotal, notasDisponiveis)