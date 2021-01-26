// EXERCISE 1
const myName = ["P", "A", "U"];
for (i = 0; i < 3; i++) {
    console.log(myName[i]);
}

// EXERCISE 2
const myName2 = ["P", "A", "U"];
const vowels = /[aeiou]/i;
const consonants = /[^aeiou]/i;
const numbers = /[0-9]/;

for (i = 0; i < 3; i++) {
    if (myName2[i].match(vowels)) {
        console.log("I've found the vowel: " + myName2[i]);
    } else if (myName2[i].match(consonants)) {
        console.log("I've found the consonant: " + myName2[i]);
    } else if (myName2[i].match(numbers)) {
        console.log("Dude, this is a number... wtf: " + myName2[i]);
    }
}

// EXERCISE 3
const myName3 = ["P", "A", "U"]; 

let acc = myName3.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());

console.log(acc);

// EXERCISE 4
const myName5 = ["P", "A", "U"];
const myMiddleName = ["G", "A", "R", "C", "I", "A"];

const fullName = myName5.concat(" ", myMiddleName);

console.log(fullName);