calcular = document.getElementById('calcular')
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
    const saida = document.getElementById('resultados')

    if (valor > 0 && valor !='') {
        resultado += `$ ${valor}\n`

        notasNecessarias.forEach(({ quantidade, nota }) => {
            resultado += `${quantidade} nota(s) de $ ${nota},00\n`
        })
        saida.textContent = resultado
    } else {
        saida.textContent = 'Valor inválido!'
    }
}

function executar() {
    const valorTotal = document.getElementById('valorEntrada').value
    exibir(valorTotal, notasDisponiveis)
}

calcular.addEventListener('click', executar)