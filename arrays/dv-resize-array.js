// arr: Number[], newSize: Number
const resizeArray = (arr, newSize) => {
  // make a new empty array of the new size
  const temp = new Array(newSize);

  // for as many elements are in the original array...
  for (let i = 0; i < arr.length; i++) {
    // copy the elements in the original array into the temp array
    temp[i] = arr[i];
  }

  // return the temp array; it will be a copy of the original, with extra empty spaces at the end.
  // it's not a thing in JS but it is in other languages such as Java.
  return temp;
}

let yay = [35, 44, 43, 89, 69];

console.log('original: ', yay);
yay = resizeArray(yay, yay.length * 2);
console.log('resized: ', yay);

