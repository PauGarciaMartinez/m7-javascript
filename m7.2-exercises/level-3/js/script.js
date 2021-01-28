// DOM 

const button1 = document.getElementById("exercise1");
const button2 = document.getElementById("exercise2");
const button3 = document.getElementById("exercise3");
const button4 = document.getElementById("exercise4");
const button5 = document.getElementById("exercise5");
const inputText = document.getElementById("name");
const inputText4 = document.getElementById("name2");
const inputText2 = document.getElementById("middle-name");
const inputText3 = document.getElementById("text-bulk");
const display = document.querySelector(".display-container");

// FUNCTION TRIGGERS

button1.addEventListener("click", (e) => spelling());

button2.addEventListener("click", (e) => vowelOrConsonant());

button3.addEventListener("click", (e) => occurrences());

button4.addEventListener("click", (e) => join());

button5.addEventListener("click", (e) => findEmail());

// DISPLAY FUNCTIONS

// To display the result on the bottom
function displayResult(result, displayList) {
  display.style.backgroundColor = "white";
  display.appendChild(displayList);
  let letter = document.createElement("li");
  letter.textContent = result;
  displayList.appendChild(letter);
};

function removeList() {
  let list = document.getElementById("list");
  display.removeChild(list);
};

function createList() {
  let displayList = document.createElement("ul");
  displayList.setAttribute("id", "list");
  display.appendChild(displayList);
  return displayList;
}

// EXERCISE FUNCTIONS

// Functions for every exercise

function spelling() { 
  removeList();
  let displayList = createList();
  const name = Array.from(inputText.value);
  for (i = 0; i < name.length; i++) {
    displayResult(name[i], displayList);
  }
};

function vowelOrConsonant() {
  removeList();
  let displayList = createList();
  const name = Array.from(inputText.value);
  const vowels = /[aeiou]/i;
  const consonants = /[^aeiou]/i;
  const numbers = /[0-9]/;
  
  for (i = 0; i < name.length; i++) {
    if (name[i].match(vowels)) {
      displayResult("I've found the vowel: " + name[i], displayList);
    } else if (name[i].match(consonants)) {
      displayResult("I've found the consonant: " + name[i], displayList);
    } else if (name[i].match(numbers)) {
      displayResult("Dude, this is a number... wtf: " + name[i], displayList);
    }
  } 
};

function occurrences() {
  removeList();
  let displayList = createList();

  const name = Array.from(inputText.value);

  let acc = name.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
  let acc2 = Array.from(acc);

  for (i = 0; i < acc2.length; i++) {
    displayResult(acc2[i][0] + " : " + (acc2[i][1]), displayList);
  }
};

function join() {
  removeList();
  let displayList = createList();

  const name2 = Array.from(inputText4.value);
  const middleName = Array.from(inputText2.value);

  if (inputText4.value === "" || inputText2.value === "") {
    return;
  }

  const fullName = name2.concat(" ", middleName);

  for (i = 0; i < fullName.length; i++) {
    displayResult(fullName[i], displayList);
  }
};

function findEmail() {
  removeList();
  let displayList = createList();

  const string = inputText3.value; 

  // Regular expression to match with (almost) any kind of email
  const regex = /([a-zñ\d\.-]+)@([a-zñ\d\.-]+)\.([a-z]{2,8})/gi;
    
  if (inputText3.value === "") {
    return;
  }

  // Store matches to an array and avoid duplicated values
  function catchEmails(string) {
    const allEmails = string.match(regex);
    const uniqueEmails = Array.from(new Set(allEmails));
    return uniqueEmails;
  }

  displayResult(catchEmails(string), displayList);
};