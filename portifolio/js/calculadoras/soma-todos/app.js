const calculate = document.getElementById('calculate')

function calcGas() {
    const firstNumber = document.getElementById('firstNumberEnter').value

    if (firstNumber != '') {
        const result = document.getElementById('result')

        let summation = calc(parseFloat(firstNumber))

        result.textContent = `A soma de todos os números de 0 até ${firstNumber} é ${summation}.`

    } else {
        result.textContent = `Entrada inválida.`
    }
}

let calc = x => (x / 2) * (x + 1)

calculate.addEventListener('click', calcGas)