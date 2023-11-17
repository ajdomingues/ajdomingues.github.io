module.exports = {
    dolarReal(valorDolar) {
        const hoje = new Date()
        const formatarData = `${(hoje.getMonth() + 1)}-${hoje.getDate()}-${hoje.getFullYear()}`
        const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${formatarData}%27&$format=json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const cotacaoDolar = data.value[0].cotacaoCompra
                const valorReal = cotacaoDolar * valorDolar
                const valorFormatado = valorReal.toFixed(2)
                console.log(`US$ ${valorDolar} é R$ ${valorFormatado}`)
            })
            .catch(error => {
                console.error('Errouu...: ' + error);
            })
    },

}

