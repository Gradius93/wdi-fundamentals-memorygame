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

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match");
		} else {
			alert("Sorry try again!!");
		};
	};
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();
};

var createBoard = function () {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();





