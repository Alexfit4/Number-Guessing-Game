let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will be called at the start of each new round in order to generate the new secret target number.
function generateTarget() {
	return Math.floor(Math.random() * 9) + 1;
}
console.log(generateTarget());

// This function will be called each round to determine which guess is closest to the target number.
function compareGuesses(userGuess, computerGuess, secretGuess) {
	if (
		Math.abs(userGuess - secretGuess) < Math.abs(computerGuess - secretGuess)
	) {
		return true;
	} else if (
		Math.abs(computerGuess - secretGuess) < Math.abs(userGuess - secretGuess)
	) {
		return false;
	} else {
		return true;
	}
}

// This function will be used to correctly increase the winner’s score after each round.
function updateScore(winner) {
	if (winner == "human") {
		humanScore++;
	} else if (winner == "computer") {
		computerScore++;
	}
}

function advanceRound() {
	currentRoundNumber++;
}
