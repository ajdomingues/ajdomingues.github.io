const calculate = document.getElementById('calculate')

function calcYearsHuman() {
    const yearsCanine = document.getElementById('idadeC').value
    const result = document.getElementById('result')
    const idadeHumana = parseInt(yearsCanine) * 7
    result.textContent = `A idade do cachorro equivale a ${idadeHumana} anos humanos`
}

calculate.addEventListener('click', calcYearsHuman)