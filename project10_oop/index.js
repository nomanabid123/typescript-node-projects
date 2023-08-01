"use strict";
const input = require('prompt-sync')();
class Person {
    constructor() {
        this.personality = "friendly";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else {
            this.personality = "Introvert";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    constructor() {
        super();
        this.stuName = "John";
    }
    getStudentName() {
        return this.stuName;
    }
    setStudentName(name) {
        this.stuName = name;
    }
}
const main = () => {
    try {
        const person = new Person();
        const student = new Student();
        const answer = input("if you like to talk to other press 1 else press 2: ");
        person.askQuestion(answer);
        const studentName = input("Enter your name: ");
        student.setStudentName(studentName);
        student.askQuestion(answer);
        console.log(`Hello ${student.getStudentName()}, You are a ${student.getPersonality()}`);
    }
    catch (e) {
        console.log("please enter a valid number");
    }
};
main();
