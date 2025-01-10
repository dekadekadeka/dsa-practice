// https://www.codewars.com/kata/54d81488b981293527000c8f
// my solution
const sumPairsOriginal = (ints, s) => {
  let first = 0;
  let second = 0;
  let currentSecondIndex = 0;

  for (let i = 0; i < ints.length; i++) {
    for (let j = 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        // prevent it from adding itself (i !== j)
        // make sure j is an index after i (i < j)
        if (i !== j && i < j && (currentSecondIndex === 0 || j <= currentSecondIndex)) {
          first = ints[i];
          second = ints[j];
          currentSecondIndex = j;
        }
      }
    }
  }

  // if currentSecondIndex is still 0, meaning there were no matches, return undefined
  if (currentSecondIndex === 0) return undefined;

  return [first, second];
}

// optimized solution
const sumPairs = (ints, s) => {
  // create a new set, which only allows each element a single time
  const seen = new Set();
  
  for (let num of ints) {
    // the match is the sum (s) minus the current num being checked (num + match = s)
    const match = s - num;
    
    // if you find the match in the seen set...
    if (seen.has(match)) {
      // that means you found the correct pair
      return [match, num];
    }
    
    // if seen does not have the match for that num yet, add the num
    seen.add(num);
  }
  
  // if there's no match at all, return undefined
  return undefined;
};

sumPairs([1, 4, 8, 7, 3, 15], 8); // return [1, 7]
sumPairs([1, -2, 3, 0, -6, 1], -6); // return [0, -6]
sumPairs([1, 2, 3, 4, 1, 0], 2); // return [1, 1]
sumPairs([10, 5, 2, 3, 7, 5], 10); // return [3, 7]
