var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay === 2) {
	cardsInPlay.length == 2;
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match");
} else if (cardsInPlay[0] !== cardsInPlay[2]) {
	alert("Sorry try again!!");
};