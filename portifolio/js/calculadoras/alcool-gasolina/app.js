const calculate = document.getElementById('calculate')

function calcGas() {
    const etanolPrice = parseFloat(document.getElementById('etanolPriceEnter').value)
    const gasPrice = parseFloat(document.getElementById('gasPriceEnter').value)

    if (etanolPrice != '' && gasPrice != '') {
        const result = document.getElementById('result')
        let summation = calc(etanolPrice, gasPrice)
        result.textContent = indicator(summation)
    } else {
        result.textContent = `Entrada inválida.`
    }
}

let calc = (x, y) => (x / y)

function indicator(summation) {
    const factor = 0.7
    let results = ''
    if (summation <= factor) {
        results = `Cálculo gerado: ${summation}. É melhor utilizar Etanol.`
    } else {
        results = `Cálculo gerado: ${summation}. É melhor utilizar Gasolina.`
    }
    return results
}

calculate.addEventListener('click', calcGas)