import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import termkit from "terminal-kit";
import { exit } from "process";
const term = termkit.terminal;

const log = console.log;
const failure = chalk.bold.red;
const success = chalk.bold.green;
const warning = chalk.bold.yellow;

const numOfTurns = 3;
let yourScore = 0;
let chooseddifficultyLevel:string = ""
const diffiultyLevels = ["easy", "medium", "hard"];

const getRandomNumber = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const launchFirework=()=> {
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
  }, 3000);
  return;
}


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
        launchFirework();
        yourScore += 10;
        log(`Your score is ${yourScore}`);

        let randomNum = getRandomNumber(
          1,
          chooseddifficultyLevel === "easy"
            ? 10
            : chooseddifficultyLevel === "medium"
            ? 20
            : 50
        );
        playGame(randomNum, numOfTurns);
    }else if(guess !== randomNumber && numOfTurns > 1){
      log(failure("You guessed it wrong"));
      log("=====================================");
      log(`You have ${numOfTurns - 1} turns left`);
      log("=====================================");
      playGame(randomNumber, numOfTurns - 1);
    }

    if (numOfTurns === 1) {
        log("random number was " + randomNumber);
        log("=====================================");
        log("Game Over");
        log("=====================================");
        log(`Your score is ${yourScore}`);
        exit();
    }

    
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
  chooseddifficultyLevel = difficulty;
  const randomNumber = getRandomNumber(
    1,
    difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 50
  );
  const spinner = createSpinner("Generating random number");

  spinner.start();

  setTimeout(() => {
    spinner.stop();


    log(success("Random number generated"));
    log(warning("You have 3 turns to guess the number"))
    log("")
    const rainbow = chalkAnimation.rainbow("Game starts in 3 seconds");
    setTimeout(() => {
      rainbow.stop();
    }, 3000);

    log(chalk.bgCyan.bold("Good luck"))

    playGame(randomNumber, numOfTurns);
  }, 2000);
};


const main =  () => {
    const rainbow = chalkAnimation.rainbow("Welcome to the number guessing game")
    setTimeout(() => {
        rainbow.stop();
        startGame();
    }, 2000);

}

main();