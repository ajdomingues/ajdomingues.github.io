module.exports = {
    dolarReal(valor1) {
        const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%272021-11-12%27&$top=100&$format=json'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const cotacaoDolar = data.value[0].cotacaoCompra
                const valorReal = cotacaoDolar * valor1
                const formatarValor = valorReal.toFixed(2)
                console.log(formatarValor)
            })
            .catch(error => {
                console.error('Errouuu... ' + error)
            })
    }
}

