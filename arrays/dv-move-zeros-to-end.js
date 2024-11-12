/*
  Given an array of integers, write a function to move all zeros to the end of it
  while maintaining the relative order of the non-zero elements.

  Example:
  input: [0, 1, 0, 4, 12]
  solution: [1, 4, 12, 0, 0]
*/

// arr: Number[], initial array
const moveZeros = (arr) => {
  // pointer for zero-value indices in the array - initially set to 0 (focus on zeros)
  let j = 0;

  // i is the normal pointer for each element in the array (focus on non-zeros)
  for (let i = 0; i < arr.length; i++) {
    // if the value at i IS NOT zero, and the value at j IS zero
    if (arr[i] !== 0 && arr[j] === 0) {
      // assign the current value at i to temp
      let temp = arr[i];
      // swap the values at i and j (they will be identical at this point)
      arr[i] = arr[j];
      // and finally, reassign temp to j, completing the swap
      arr[j] = temp;
    }

    // if the value at j is not zero...
    if (arr[j] !== 0) {
      // then increment j, as it is only supposed to point to zeros
      j++; 
    }
  }

  return arr;
}

console.log(moveZeros([0, 1, 0, 4, 12]));
