resultArray = ['ROCK', 'PAPER', 'SCISSORS']

function computerPlay() {
    /* generate a random number between 1 and resultArray length */
    randomNumber = Math.floor(Math.random() * resultArray.length);

    /* return the randomly selected value from the result array */
    return resultArray[randomNumber];
};

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "ROCK" && computerSelection === !"ROCK") {

    }
    
    else if (playerSelection === "ROCK" && computerSelection === !"ROCK") {

    }
    
    else return "Not valid"
    
    
}

const playerSelection = 'Rock'.toUpperCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
