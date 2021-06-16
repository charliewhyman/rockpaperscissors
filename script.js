let resultArray = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

let playerInput = window.prompt("Enter your choice (rock, paper or scissors)");
const playerSelection = playerInput.toUpperCase();
let computerSelection = computerPlay();

const loseMessage = `You lose! Computer's ${computerSelection} beats your ${playerSelection}`;
const winMessage = `You win! Your ${playerSelection} beats Computer's ${computerSelection}`;

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
        computerScore++;
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
        computerScore++;
        return loseMessage;
    }

    else return "Not a valid input";
}

/* Define a function to play a 5 round game that keeps score, and reports a winner/loser */
function game() {
    for (let step = 0; step < 5; step++) {
        let playerInput = window.prompt("Enter your choice (rock, paper or scissors)");
        /* window.prompt("Enter your choice (rock, paper or scissors)"); */
        let computerSelection = computerPlay();
        /* Runs 5 times, with values of step 0 through 4. */
        console.log(playRound(playerSelection, computerSelection));        
      }

    if (playerScore === computerScore) {
        return `Draw! Both players scored !{playerScore}`;
    }

    else if (playerScore > computerScore) {
         return `You win! You scored ${playerScore}, the computer scored ${computerScore}`;
    }

    else return `You lose! You scored ${playerScore}, the computer scored ${computerScore}`;
}

console.log(game())
