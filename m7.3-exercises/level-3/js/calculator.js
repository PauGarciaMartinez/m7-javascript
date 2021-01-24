// GLOBAL VARIABLES 

// To store selected numbers and stack them
let number = "";
let count = 0;

// To check which operation it's been requested
let addition = false
let substraction = false;
let multiplication = false;
let division = false;

// To check if it's the first operation
let first = true;

// DOM

const screen = document.querySelector(".display-screen"); 
const displayNumber = document.querySelectorAll('.num-btn').forEach(target => {
    target.addEventListener('click', (e) => {
        screen.textContent = number + target.value;
        number = screen.textContent;
    })
  })
const addOperator = document.getElementById("add");
const substractOperator = document.getElementById("substract");
const result = document.getElementById("equals");
const clear = document.getElementById("clear");

// OPERATION FUNCTIONS

addOperator.addEventListener("click", (e) => {
    if (substraction == true) {
        count = count - number;
        screen.textContent = count;
    } else {
        count = count + parseInt(number);
        screen.textContent = count;
    }
    number = "";
    addition = true;
    substraction = false;
    first = false;
})

substractOperator.addEventListener("click", (e) => {
    if (first == true) {
        if (addition == true) { //oju que si sumo abans aquí ho compta com a suma
            count = count + parseInt(number);
            screen.textContent = count;
        } else {
            count = count - number;
            screen.textContent = count;
        }
    } else {
        screen.textContent = count;
        first = false;
    }
    number = "";
    addition = false;
    substraction = true;
})

// RESULT FUNCTION

result.addEventListener("click", (e) => {
    if (addition == true) {
        screen.textContent = count + parseInt(number);
    } else if (substraction == true) {
        screen.textContent = count - number;
    } else if (multiplication == true) {
        screen.textContent = count;
    } else if (division == true) {
        screen.textContent = count;
    }
    count = parseInt(screen.textContent);
    number = 0;
})



clear.addEventListener("click", (e) => {
    number = 0;
    count = 0;
    screen.textContent = count;
})




// OPERATOR FUNCTIONS

function add(value1, value2) {
    return parseInt(value1 + value2);
}

function substract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    if (value2 === 0) {
        return "Stop joking, plz";
    } else {
        return value1 / value2;
    }
}

// OPERATION FUNCTION

function operate(operator, value1, value2) {
    if (operator === "add") {
        return add(value1, value2);
    } else if (operator === "substract") {
        return substract(value1, value2);
    } else if (operator === "multiply") {
        return multiply(value1, value2);
    } else if (operator === "divide") {
        return divide(value1, value2);
    }
}
console.log(operate("substract", 28, 6)); 



