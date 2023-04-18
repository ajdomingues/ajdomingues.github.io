const turnOnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg'
        turnOnOff.textContent = "Ligar"
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
    turnOnOff.textContent = "Consertar"
}

function consertar() {
    document.location.reload(true);
    turnOnOff.textContent = "Ligar"
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Consertar') {
        fixit()
    }
    if (turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = "Ligar"
    }
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)