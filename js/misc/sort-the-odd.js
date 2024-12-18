// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortTheOdd = arr => {
  // create a separate array with the odd numbers sorted
  const odd = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  // map through the original array, and replace any odd number with the first number from odd
  // shift() does the same as pop(), but from the beginning of the array
  return arr.map(n => n % 2 !== 0 ? odd.shift() : n);

  // original answer
    // // pointer to index on odd array
    // let pointer = 0;
  
    // for (let i = 0; i < result.length; i++) {
    //   // if result at i is null...
    //   if (result[i] === null) {
    //     // then replace it with the next odd number on the odd array
    //     result[i] = odd[pointer];
    //     pointer++;
    //   }
    // }
  
    // return result;
}

sortTheOdd([1, 11, 2, 8, 3, 4, 5]);
