const dealSum = 0;
const yourSum = 0;

const dealerAceCount = 0;
const yourAceCount = 0;

var hidden;
var deck;

const canHit = true; 
//allows the player (you) to draw while yourSum <=21

window.onload = function() {
    buildDeck
    shuffleDeck
}

function buildDeck() {
    let values = ["A", "2", "3", "4","5", "6", "7", "8", "9", "10", "J", "Q,", "K",];
    let types = ["C", "D", "H", "S",];
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