/*
https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true
An hourglass is a portion of the array matrix that looks like this:

  a b c
    d
  e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values.
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.
The array will always be 6 x 6.

Rows 0, 1, 2, 3 have all numbers checked and are the tops of the hourglass.
Rows 1-4 act as middles, and only the middle 4 numbers get checked (1, 2, 3, 4)
Rows 2, 3, 4, 5 have all numbers checked and are the bottoms of the hourglass.

Each check will be a top row, a middle row, and a bottom row.
Three consecutive numbers in top and bottom rows
and one number (beginning at index 1) from a middle row.
*/

// arr: Number[][]
const hourglassSum = arr => {
  // if you begin at 0 this will not work if the sum is a negative number,
  // so we must begin at the smallest possible number
  let sum = Number.MIN_SAFE_INTEGER;

  // first loop through the main array
  for (let i = 0; i < arr.length - 2; i++) {
    // now loop through each row
    for (let j = 0; j < arr[i].length - 2; j++) {
      let temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      // console.log('top row:', arr[i][j], arr[i][j + 1], arr[i][j + 2]);
      // console.log('middle row:', arr[i + 1][j + 1]);
      // console.log('bottom row:', arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]);
      
      // if the current sum is smaller than temp
      if (sum < temp) {
        // then replace it with temp
        sum = temp;
      }
    }
  }

  return sum;
}

const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const negMatrix = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

// test with either matrix or negMatrix, or create your own 6 x 6 2D array above
console.log(hourglassSum(matrix));
