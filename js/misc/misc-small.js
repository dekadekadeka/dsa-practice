// https://www.codewars.com/kata/562926c855ca9fdc4800005b
// Note: Math.pow and some other Math functions like eval() and ** are disabled.
function numberToPower(number, power){
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }

  return result;
}

numberToPower(4, 2); // return 16
numberToPower(10, 4); // return 10000
numberToPower(10, 0); // return 1

// I just wanted to reverse an array without using reverse().
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const reverseArr = arr => {
  let lastIndex = arr.length - 1;

  for (let i = 0; i < (arr.length / 2); i++) {
    let temp = arr[i];
    let last = arr[lastIndex];

    arr[i] = last;
    arr[lastIndex] = temp;
    lastIndex--;
  }

  return arr;
}

reverseArr(arr);

// https://www.codewars.com/kata/57126304cdbf63c6770012bd
function isDigit(s) {
  if (1 / parseFloat(s) === -Infinity) return false;

  return !isNaN(Number(s));
  // return (1 / -Number(s.trim()) === -Infinity) ?? !isNaN(Number(s.trim()));
}

isDigit("3 4");
isDigit(" ");
isDigit("-0");
isDigit("s2324");
isDigit("-234.4");

// https://www.codewars.com/kata/5a87449ab1710171300000fd/
function tidyNumber(n){
  return String(n).split('').sort().join('') === String(n).split('').join(''); 
}

tidyNumber(12); // return true
tidyNumber(102); // return false
tidyNumber(9672); // return false
tidyNumber(2789); // return true
tidyNumber(2335); // return true

// https://www.codewars.com/kata/582e0e592029ea10530009ce
class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  while (goose > players.length) {
    goose -= players.length;
  }
  
  return players[goose - 1].name;
}

duckDuckGoose(players, 1); // return a
duckDuckGoose(players, 3); // return c
duckDuckGoose(players, 10); // return z
duckDuckGoose(players, 20); // return z
duckDuckGoose(players, 30); // return z
duckDuckGoose(players, 18); // return g
duckDuckGoose(players, 28); // return g
duckDuckGoose(players, 12); // return b
duckDuckGoose(players, 2); // return b
duckDuckGoose(players, 7); // return f
