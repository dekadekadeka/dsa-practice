// https://www.codewars.com/kata/56a4872cbb65f3a610000026
function maxRot(n) {
  // add the first number, n, to the results array
  const resultsArr = [n];
  // now turn n into a string and split it into an array of each digit
  let nArr = String(n).split('');

  for (let i = 0; i < nArr.length - 1; i++) {
    // get the digit at index i and remove it from the number array
    let temp = nArr.splice(i, 1);
    // add the digit at index i back to the end
    nArr = [...nArr, ...temp];
    // push the joined number array into the results array
    resultsArr.push(nArr.join(''));
  }

  // return the highest number in resultsArr, it works with strings too!
  return Math.max(...resultsArr);
}

maxRot(56789); // return 68957