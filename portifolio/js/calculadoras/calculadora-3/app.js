const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accmulativeCalculation

function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        screenDisplay.textContent = eval(accmulativeCalculation)
    } else {
        calculation.push(value)
        accmulativeCalculation = calculation.join('')
        screenDisplay.textContent = accmulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener(
    'click', () =>
    calculate(button)
)
)