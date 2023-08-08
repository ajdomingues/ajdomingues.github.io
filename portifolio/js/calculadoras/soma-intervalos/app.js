const calculate = document.getElementById('calculate')

function calcInterval() {
    const firstNumber = document.getElementById('firstNumberEnter').value
    const secondNumber = document.getElementById('secondNumberEnter').value

    if (firstNumber != '' && secondNumber != '') {
        const result = document.getElementById('result')

        let summation = calc(checkNumbers(firstNumber, secondNumber))

        result.textContent = `A soma de todos os números no intervalo entre ${firstNumber} e ${secondNumber} é ${summation}.`

    } else {
        result.textContent = `Entrada inválida.`
    }
}

function checkNumbers(min, max) {
    if (min > max) [max, min] = [min, max]
    return max - min
}
let calc = x => (x / 2) * (x + 1)

calculate.addEventListener('click', calcInterval)