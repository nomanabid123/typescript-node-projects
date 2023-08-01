"use strict";
const input = require('prompt-sync')();
const quiz = require('./questions.json');
let score = 0;
const questions = quiz;
const handleQuiz = (questions) => {
    questions.forEach((question) => {
        console.log(question.question);
        console.log(question.choices.join('\n'));
        const answer = parseInt(input('Enter your choice in number :'));
        if (answer - 1 === question.correctAnswer) {
            score += 10;
        }
    });
};
handleQuiz(questions);
console.log(`Your score is ${score}`);
