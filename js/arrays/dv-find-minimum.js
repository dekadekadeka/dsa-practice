// arr: Number[]
const findMinimum = (arr) => {
  // safety check
  if (arr === undefined || arr === null || arr.length === 0) {
    return 'invalid input';
  }

  // assign the first number in the array to min as a placeholder/starting point
  let min = arr[0];
  // since you already have the value at index 0, begin checking at index 1
  // and continue for the length of the array
  for (let i = 1; i < arr.length; i++) {
    // begin checking if each remaining element in the array is less than the first (min)
    if (arr[i] < min) {
      // and if so, then assign that element to be the new min
      min = arr[i];
    }
  }

  // return the true min
  return min;
}

const yay = [5, 9, 3, 15, 2];
console.log(findMinimum(yay));
