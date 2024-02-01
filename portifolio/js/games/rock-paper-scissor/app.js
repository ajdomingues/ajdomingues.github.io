const computerChoiceDisplay = document.getElementById(' computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById(' result')
const possibleChoices = document.getElementById('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListerner('click', () => {
    userChoice = e.taget.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))


function generateComputerChoice() {
    const randomNumber = Math.random() * possibleChoices.length
}