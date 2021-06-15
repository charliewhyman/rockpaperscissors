resultArray = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    /* generate a random number between 1 and resultArray length */
    randomNumber = Math.floor(Math.random() * resultArray.length);

    /* return the randomly selected value from the result array */
    return resultArray[randomNumber];
};