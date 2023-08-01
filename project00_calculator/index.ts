import inquirer from "inquirer";

const chooseOperation = async () => {
  const { operation } = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: "Choose an operation",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);
  return operation;
};

const chooseNumbers = async (operation: string) => {
  const [number1, number2] = await inquirer.prompt([
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

  return [number1, number2];
};

const calculate = async () => {
  const operation = await chooseOperation();
  const [number1, number2] = await chooseNumbers(operation);
  let result = 0;
  switch (operation) {
    case "Addition":
      result = number1 + number2;
      break;
    case "Subtraction":
      result = number1 - number2;
      break;
    case "Multiplication":
      result = number1 * number2;
      break;
    case "Division":
      result = number1 / number2;
      break;
  }
  console.log(`The result of ${operation} is ${result}`);
};

calculate();
