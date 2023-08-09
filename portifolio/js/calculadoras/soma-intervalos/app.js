const calculate = document.getElementById('calculate')

function calcInterval() {
    const firstNumber = document.getElementById('firstNumberEnter').value
    const secondNumber = document.getElementById('secondNumberEnter').value

    if (firstNumber != '' && secondNumber != '') {
        const result = document.getElementById('result')
        const summation = calc(parseInt(firstNumber), parseInt(secondNumber))
        result.textContent = `A soma de todos os números no intervalo entre ${firstNumber} e ${secondNumber} é ${summation}.`

    } else {
        result.textContent = `Entrada inválida.`
    }
}

function calc(a, b) {
    let min = 0
    let max = 0
    let soma = 0

    if (a < b) {
        min = a
        max = b
    } else {
        min = b
        max = a
    }
    for (min; min <= max; min++) {
        soma += min
    }
    return soma
}

calculate.addEventListener('click', calcInterval)