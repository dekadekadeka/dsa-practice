// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
const maxSequence = function(arr){
  let result = 0;
  // first cursor - work on one number at a time
  for (let i = 0; i < arr.length; i++) {
    let tempResult = arr[i];
    // if the last number in the array is larger than the result, assign it instead
    if (tempResult > result) result = tempResult;
    // second cursor: add each subsequent number in the array
    for (let j = i + 1; j < arr.length; j++) {
      tempResult += arr[j];
      // if result is greater than previous result, replace main result with it
      if (tempResult > result) result = tempResult;
    }
  }

  return result;
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSequence([-11,-5,37]);
maxSequence([49,-38,-15]);
