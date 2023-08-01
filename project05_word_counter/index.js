"use strict";
const input = require('prompt-sync')();
const getInput = () => {
    let paragraph = "";
    console.log("Enter a paragraph: ");
    paragraph = input();
    return paragraph;
};
const getWordCount = (paragraph) => {
    const words = paragraph.split(" ");
    return words.length;
};
const getLetterCount = (paragraph) => {
    const letters = paragraph.split(" ");
    let letterCount = 0;
    for (let i = 0; i < letters.length; i++) {
        letterCount += letters[i].length;
    }
    return letterCount;
};
const main = () => {
    const paragraph = getInput();
    const wordCount = getWordCount(paragraph);
    const letterCount = getLetterCount(paragraph);
    console.log(`Word Count: ${wordCount}`);
    console.log(`Letter Count: ${letterCount}`);
};
main();
