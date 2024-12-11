// https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {  
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  const secondMin = Math.min(...numbers);
  
  return min + secondMin;
}

sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // returns 6
