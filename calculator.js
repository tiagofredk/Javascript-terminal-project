var prompt = require('prompt-sync')();
// let reasign = require("./index.js")

exports.usrInput = () => {
    let usrInp = prompt(" Type your calculation: ").split(/([+-/*])/); // ["10", "+", "10"]
    let calcArr = []; // 10 10 Just Numbers
    let operator = []; // "+" Populated with the operator


    for (let x of usrInp) {
        // x == "+" || x == "-" || x == "*" || x == "/" ? operator.push(x) : calcArr.push(Number(x)); //["10" "+" "10"]

        if (isNaN(x)) {
            operator.push(x)
        } else {
            calcArr.push(Number(x))
        }
    }

    if (operator[0] == "+") {
        return `Result ${add(calcArr)}`;
    } else if (operator[0] == "-") {
        return `Result ${subtraction(calcArr)}`;
    } else if (operator[0] == "*") {
        return `Result ${multiply(calcArr)}`;
    } else if (operator[0] == "/") {
        return `Result ${divide(calcArr)}`;
    }else {
        return console.log("try again");
    }
}

function add(x) {
    const reducer = (a, b) => a + b;
    console.clear();
    return x.reduce(reducer)
}

function subtraction(x) {
    const reducer = (a, b) => a - b;
    console.clear();
    return x.reduce(reducer)
}

function divide(x) {
    const reducer = (a, b) => a / b;
    console.clear();
    return `Result ` + x.reduce(reducer)
}

function multiply(x) {
    const reducer = (a, b) => a * b;
    console.clear();
    return `Result  ${x.reduce(reducer)}`
}


