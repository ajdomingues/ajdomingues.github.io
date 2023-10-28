module.exports = {
    tudoMaiusculo(texto) {
        return `${texto}`.toUpperCase()
    },
    tudoMinusculo(texto) {
        return `${texto}`.toLowerCase()
    },
    juntarTextos(texto1, texto2) {
        return texto1.concat(texto2)
    },
    converterParaBinario(num1) {
        return num1.toString(2)
    },
    converterParaDecimal(num1) {
        return num1.toString(10)
    },
    arredondar(num1) {
        return num1.toFixed(2)
    },
    romanoToInt(romano) {
        let n = 0;
        const numeros = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        for (let i = 0; i < romano.length; i++) {
            let atual = romano[i];
            let prox = romano[i + 1];

            if (prox && numeros[prox] > numeros[atual]) {
                n -= numeros[atual];
            } else {
                n += numeros[atual];
            }
        }

        return n;
    },
    geradorNumeros() {
        return Math.floor(Math.random() * 100)
    },

    geradorTresNumeros() {
        let numerosGerados = Math.floor(Math.random() * 100)
        numerosGerados += Math.floor(Math.random() * 100)
        numerosGerados += Math.floor(Math.random() * 100)
        return numerosGerados
    },

    somar(num1, num2) {
        return num1 + num2
    },
    subtrair(num1, num2) {
        return num1 - num2
    },
    multiplicar(num1, num2) {
        return num1 * num2
    },
    dividir(num1, num2) {
        return num1 / num2
    },
    restoDivisao(num1, num2) {
        return num1 % num2
    },
    potencia(num1, exp) {
        return Math.pow(num1, exp)
    },
    percentual(num1, percent) {
        return ((num1 * percent) / 100)
    },
    somaPercentual(num1, percent) {
        return (num1 + ((num1 * percent) / 100))
    },
    subtrairPercentual(num1, percent) {
        return (num1 - ((num1 * percent) / 100))
    },
    tabuada(num1) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num1} x ${i} = ${num1 * i}`)
        }
    },
    somaTodosAte(num1) {
        let calcular = num1 => (num1 / 2) * (num1 + 1)
        return calcular(num1)
    },
    areaCirculo(raio) {
        const area = Math.PI * Math.pow(raio, 2)
        return area
    },
    ordem_0(min, max) {
        if (min > max) [max, min] = [min, max]
        return `menor ${min}, maior ${max}`
    },

    ordem_1(min, max) {
        if (min > max) [max, min] = [min, max]
        return [min, max]
    },

    geradorLetras() {
        const letras = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let letrasGeradas = ''
        letrasGeradas += letras[Math.floor(Math.random() * 25)]
        letrasGeradas += letras[Math.floor(Math.random() * 25)]
        letrasGeradas += letras[Math.floor(Math.random() * 25)]
        return letrasGeradas
    },
    contarDias(anos) {
        const contarDias = anos => anos * 365
        return `${contarDias(anos)} dias.`
    },
    calcularAprovacao(nota) {
        const notaCorte = 7
        const resultado = nota => nota >= notaCorte ? 'Aprovado' : 'Reprovado'
        return resultado(nota)
    },

    converterCelsiusFarenheit(temp) {
        return `${temp}°C é ${(temp * 1.8) + 32}°F `
    },

    converterFarenheitCelsius(temp) {
        return `${temp}°F é ${(temp - 32) / 1.8}°C `
    },

    converterCelsiusKelvin(temp) {
        return `${temp}°C é ${temp + 273.15}°K `
    },

    converterKelvinCelsius(temp) {
        return `${temp}°K é ${temp - 273.15}°C `
    },

    converterkmMilhas(vel1) {
        return `${vel1} km é ${vel1 / 1.609344} mi`
    },

    converterMilhasKm(vel1) {
        return `${vel1} Mi é ${vel1 * 1.609344} km`
    },

    converterKmhMs(vel1) {
        return `${vel1} km/h é ${vel1 / 3.6} m/s`
    },

    converterMskmh(vel1) {
        return `${vel1} m/s é ${vel1 * 3.6} km/h`
    },

    conversorCmPol(medida1) {
        return `${medida1}cm é ${medida1 / 2.54}pol`
    },

    conversorPolCm(medida1) {
        return `${medida1}pol é ${medida1 * 2.54}cm`
    },

}