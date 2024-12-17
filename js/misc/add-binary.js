// https://www.codewars.com/kata/551f37452ff852b7bd000139

function addBinary(a, b) {
  // turn the sum of a and b into a string using a radix of 2, converting the sum into a binary number string
  return (a + b).toString(2);
}

addBinary(1, 2); // returns 11
