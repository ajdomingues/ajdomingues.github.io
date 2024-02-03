document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png',
        },
        {
            name: 'fries',
            img: 'img/fries.png',
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'img/pizza.png',
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png',
        },
        {
            name: 'fries',
            img: 'img/fries.png',
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'img/pizza.png',
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const gridDisplay = document.querySelector("#grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
        
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.appendChild(card)
        }
    }
    
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        // TODO:substituir o alert por um campo de mensagem na TextTrackList. Ou, no Angular, colocar numa snackbar!
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Você clicou na mesma imagem!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Você fez uma combinação!')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Foi mal, tente de novo!!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Parabéns! Você encontrou todos!!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
