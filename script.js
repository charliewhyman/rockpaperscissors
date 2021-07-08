let resultArray = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

let computerSelection = computerPlay();

//create a results div and display the score
const container = document.querySelector('.container');

const content = document.createElement('div');
content.classList.add('content');

container.appendChild(content);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerInput = button.id;
    const playerSelection = playerInput.toUpperCase();
    
    content.textContent = playRound(playerSelection, computerPlay());
    container.appendChild(div);
  });
});

function computerPlay() {
    /* Generate a random number between 1 and resultArray length */
    randomNumber = Math.floor(Math.random() * resultArray.length);

    /* Return the randomly selected value from the result array */
    return resultArray[randomNumber];
};

    /* Define a function to play a single round of rock, paper scissors */
function playRound(playerSelection, computerSelection) {
    const loseMessage = `You lose! Computer's ${computerSelection} beats your ${playerSelection}`;
    const winMessage = `You win! Your ${playerSelection} beats Computer's ${computerSelection}`;

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

/* Define a function to play a game that keeps score, and reports a winner/loser */
function game() {        
        console.log(playRound(playerPlay(), computerPlay()));        
      

    if (playerScore === computerScore) {
        return `Draw! Both players scored ${playerScore}`;
    }

    else if (playerScore > computerScore) {
         return `You win! You scored ${playerScore}, the computer scored ${computerScore}`;
    }

    else return `You lose! You scored ${playerScore}, the computer scored ${computerScore}`;
}