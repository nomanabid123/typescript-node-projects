"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chooseOperation = () => __awaiter(void 0, void 0, void 0, function* () {
    const { operation } = yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "operation",
            message: "Choose an operation",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    return operation;
});
const chooseNumbers = (operation) => __awaiter(void 0, void 0, void 0, function* () {
    const [number1, number2] = yield inquirer_1.default.prompt([
        {
            type: "number",
            name: "number1",
            message: `Enter the first number for ${operation}`,
            validate: (value) => !isNaN(value) ? true : "please enter a correct number",
            default: 0,
        },
        {
            type: "number",
            name: "number2",
            message: `Enter the second number for ${operation}`,
            validate: (value) => !isNaN(value) ? true : "please enter a correct number",
            default: 0,
        },
    ]);
    return [number1, number2];
});
const calculate = () => __awaiter(void 0, void 0, void 0, function* () {
    const operation = yield chooseOperation();
    const [number1, number2] = yield chooseNumbers(operation);
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
});
calculate();
