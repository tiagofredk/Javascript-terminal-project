var prompt = require('prompt-sync')();
let utils = require("./utils")
let calculator = require("./calculator")
let fin = require("./financial")
const chalkAnimation = require('chalk-animation');

function start() {
    console.clear();
    let x = Number(prompt("\n----------------------------------------STARK Industries - F.R.I.D.A.Y. 1.0 -------------------------------------\n\n                                                 How can I help you?\n\n 1-Financial   2-Calc_Area   3-Calculator    4-Elevation    5-Percentage   6-Square_root   7-About_F.R.I.D.A.Y\n\n 8-Bye    9-Exit"));
    console.clear();
    let result = decision(x);
}
start();

function decision(x) {

    if (x === 1) {
        financial();
    } else if (x === 2) {
        calcArea();
    } else if (x === 3) {
        calc();
    } else if (x === 4) {
        elevate()
    } else if (x === 5) {
        percentage();
    } else if (x === 6) {
        root();
    } else if (x === 7){
        friday();    
    } else if (x === 8){
        chalkAnimation.glitch('                                                                   T H A N K   Y O U\n');
    } else {
        process.exit();
    }
}

function calcArea(){
    utils.calcArea();
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: "))
    decide === 1 ? console.clear() + financial() : console.clear(), start();
}

function financial(){
    fin.simulation();
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: "))
    decide === 1 ? console.clear() + financial() : console.clear(), start();
}

function calc() {
    console.log(calculator.usrInput());
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: "))
    decide === 1 ? console.clear() + calc() : console.clear(), start();
}

function elevate() {
    let x = Number(prompt("Type the number you want to elevate: "));
    let y = Number(prompt("Type the elevation number: "));
    console.clear();
    console.log(`The power of ${x} elevated to ${y} is ${utils.usr(x, y)} \n`);
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: "))
    decide === 1 ? console.clear() + elevate() : console.clear(), start();
}

function percentage() {
    let x = Number(prompt("Type the percentual you want to know: "));
    let y = Number(prompt("Type value: "));
    console.clear();
    console.log(`${x}% of ${y} is ${utils.percentage(x, y)}\n`);
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: \n"))
    decide === 1 ? console.clear() + percentage() : console.clear(), start();
}

function root() {
    let x = Number(prompt("Type the number you want to know the square root: "));
    console.log(`Square root of ${x} is ${utils.sqrt(x)} \n`);
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: \n"))
    decide === 1 ? console.clear() + root() : console.clear(), start();
}

function friday(){
    console.log("F.R.I.D.A.Y. (Female Replacement Intelligent Digital Assistant Youth) is a fictional artificial intelligence appearing\n in American comic books published by Marvel Comics, usually depicted as Tony Stark's personal assistant and ally.\n");
    let decide = Number(prompt("Continue, type 1, for the menu, type 2: "))
    decide === 1 ? console.clear() + process.exit() : console.clear(), start();
}