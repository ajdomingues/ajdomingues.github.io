'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

//CRUD

// Interação com layout

const saveClient = () => {
//verifica campos
if(isValidFields()){
    console.log("cadastrando cliente")
}


}

//Eventos


document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)