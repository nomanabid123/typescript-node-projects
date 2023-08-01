"use strict";
const input = require("prompt-sync")();
const date = new Date();
let stopCountdown = false; // Flag to stop the countdown
const handleCountdown = (date) => {
    const currentDate = new Date();
    const diff = date.getTime() - currentDate.getTime();
    if (diff < 0) {
        console.log("Countdown finished");
        stopCountdown = true; // Set the stop flag to true when the countdown finishes
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(`Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
};
const handleInput = () => {
    const year = parseInt(input("Enter year: "));
    const month = parseInt(input("Enter month: "));
    const day = parseInt(input("Enter day: "));
    const hour = parseInt(input("Enter hour: "));
    const minute = parseInt(input("Enter minute: "));
    const second = parseInt(input("Enter second: "));
    const date = new Date(year, month - 1, day, hour, minute, second);
    return date;
};
const dateInput = handleInput();
const countdown = setInterval(() => {
    if (!stopCountdown) {
        handleCountdown(dateInput);
    }
    else {
        clearInterval(countdown); // Clear the interval when the stop flag is true
    }
}, 1000);
