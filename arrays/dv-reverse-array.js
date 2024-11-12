// arr: Number[]; begin: Number, the index where you want to begin swapping; end: Number, the index where you want to end swapping
const reverseArray = (arr, begin, end) => {
  while (begin < end) {
    // set a temp var and assign the value at the begin index to it
    let temp = arr[begin];
    // assign end value to beginning value - at this point, they will both be identical
    arr[begin] = arr[end]
    // now assign temp value to the end value, completing the swap
    arr[end] = temp;
    // increment begin by one
    begin++;
    // decrement end by one
    end--;
  }

  return arr;
}

const yay = [18, 35, 44, 69, 420];
console.log('original:', yay);

console.log('reversed:', reverseArray(yay, 0, yay.length - 1));
// Runtime: O(n)
