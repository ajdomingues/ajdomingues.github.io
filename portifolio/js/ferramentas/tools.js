module.exports = {
    tudoMaiusculo(texto) {
        return `${texto}`.toUpperCase()
    },
    tudoMinusculo(texto) {
        return `${texto}`.toLowerCase()
    },
    juntarTextos(texto1, texto2) {
        return texto1.concat(texto2)
    }
}