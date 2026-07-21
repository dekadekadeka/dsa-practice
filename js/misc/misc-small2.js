// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript
function vaporcode(string) {
  // original solution - did not account for strings that end in whitespace
  // return string.replace(/.(?=.)/g, l => /\W/.test(l) ? '' : l + '  ').toUpperCase();

  // after failing spec that checked for whitespace at the end
  return string.replace(/\S/g, l => /\W/.test(l) ? '' : l + '  ').toUpperCase().trimEnd();
}

vaporcode("Lets go to the movies"); // return "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

// just off the top of my head :)
function removeDuplicates(arr) {
  // original solution - not as efficient as using a Set, but it works
  // return arr.filter((n, i) => arr.lastIndexOf(n) === i);
  return [...new Set(arr)];
}

removeDuplicates([6, 7, 67, 6, 9, 69, 4, 2, 0, 420]);
removeDuplicates([1, 1, 1, 2, 3, 2, 4]);

// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript
function getOrder(input) {
  const result = [];
  const menu = /milkshake|pizza|chicken|fries|coke|burger|sandwich|onionrings/g;

  // hardcoded menu is required due to items having to be in this order
  const menuHash = {
    burger: 0,
    fries: 0,
    chicken: 0,
    pizza: 0,
    sandwich: 0,
    onionrings: 0,
    milkshake: 0,
    coke: 0,
  };

  // count how many times each item from the menu appears in the input
  input.match(menu).forEach(item => menuHash[item]++);

  for (const item in menuHash) {  
    result.push(...Array(menuHash[item]).fill(item.charAt(0).toUpperCase() + item.slice(1)));
  }

  return result.join(' ');
}

// return "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");

// https://www.codewars.com/kata/59cfe5b023daccfd07000048/train/javascript
function numberOfFolds(n) {
  // you can't use Math.log() here, so this is a substitute
  let x = (n - 1) / (n + 1);
  let x2 = x * x;
  let sum = 0;
  let currentX = x;
  
  for (let i = 1; i <= 100; i += 2) {
    sum += currentX / i;
    currentX *= x2;
  }

  const log = 2 * sum;

  // cannot use Math.trunc either, so we truncate the number here
  const logTrunc = log | 0;

  // cannot use Math.ceil either, so we add 1 here when necessary
  return log > logTrunc ? logTrunc + 1 : logTrunc;
  // Short answer: Math.ceil(Math.log(n))
}

numberOfFolds(8); // return 3
numberOfFolds(1); // return 0
numberOfFolds(2); // return 1

// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
const tapMap = () => {
  const alphabet = 'ABC2DEF3GHI4JKL5MNO6PQRS7TUV8WXYZ9 0';
  const result = { '1': 1, '*': 1, '#': 1 }; // start off with 1 for 1 and special chars
  // 1 is 1 press - goes in the 1 bucket
  // loop through 3 letters, assigning them into the 1/2/3 bucket
  // if the next letter is "P" or "W", loop through next 4 letters
  // 2,3,4,5,6,8 are 4 presses (go in the 4 bucket)
  // 7 and 9 are 5 presses  - go in the 5 bucket (only ones to do so)
  // space goes in the 1 bucket, 0 goes in the 2 bucket
  let bucket = 1;
  for (let i = 0; i < alphabet.length; i++) {
    const divisor = alphabet[i] === '7' || alphabet[i] === '9' ? 5 : 4
    if (bucket <= divisor) {
      result[alphabet[i]] = bucket;
    } else {
      bucket = 1;
      result[alphabet[i]] = bucket;
    }
    bucket++;
  }
  return result;
}

function presses(phrase) {
  const tm = tapMap();
  let result = 0;
  for (const l of phrase) {
    result += tm[l.toUpperCase()];
  }

  return result;
}

presses('LOL'); // return 9
presses('HOW R U'); // return 13
presses('WHERE DO U WANT 2 MEET L8R'); // return 47

// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
function filterString(value) {
  return parseInt(value.match(/\d/g).join(''));
}

filterString('123');
filterString('a1b2c3');
filterString('aa1bb2cc3dd');
