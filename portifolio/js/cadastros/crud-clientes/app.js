'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal')
        .classList.remove('active')
}

// const tempClient = {
//     nome: "Shokko",
//     email: "Shokko@mail.com",
//     celular: "1191234578",
//     cidade: "Pinda"
// }

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [] // se não houver banco, envia um array vazio
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//CRUD

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// const cadastrarCliente = (client) => {

// }

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

// Interação com usuário
const saveClient = () => {
    //verifica campos
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        closeModal()
        //  console.log("cadastrando cliente")
    }
}

//criar linhas
const createRow = (client) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>

                <td>
                    <button type="button" class="button green">Editar</button>
                    <button type="button" class="button red">Excluir</button>
                </td>
`
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

//limpar tabela
const clearTable=()=>{
    const rows = document.querySelectorAll('#tableCliente>tbody tr')
    rows.forEach
}

// update na tabela
const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}


updateTable()


//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)