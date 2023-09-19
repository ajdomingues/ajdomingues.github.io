calculate = document.getElementById('calculate')
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

function exibir(valor, notas) {
    let resultado = ''
    const notasNecessarias = quantidadesPorNota(valor, notas)
    const result = document.getElementById('result')
    resultado += `$ ${valor}`

    notasNecessarias.forEach(({ quantidade, nota }) => {
        resultado += `${quantidade} nota(s) de $ ${nota},00`
    })

    result.textContent = resultado
}

function executar() {
    const valorTotal = document.getElementById('numberEnter').value
    exibir(valorTotal, notasDisponiveis)
}

calculate.addEventListener('click', executar)