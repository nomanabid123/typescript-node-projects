import axios from 'axios';
const prompt = require('prompt-sync')();

const url ='http://data.fixer.io/api/latest?access_key=50a714cb53c3febfb3693958fd157ee9'


// function to get the currency rates
async function getCurrencyRates() {
    const response = await axios.get(url);
    const rates = response.data.rates;
    return rates;
}

// function to convert the currency
async function convertCurrency() {
    const rates = await getCurrencyRates();
    const from = prompt('Enter the currency you want to convert from: ');
    const to = prompt('Enter the currency you want to convert to: ');
    const amount = prompt('Enter the amount: ');

    if(!rates[from] || !rates[to]) return console.log('Invalid currency');
    const convertedAmount = (amount * rates[to]) / rates[from];
    console.log(`${amount} ${from} is equal to ${convertedAmount} ${to}`);
}

convertCurrency();



