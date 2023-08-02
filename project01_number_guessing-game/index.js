import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import termkit from "terminal-kit";
const term = termkit.terminal;
const log = console.log;
const failure = chalk.bold.red;
const success = chalk.bold.green;
const numOfTurns = 3;
const highScore = 0;
const diffiultyLevels = ["easy", "medium", "hard"];
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const launchFirework = () => {
    const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];
    // Define the firework pattern using ASCII characters
    const firework = `
   |
   *
  ***
 *****
*******
`;
    // Split the firework pattern into lines
    const fireworkLines = firework.split('\n');
    // Clear the terminal
    term.clear();
    // Display the colored firework with animation
    let offset = 0;
    const animationInterval = setInterval(() => {
        term.moveTo(1, 1).eraseLine();
        for (let i = 0; i < fireworkLines.length; i++) {
            const color = colors[(offset + i) % colors.length];
            term[color](fireworkLines[i]);
        }
        offset++;
    }, 100);
    // Stop the animation after 3 seconds
    setTimeout(() => {
        clearInterval(animationInterval);
        term.moveTo(1, 1).eraseLine();
        term('\nAnimation finished!\n');
    }, 3000);
};
const playGame = async (randomNumber, numOfTurns) => {
    const { guess } = await inquirer.prompt([
        {
            name: "guess",
            type: "number",
            message: "Guess the number",
        },
    ]);
    if (guess === randomNumber) {
        log(success("You guessed it right"));
        log("=====================================");
        launchFirework();
        log("=====================================");
        chalkAnimation.rainbow("You won");
        return;
    }
    if (numOfTurns === 1) {
        log(failure("You lost"));
        log("=====================================");
        log("Game Over");
        log("=====================================");
        chalkAnimation.radar("You lost");
        return;
    }
    log(failure("You guessed it wrong"));
    log("=====================================");
    log(`You have ${numOfTurns - 1} turns left`);
    log("=====================================");
    playGame(randomNumber, numOfTurns - 1);
};
const startGame = async () => {
    const { difficulty } = await inquirer.prompt([
        {
            name: "difficulty",
            type: "list",
            message: "Select difficulty level",
            choices: diffiultyLevels,
        },
    ]);
    const randomNumber = getRandomNumber(1, difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 50);
    ;
    const spinner = createSpinner("Generating random number");
    spinner.start();
    setTimeout(() => {
        spinner.stop();
        log(success("Random number generated"));
        log("You have 3 turns to guess the number");
        log("Lets start the game");
        log("=====================================");
        playGame(randomNumber, numOfTurns);
    }, 2000);
};
const main = () => {
    chalkAnimation.rainbow("Welcome to the number guessing game");
    startGame();
};
main();
