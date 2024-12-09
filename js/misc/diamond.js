// https://www.codewars.com/kata/5503013e34137eeeaa001648
const diamond = n => {
  // return null if n is even or a negative number
  if (n % 2 === 0 || n < 0) return null;
  let result = '';

  // this loop draws the top half of the diamond, including the widest (middle) line
  for (let i = 1; i <= n; i += 2) {
    // pad each line with ((n - i) / 2) spaces (half of the difference between the desired length and i)
    // for example, if n is 3: 3 - 1 = 2, 2 / 2 = 1, meaning the first line will be padded by 1 space
    result += ' '.repeat((n - i) / 2) + "*".repeat(i) + "\\n";
  }

  // now do the bottom of the diamond, starting from one row after the middle
  for (let j = n - 2; j >= 1; j -= 2) {
    result += ' '.repeat((n - j) / 2) + "*".repeat(j) + "\\n";
  }

  return result;
}

diamond(1);
diamond(3);
diamond(5);
