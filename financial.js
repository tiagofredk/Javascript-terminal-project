var prompt = require('prompt-sync')();
const chalkAnimation = require('chalk-animation');
// let reasign = require("./index.js")

exports.simulation = () => {
    // x = v (1 + i) ^ t
    let time = Number(prompt("                     Calculate an investment over the years \n\n Type how Many years do you want to invest: ")) * 12;
    console.log(`Months: ${time}\n`);

    let initialValue = Number(prompt("What is the initial deposit? "));
    console.log(`First Deposit: $${initialValue}\n `);

    let monthDeposit = Number(prompt("How much do you want do deposit monthly? "));
    console.log(`Monthly apport: $${monthDeposit}\n`);

    let interestUsr = prompt("Monthly Interest?")
    let interest = 1 + (Number(interestUsr / 100));
    console.log(`Monthly interest: % ${interestUsr}\n`);

    function calc(interest, time) {

        let result = initialValue;

        for (let i = 0; i < time; i++) {

            result = (result + monthDeposit) * interest;
        }

        return result;
    }

    let speichern = (calc(interest, time));

    function formatToCurrency(amount) {
        return `$ ` + (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    console.log(`This is the result of your investment after ${time / 12} years \n ${formatToCurrency(speichern)}\n` );
    
}

