"use strict";
const input = require('prompt-sync')({ sigint: true });
const guessNumber = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    let guess = 0;
    guess = parseInt(input('Guess a number between 0 and 10: '));
    if (guess === randomNumber) {
        console.log('You guessed correctly!');
    }
    else {
        console.log(`You guessed incorrectly! The number was ${randomNumber}`);
    }
};
guessNumber();
