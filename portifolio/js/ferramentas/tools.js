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
    }
}