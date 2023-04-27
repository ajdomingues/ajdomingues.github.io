'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Beltrano",
    email: "beltrano@mail.com",
    celular: "1191234578",
    cidade: "Pinda"
}

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

// Interação com layout

// const saveClient = () => {
//     //verifica campos
//     if (isValidFields()) {
//         console.log("cadastrando cliente")
//     }


// }

//Eventos


document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

// document.getElementById('salvar')
//     .addEventListener('click', saveClient)