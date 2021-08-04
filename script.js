let resultArray = ['ROCK', 'PAPER', 'SCISSORS'];
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
    scoreText.textContent = 'Player: ' + playerScore + ' Computer: '+computerScore;
    resultText.textContent = declareResult();
  });
});



//play functions
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
        return 'Draw!'
    }
    
    else if (playerSelection === 'PAPER') {
        computerScore++;
        return loseMessage;
    }

    else if (playerSelection === 'ROCK' && (computerSelection === 'SCISSORS' || computerSelection === 'PAPER')) {
        playerScore++;
        return winMessage;
    }
   
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++;
        return winMessage;
    }

    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore++;
        return loseMessage;
    }

    else return 'Not a valid input';
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function declareResult() {
    const playerWinMessage = 'You win! Reload page to play again.'
    const playerLoseMessage = 'You lose! Reload page to play again.'

    if (playerScore === 5 && computerScore <5) {
        disableButtons();
        return playerWinMessage;
    }
    else if (playerScore < 5 && computerScore ===5) {
        disableButtons();
        return playerLoseMessage;
    }

}

// create a score element
const scoreText = document.createElement('P');
scoreText.classList.add('scoreText');
scoreText.style.color = 'red';
container.appendChild(scoreText);

// create a result element
const resultText = document.createElement('P');
resultText.classList.add('resultText');
container.appendChild(resultText);