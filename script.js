let cardsNumber = Number(prompt("Com quantas cartas você quer jogar?"));
let cardsCounter = 0;
let randomCards = [];
let pairCards = [];
let cardsOpened = [];
let matchCards = [];
let correctedCards = 0;

const cardsName = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
];

insertCards();

let sortCards = cardsName.sort(comparador);
let sortNumberCards = randomCards.sort(comparador);

isOdd();

addCards();



function isOdd() {
    while (cardsNumber % 2 || cardsNumber < 4 || cardsNumber > 14) {
        cardsNumber = Number(prompt("Com quantas cartas você quer jogar?"));
    }
}


function insertCards() {
    for (let i = 0; i < (cardsNumber / 2); i++) {
        randomCards.push(i)
        randomCards.push(i)
    }

}

function insertCardsCounter(selecionar) {
    const numberId = Number(selecionar.id);
    if (!cardsOpened.includes(numberId)) {
        cardsOpened.push(numberId);
        cardsCounter++;
    }
    
}


function win(cards) {
    let realNumber = cardsNumber / 2;
    if(correctedCards  === realNumber) {
        const msgWin = `Você ganhou em ${cardsCounter} jogadas!`;
        alert(msgWin);
    }
 }


function addCards() {
    const cardsPlace = document.querySelector("main");
    for (i = 0; i < cardsNumber; i++) {
        let checkCards = `pair${sortNumberCards[i]}`;

        const cardsElement = `<div id=${i} class="card" onclick="onClick(this)">
        <div class="face ${checkCards}divfront">
          <img src="images/back.png">
        </div>
        <div class="face back-face ${checkCards}divback">
          <img src="images/${sortCards[sortNumberCards[i]]}.gif" class="checkImg ${checkCards}">
        </div>
    </div>
    `;
        cardsPlace.innerHTML += cardsElement;
    }
}

function onClick(selected) {
    insertCardsCounter(selected);
    addClassTurn(selected);
    cardSelected(selected);
    sameCards(selected);
    accepterCards(selected);
    win(selected);
}


function addClassTurn(selection) {
    const cardSelectedFace = selection.querySelector(".face");
    const cardSelectedBack = selection.querySelector(".back-face");

    cardSelectedFace.classList.add("front-face");
    cardSelectedBack.classList.add("turn-back-face");
    cardSelectedBack.classList.add("selected");

}

function accepterCards() {
if (pairCards[0] === pairCards[1]) {
    correctedCards++;
    
    }

}



function cardSelected(item) {
    const firstVerifyIMG = item.querySelector(".checkImg").classList;
    const verifyIMG = firstVerifyIMG[1];


    if (pairCards.length < 2) {
        pairCards.push(`${verifyIMG}`);
    }
    else {
        pairCards = [];
        pairCards.push(`${verifyIMG}`);
    }


}



function sameCards(sameItem) {
    if (pairCards.length === 2) {
        if (pairCards[0] !== pairCards[1]) {
            setTimeout(() => {
                const teste1 = sameItem.querySelector(".face");
                const teste2 = sameItem.querySelector(".back-face");

                teste1.classList.remove("front-face");
                teste2.classList.remove("turn-back-face");
                teste2.classList.remove("selected");
                
                let classCard = pairCards[0];
                let firstCard = document.querySelectorAll(`.${classCard}divfront`);
                let firstCardBack = document.querySelectorAll(`.${classCard}divback`);
                
                firstCard[0].classList.remove("front-face");
                firstCardBack[0].classList.remove("turn-back-face");
                firstCardBack[0].classList.remove("selected");


            }, 1000);
            
           


        }


    }
}


function comparador() {
    return Math.random() - 0.5;
}




