// https://www.codewars.com/kata/5626b561280a42ecc50000d1
function sumDigPow(a, b) {
  const result = [];

  // loop through each number between a and b
  for (let i = a; i <= b; i++) {
    // convert the current number being checked into an array of its digits
    let digitSplit = String(i).split('').map(Number);
    // reset the temp you will compare against on each number
    let temp = 0;
    // loop through each digit in the number
    for (let j = 0; j < digitSplit.length; j++) {
      // you need the sum of each digit in the number raised to its position in the number's power.
      // example: 89 = 8^1 + 9^2 = 8 + 81
      // (beginning at 1, so its index + 1)
      // going digit by digit, left to right, add them to temp
      temp += Math.pow(digitSplit[j], j + 1);

      // if temp is equal to the number being checked, push it to the results array
      if (temp === i) {
        result.push(temp);
      }
    }
  }

  return result;
}

sumDigPow(1, 10); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100); // returns [89]
sumDigPow(90, 100); // returns []
