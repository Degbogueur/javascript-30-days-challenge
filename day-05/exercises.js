// Number Guessing Game

const guess = Math.floor(Math.random() * 10) + 1;

let userGuess;
let attempts = 0;
let message = '';

do {
    userGuess = prompt(`${message}\nGuess the number between 1 and 10:`);

    if (userGuess === null) {
        break;
    }

    userGuess = Number(userGuess);
    if (isNaN(userGuess)) {
        message = 'Please enter a valid number.';
        continue;
    }

    attempts++;

    if (userGuess < guess) {
        message = 'The number is higher.';
    } else if (userGuess > guess) {
        message = 'The number is lower.';
    } else {
        alert(`Congratulations! You guessed the right number in ${attempts} attempts!`);
    }
} while(userGuess !== guess);