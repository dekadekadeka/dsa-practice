// arr: Number[]
const findMissingNumber = arr => {
  // n is the number of elements in the array plus one, to account for the missing one
  const n = arr.length + 1;
  // formula for finding sum of numbers 1 + 2 + 3 + 4 + ... n (all numbers from 1 to n added together)
  let sum = n * (n + 1)/2;

  // for each iteration, subtract that element in the array from sum
  arr.forEach(num => sum = sum - num);

  // return the final sum, which is also the missing number from the array
  return sum;
}

// 8 is missing in an array ranging 1-9, write a function to find and return the missing number.
console.log(findMissingNumber([4, 3, 2, 9, 5, 7, 6, 1]));
