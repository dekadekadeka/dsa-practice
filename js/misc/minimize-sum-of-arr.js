// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
const minSum = arr => {
  const result = [];
  // multiply the biggest and smallest numbers in the array first,
  // then the second biggest and second smallest... until length === 0
  while (arr.length > 0) {
    let max = arr.splice(arr.indexOf(Math.max(...arr)), 1);
    let min = arr.splice(arr.indexOf(Math.min(...arr)), 1);

    result.push(max * min);
  }

  // then add these together
  return result.reduce((a, c) => a + c);
}

minSum([5,4,2,3]); // return 22
minSum([12,6,10,26,3,24]); // return 342
minSum([9,2,8,7,5,4,0,6]); // return 74
