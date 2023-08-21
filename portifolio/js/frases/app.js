const phrase = document.getElementById('texts')
const buttons = document.getElementById('button')

const shiftLanguages = (event) => {
    changePath[event.target.id]()
}

const changePath = {
    'br': () => showText('./text/pt-br.txt'),
    'es': () => showText('./text/es.txt'),
    'us': () => showText('./text/eng-us.txt'),
}

function showText(pathLanguage) {
    fetch(pathLanguage)
        .then(response => response.text())
        .then(text => {
            const array = text.split("\n");
            phrase.textContent = (array);
        })
}

buttons.addEventListener('click', shiftLanguages)