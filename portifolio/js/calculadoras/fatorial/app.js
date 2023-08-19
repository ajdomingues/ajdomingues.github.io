const calculate = document.getElementById('calculate')

function calcFatorial() {
    const numberEnter = document.getElementById('numberEnter').value

    if (numberEnter != '' && numberEnter > 0) {
        const result = document.getElementById('result')
        let summation = 1
        for (let i = 0; i < numberEnter; i++) {
            summation *= i + 1
        }

        result.textContent = summation
    } else {
        result.textContent = 'Entrada inválida.'
    }
}

calculate.addEventListener('click', calcFatorial)