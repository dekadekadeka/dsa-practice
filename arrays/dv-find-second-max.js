// arr: Number[], initial array
const findSecondMax = arr => {
  // hold max here
  let max = 0;
  // hold second max here
  let secondMax = 0;
  for (let i = 0; i < arr.length; i++) {
    // if the current number being checked is greater than max...
    if (arr[i] > max) {
      // the previous max is now secondMax
      secondMax = max;
      // and the current number being checked is the new max
      max = arr[i];
      // else if the current number being checked is greater than secondMax AND not already equal to max (to prevent duplicates)
    } else if (arr[i] > secondMax && arr[i] !== max) {
      // then assign the current number being checked to be the new secondMax
      secondMax = arr[i];
    }
  }

  // finally return secondMax
  return secondMax;
}

const yay = [35, 15, 6, 7, 35, 34]
console.log(findSecondMax(yay));
