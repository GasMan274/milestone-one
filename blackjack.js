 const dealSum = 0;
const yourSum = 0;

const dealerAceCount = 0;
const yourAceCount = 0;

const hidden;
const deck;

const canHit = true; 
//allows the player (you) to draw while yourSum <=21

window.onload = function() {
    buildDeck()
    shuffleDeck()
    startGame()

}

function buildDeck() {
    let values = ["A ", "2 ", "3 ", "4 ","5 ", "6 ", "7 ", "8 ", "9 ", "10 ", "J ", "Q,", "K ",];
    let types = ["C ", "D ", "H ", "S ",];
    deck = [];
 // this dbl for loop is crealted to 0cover all the card eg. 
// A-C -> K-C -> A-D -> K-D etc.
for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++); {
        deck.push(values[j]+ "-" + types[i]); 
    }
}
//console.log(deck);
}
function shuffleDeck() {
    for (let i  = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length);// (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealSum += getvalue(hidden);
    dealerAceCount += checkAce(hidden);
    //console.log(hidden);
    //console.log(dealerSum);
    while (dealSum > 17) {

    }
}

function getvalue(card) {
    let data = card.split("-"); // 4 is the value and C is the type
    let value = data[0]; 

    if (isNaN(value)) {
        if (value == "A"){
            return 11;
        }
        return 10;
    }
}