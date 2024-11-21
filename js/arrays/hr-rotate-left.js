// https://www.hackerrank.com/challenges/array-left-rotation?isFullScreen=true
// d: Number, arr: Number[]
function rotateLeft(d, arr) {
  const result = [];
  // d is the index where you start moving things to results array
  for (let i = d; i < arr.length; i++) {
    result.push(arr[i]);
  }

  // when you get to the end, start over from 0 and keep moving to results array until you hit the index right before d
  for (let j = 0; j < d; j++) {
    result.push(arr[j]);
  }

  // now you have every number in the results array :)
  return result;
}

rotateLeft(4, [1, 2, 3, 4, 5])
// [2, 3, 4, 5, 1] first rotation
// [3, 4, 5, 1, 2] second rotation
// [4, 5, 1, 2, 3] third rotation
// [5, 1, 2, 3, 4] fourth rotation - we wanted to rotate the array 4 times