const calculate = document.getElementById('calculate')

function calcGas() {
    const etanolPrice = parseFloat(document.getElementById('etanolPriceEnter').value)
    const gasPrice = parseFloat(document.getElementById('gasPriceEnter').value)

    if (etanolPrice != '' && gasPrice != '' && etanolPrice > 0 && gasPrice > 0) {
        const result = document.getElementById('result')
        let summation = calc(etanolPrice, gasPrice)
        result.textContent = indicator(summation)
    } else {
        result.textContent = `Entrada inválida.`
    }
}

let calc = (x, y) => (x / y)

const factor = 0.7

let indicator = (summation) => summation <= factor ? `Cálculo gerado: ${summation}. É melhor utilizar Etanol.` : `Cálculo gerado: ${summation}. É melhor utilizar Gasolina.`

calculate.addEventListener('click', calcGas)