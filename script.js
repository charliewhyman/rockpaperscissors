resultArray = ['ROCK', 'PAPER', 'SCISSORS']

function computerPlay() {
    /* generate a random number between 1 and resultArray length */
    randomNumber = Math.floor(Math.random() * resultArray.length);

    /* return the randomly selected value from the result array */
    return resultArray[randomNumber];
};

function playRound(playerSelection, computerSelection) {
    if (!resultArray.includes(playerSelection)) {
        'Not a valid input'
    }
    
    else if (playerSelection === 'PAPER') {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }

    else if (playerSelection === 'ROCK' && (computerSelection === 'SCISSORS' || computerSelection === 'PAPER')) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
   
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }

    else return 'Draw!';
}

const playerInput = 'Rock';
const playerSelection = playerInput.toUpperCase();
const computerSelection = computerPlay();
console.log(playerInput);

console.log(playRound(playerSelection, computerSelection));
