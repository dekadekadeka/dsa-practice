// https://www.codewars.com/kata/550498447451fbbd7600041c
const comp = (array1, array2) => {
  if (array1 === null || array2 === null) return false;

  for (let i = 0; i < array1.length; i++) {
    // if the current number being checked on array1 squared is found in array2...
    if (array2.indexOf(Math.pow(array1[i], 2)) >= 0) {
      // then remove that number from array2
      array2.splice(array2.indexOf(Math.pow(array1[i], 2)), 1);
    }
  }

  // if every number is removed from array2, then array2 contains
  // the squares of the numbers in array1
  return array2.length === 0;
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

comp(a1, a2); // return true
