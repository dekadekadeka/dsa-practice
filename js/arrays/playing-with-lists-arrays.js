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

// https://www.codewars.com/kata/5a651865fd56cb55760000e0
const arrayLeaders = numbers => {
  const result = [];

  if (numbers[numbers.length - 1] > 0) {
    result.push(numbers[numbers.length - 1]);
  }

  numbers.reduceRight((a, c) => {
    if (a < c) {
      result.push(c);
    }
    return a + c;
  });

  return result.reverse();
}

arrayLeaders([5, 2, -1]); // return [5, 2]
arrayLeaders([1,2,3,4,0]); // return [4]
arrayLeaders([16,17,4,3,5,2]); // return [17,5,2]
arrayLeaders([-1,-29,-26,-2]); // return [-1]
arrayLeaders([0,-1,-29,3,2]); // return  [0,-1,3,2]

// https://www.codewars.com/kata/5a7893ef0025e9eb50000013
const maxGap = numbers => {
  let maxDiff = 0;
  numbers.sort((a, b) => b - a);

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] - numbers[i + 1] > maxDiff) {
      maxDiff = numbers[i] - numbers[i + 1];
    }
  }

  return maxDiff;
}

maxGap([13,10,2,9,5]); // return 4
maxGap([13,3,5]); // return 8
maxGap([24,299,131,14,26,25]); // return 168
maxGap([-3,-27,-4,-2]); // return 23
maxGap([-7,-42,-809,-14,-12]); // return 767

// https://www.codewars.com/kata/5a905c2157c562994900009d
const productArray = numbers => {
  return numbers.map((_, i, arr) => {
    // arr.toSpliced(i, 1) does not work on codewars, so I must do it the old-fashioned way
    const temp = [...arr.slice(0, i), ...arr.slice(i + 1)];
    return temp.reduce((a, c) => {
      return a * c;
    });
  });
}

productArray([12,20]); // return [20,12]
productArray([3,27,4,2]); // return [216,24,162,324]
productArray([13,10,5,2,9]); // return [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2]); // return [2040,1920,8160,10880,6528,16320]

// https://www.codewars.com/kata/5a91a7c5fd8c061367000002
const minimumSteps = (numbers, value) => {
  let steps = 0;

  numbers.sort((a, b) => a - b).reduce((acc, curr) => {
    while (acc < value) {
      steps++;
      return acc + curr;
    }
  });

  return steps;
}

minimumSteps([4, 6, 3], 7); // return 1
minimumSteps([8, 9, 10, 4, 2], 23); // return 3
minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464); // return 8
minimumSteps([4, 6, 3], 2); // return 0
