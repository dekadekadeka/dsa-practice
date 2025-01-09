// https://www.codewars.com/kata/54d81488b981293527000c8f
const sumPairs = (ints, s) => {
  let first = 0;
  let second = 0;
  let currentSecondIndex = 0;

  for (let i = 0; i < ints.length; i++) {
    for (let j = 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        // prevent it from adding itself
        if (i !== j && currentSecondIndex < j) {
          // check if the current second index is greater
          first = ints[i];
          second = ints[j];
          currentSecondIndex = j;
        }
      }
    }
  }

  return [first, second];
}

sumPairs([1, 4, 8, 7, 3, 15], 8); // return [1, 7]
sumPairs([1, -2, 3, 0, -6, 1], -6); // return [0, -6]
