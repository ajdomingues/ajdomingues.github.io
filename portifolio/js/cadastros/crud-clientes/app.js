'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Fulano",
    email: "fulano@mail.com",
    celular: "1191234567",
    cidade: "Itaqua City"
}

//CRUD
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))    
    db_client.push(client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
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