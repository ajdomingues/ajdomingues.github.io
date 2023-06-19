const img = document.getElementById('img')
const buttons = document.getElementById('button')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0

const changeColor = () => {
    const colors = ['green', 'yellow', 'red']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex();
}

const broken = () => {
    const colors = ['yellow', 'off', 'yellow']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex();
}

const fixit = () => document.location.reload(true)

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'off': () => img.src = './img/desligado.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000),
    'broken': () => intervalId = setInterval(broken, 1000),
    'fixit': () => fixit()
}

buttons.addEventListener('click', trafficLight)