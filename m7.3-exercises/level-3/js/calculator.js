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

// Screen selector
const screen = document.querySelector(".display-screen"); 
// Operand selectors
const displayNumber = document.querySelectorAll('.num-btn').forEach(target => {
    target.addEventListener('click', (e) => {
        screen.textContent = number + target.value;
        number = screen.textContent;
    })
  });
// Operator selectors
const addOperator = document.getElementById("add");
const substractOperator = document.getElementById("substract");
const multiplyOperator = document.getElementById("multiply");
const divideOperator = document.getElementById("divide");
// Result, clear and delete selectors
const result = document.getElementById("equals");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");

// OPERATION FUNCTIONS

addOperator.addEventListener("click", (e) => {
    if (substraction == true) {
        count = count - number;
        screen.textContent = count;
    } else if (multiplication == true) {
        count = count * number;
        screen.textContent = count;
    } else if (division == true) {
        count = count / number;
        screen.textContent = count;
    } else {
        count = count + parseInt(number);
        screen.textContent = count;
    }
    number = "";
    addition = true;
    substraction = false;
    multiplication = false;
    division = false;
    first = false;
});

substractOperator.addEventListener("click", (e) => {
    if (addition == true) {
        count = count + parseInt(number);
        screen.textContent = count;
    } else if (multiplication == true) {
        count = count * number;
        screen.textContent = count;
    } else if (division == true) {
        count = count / number;
        screen.textContent = count;
    } else {
        if (first == true) {
            count = count + parseInt(number);
        } else {
            count = count - number;
            screen.textContent = count;
        }   
    }
    number = "";
    substraction = true;
    addition = false;
    multiplication = false;
    division = false;
    first = false;
});

multiplyOperator.addEventListener("click", (e) => {
    if (addition == true) {
        count = count + parseInt(number);
        screen.textContent = count;
    } else if (substraction == true) {
        count = count - number;
        screen.textContent = count;
    } else if (division == true) {
        count = count / number;
        screen.textContent = count;
    } else {
        if (multiplication == true) {
            count = count * number;
            screen.textContent = count;
        } else {
            if (first == true) {
                count = count + parseInt(number);
                screen.textContent = count;  
            } else {
                count = count * number;
                screen.textContent = count;
            }
        }
    }
    number = "";
    multiplication = true;
    addition = false;
    substraction = false;
    division = false;
    first = false;
});

divideOperator.addEventListener("click", (e) => {
    if (addition == true) {
        count = count + parseInt(number);
        screen.textContent = count;
    } else if (substraction == true) {
        count = count - number;
        screen.textContent = count;
    } else if (multiplication == true) {
        count = count * number;
        screen.textContent = count;
    } else {
        if (division == true) {
            count = count / number;
            screen.textContent = count;
        } else {
            if (first == true) {
                count = count + parseInt(number);
                screen.textContent = count;  
            } else {
                count = count / number;
                screen.textContent = count;
            }
        }
    }
    number = "";
    division = true;
    addition = false;
    substraction = false;
    multiplication = false;
    first = false;
});


// RESULT FUNCTION

result.addEventListener("click", (e) => {
    if (addition == true) {
        screen.textContent = count + parseInt(number);
    } else if (substraction == true) {
        screen.textContent = count - number;
    } else if (multiplication == true) {
        screen.textContent = count * number;
    } else if (division == true) {
        screen.textContent = count / number;
    }
    count = parseInt(screen.textContent);
    number = 0;
    addition = false;
    substraction = false;
    multiplication = false; 
    division = false;
    first = true;
});



clear.addEventListener("click", (e) => {
    number = "";
    count = 0;
    first = true;
    addition = false;
    substraction = false;
    multiplication = false;
    division = false;
    screen.textContent = count;
});