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

    intToRoman(numero) {
        const numerosRomanos = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];

        let resultado = '';
        let numeroRestante = numero;

        for (const numeral of numerosRomanos) {
            while (numeroRestante >= numeral.value) {
                resultado += numeral.symbol;
                numeroRestante -= numeral.value;
            }
        }

        return resultado;
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

    converterCelsiusFarenheit(temperatura) {
        return `${temperatura}°C é ${(temperatura * 1.8) + 32}°F `
    },

    converterFarenheitCelsius(temperatura) {
        return `${temperatura}°F é ${(temperatura - 32) / 1.8}°C `
    },

    converterCelsiusKelvin(temperatura) {
        return `${temperatura}°C é ${temperatura + 273.15}°K `
    },

    converterKelvinCelsius(temperatura) {
        return `${temperatura}°K é ${temperatura - 273.15}°C `
    },

    converterkmMilhas(velocidade1) {
        return `${velocidade1} km é ${velocidade1 / 1.609344} mi`
    },

    converterMilhasKm(velocidade1) {
        return `${velocidade1} Mi é ${velocidade1 * 1.609344} km`
    },

    converterKmhMs(velocidade1) {
        return `${velocidade1} km/h é ${velocidade1 / 3.6} m/s`
    },

    converterMskmh(velocidade1) {
        return `${velocidade1} m/s é ${velocidade1 * 3.6} km/h`
    },

    conversorCmPol(medida1) {
        return `${medida1}cm é ${medida1 / 2.54}pol`
    },

    conversorPolCm(medida1) {
        return `${medida1}pol é ${medida1 * 2.54}cm`
    },

    conversorNmCm(medida1) {
        return `${medida1}nm é ${medida1 / 10000000}cm`
    },

    conversorCmNm(medida1) {
        return `${medida1}cm é ${medida1 * 10000000}nm`
    },

    conversorMicromCm(medida1) {
        return `${medida1}µm é ${medida1 / 10000}cm`
    },

    conversorCmMicrom(medida1) {
        return `${medida1}cm é ${medida1 * 10000}µm`
    },

    conversorJdM(medida1) {
        return `${medida1}yd é ${medida1 * 0.9144}m`
    },

    conversorMjd(medida1) {
        return `${medida1}m é ${medida1 / 0.9144}yd`
    },

    conversorHmin(tempo1) {
        return `${tempo1}h é ${tempo1 * 60}min`
    },

    conversorMinH(tempo1) {
        return `${tempo1}min é ${tempo1 / 60}h`
    },

    analisarPalindromo(frase) {
        const fraseAnalisar = frase.toLocaleLowerCase()
            .replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const fraseExperimento = fraseAnalisar.split('')
            .reverse().
            join('')
        if (fraseAnalisar === fraseExperimento) {
            return `${frase} é palíndromo.`
        } else {
            return `${frase} não palíndromo.`
        }
    },

}