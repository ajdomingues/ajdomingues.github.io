const calculate = document.getElementById('calculate')

function calcYearsHuman() {
    const yearsCanine = document.getElementById('idadeC').value

    if (yearsCanine != '') {
        const result = document.getElementById('result')
        const yearsHuman = parseInt(yearsCanine) * 7
        result.textContent = `A idade do cachorro equivale a ${yearsHuman} anos humanos.`
    } else {
        result.textContent = 'Informe um número no campo da idade.'
    }

}

calculate.addEventListener('click', calcYearsHuman)