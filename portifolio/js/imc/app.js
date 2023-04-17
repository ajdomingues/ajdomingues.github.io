const calculate = document.getElementById('calculate')


// TODO: dividir responsabilidades com mais funções

function imc() {
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')

    // TODO: ajustar alerta se vazio
    if (name.value !== '' && height !== '' && weight !== '') {
        // result.textContent = 'Valor preenchido'

        // TODO: ajustar cálculo
        const imcValue = (weight / (height * height)).toFixed(2)

        let classificacao = ''

        if (imcValue < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (imcValue < 25) {
            classificacao = 'com peso ideal.'
        } else if (imcValue< 30) {
            classificacao = 'levemente acima do peso.'
        } else if (imcValue < 35) {
            classificacao = 'com obsesidade grau I.'
        } else if (imcValue < 40) {
            classificacao = 'com obsesidade grau II.'
        } else {
            classificacao = 'com obsesidade grau III.'
        }

        result.textContent = `${name} seu IMC é ${imcValue} e você está ${classificacao}`

    } else {
        result.textContent = 'Preencha todos os campos!'

    }
}

calculate.addEventListener('click', imc)