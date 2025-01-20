// https://www.codewars.com/collections/playing-with-lists-slash-arrays
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

// https://www.codewars.com/kata/5a63948acadebff56f000018
const maxProduct = (numbers, size) => {
  return numbers.sort((a, b) => a - b).splice(-size).reduce((a, c) => a * c);
}

maxProduct([4, 3, 5], 2); // return 20
maxProduct([10, 8, 7, 9], 3); // return 720
maxProduct([8, 6, 4, 6], 3); // return 288
maxProduct([10, 2, 3, 8, 1, 10, 4], 5); // return 9600
maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5); // return 247895375

// https://www.codewars.com/kata/5a512f6a80eba857280000fc
const nthSmallest = (arr, pos) => {
  return arr.sort((a, b) => a - b)[pos - 1];
}

nthSmallest([3,1,2], 2); // return 2
nthSmallest([15,20,7,10,4,3], 3); // return 7
nthSmallest([-5,-1,-6,-18], 4); // return -1

// https://www.codewars.com/kata/5a4138acf28b82aa43000117
const adjacentElementsProduct = array => {
  let maxProd = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > maxProd) {
      maxProd = array[i] * array[i + 1];
    }
  }

  return maxProd;
}

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]); // return -14
adjacentElementsProduct([5, 8]); // return 40
adjacentElementsProduct([1, 2, 3]); // return 6
adjacentElementsProduct([1, 5, 10, 9]); // return 90
adjacentElementsProduct([3, 6, -2, -5, 7, 3]); // return 21
adjacentElementsProduct([1, 2, 3, 0]); // return 6

