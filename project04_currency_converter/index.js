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
const axios_1 = __importDefault(require("axios"));
const prompt = require('prompt-sync')();
const url = 'http://data.fixer.io/api/latest?access_key=50a714cb53c3febfb3693958fd157ee9';
// function to get the currency rates
function getCurrencyRates() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(url);
        const rates = response.data.rates;
        return rates;
    });
}
// function to convert the currency
function convertCurrency() {
    return __awaiter(this, void 0, void 0, function* () {
        const rates = yield getCurrencyRates();
        const from = prompt('Enter the currency you want to convert from: ');
        const to = prompt('Enter the currency you want to convert to: ');
        const amount = prompt('Enter the amount: ');
        if (!rates[from] || !rates[to])
            throw new Error('Invalid currency');
        const convertedAmount = (amount * rates[to]) / rates[from];
        console.log(`${amount} ${from} is equal to ${convertedAmount} ${to}`);
    });
}
convertCurrency();
