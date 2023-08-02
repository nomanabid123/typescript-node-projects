import inquirer from "inquirer";

const chooseOperation = async () => {
  const { operation } = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: "Choose an operation",
      choices: ["*", "\\", "+", "-"],
    },
  ]);
  return operation;
};

const chooseNumbers = async (operation: string) => {
  const number = await inquirer.prompt([
    {
      type: "number",
      name: "number1",
      message: `Enter the first number for ${operation}`,
      validate: (value: any) =>
        !isNaN(value) ? true : "please enter a correct number",
      default: 0,
    },
    {
      type: "number",
      name: "number2",
      message: `Enter the second number for ${operation}`,
      validate: (value: any) =>
        !isNaN(value) ? true : "please enter a correct number",
      default: 0,
    },
  ]);

  return number;
};

const calculate = async () => {
  const operation = await chooseOperation();
  const number = await chooseNumbers(operation);
  const { number1, number2 } = number;
  let result = 0;
  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "\\":
      result = number1 / number2;
      break;
  }
  console.log(`The result of ${operation} is ${result}`);
};

calculate();
