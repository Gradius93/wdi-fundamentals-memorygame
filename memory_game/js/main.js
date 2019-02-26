console.log("Up and Running!");

var cards = [
{	
suit: "Hearts",
rank: "Queen",
cardImage: "images/queen-of-hearts.png"
},
{
suit: "Hearts",
rank: "King",
cardImage: "images/king-of-hearts.png"
},
{
suit: "Diamonds",
rank: "Queen",
cardImage: "images/queen-of-diamonds.png"
},
{
suit: "Diamonds",
rank: "King",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("you found a match");
	} else {
	alert("Sorry try again!!");
	}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);
