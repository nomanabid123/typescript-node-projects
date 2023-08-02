import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

const log = console.log;
const failure = chalk.bold.red;
const success = chalk.bold.green;

const numOfTurns = 3;
const diffiultyLevels = ["easy", "medium", "hard"];

const getRandomNumber = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const playGame = async (randomNumber:number, numOfTurns:number) => {
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
        log("Game Over");
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
}

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

startGame();
