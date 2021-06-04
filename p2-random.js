/*
    CIT 281 Project 2
    Name: Benjamin Jensen
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
//let randString = [];

//should forloop call get random letter?
for (let i = 0; i < getRandomInteger(5, 26); i++) {
  result += getRandomLetter();
  //result += alphabet[getRandomInteger(1, alphabet.length - 1)];
}

//Retrieves random letter from alphabet variable
function getRandomLetter() {
  let num = getRandomInteger(0, alphabet.length);
  let letter = alphabet[num];
  return letter;
}

//Returns a string of random length including and between max and min length
function getRandomString(minLength, maxLength) {
  let randString = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
    randString += getRandomLetter();
  }

  return randString;
}


//returns string in alphabetical order ascending
function getSortedString(string) {return sortedString = string.split("").sort().join("");}


//phil's console log
console.log(result);

//console logs a random letter
console.log(getRandomLetter());

//console logs a string of random length
//console.log(randString.join(""));
console.log(getRandomString(10, 20));

//console logs a string sorted alphetically
console.log(getSortedString("ashx"));