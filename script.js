let resultArray = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;

function computerPlay() {
    /* Generate a random number between 1 and resultArray length */
    randomNumber = Math.floor(Math.random() * resultArray.length);

    /* Return the randomly selected value from the result array */
    return resultArray[randomNumber];
};

    /* Define a function to play a single round of rock, paper scissors */
function playRound(playerSelection, computerSelection) {

    /* Create if statements to compare player and computer selections */
    if (playerSelection === computerSelection) {
        return "Draw!"
    }
    
    else if (playerSelection === "PAPER") {
        return loseMessage;
    }

    else if (playerSelection === "ROCK" && (computerSelection === "SCISSORS" || computerSelection === "PAPER")) {
        playerScore++;
        return winMessage;
    }
   
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        return winMessage;
    }

    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        playerScore++;
        return loseMessage;
    }

    else return "Not a valid input";
}

/* Define a function to play a 5 round game that keeps score, and reports a winner/loser */
function game() {
    for (let step = 0; step < 5; step++) {
        // Runs 5 times, with values of step 0 through 4.
        playRound(playerSelection, computerSelection);
      }
}

const playerInput = 'rock'
/* window.prompt("Enter your choice (rock, paper or scissors)"); */
const playerSelection = playerInput.toUpperCase();
const computerSelection = computerPlay();

const loseMessage = `You lose! Computer's ${computerSelection} beats your ${playerSelection}`;
const winMessage = `You win! Computer's ${computerSelection} beats your ${computerSelection}`;

console.log("player" + playerSelection);
console.log("computer" + computerSelection);
console.log(game())
