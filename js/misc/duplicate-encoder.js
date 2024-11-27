// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
  // make a letter count hash map with .reduce() :)
  const letterCount = word.toLowerCase().split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    // return acc  - so that the second step does not have acc (the object itself) as undefined
    return acc;
    // set the accumulator/initial value (acc) as an empty object
    }, {});

    return word.toLowerCase().split('').map(letter => {
      // replace each letter depending on its count in the hash map
      letter = letterCount[letter] > 1 ? ')' : '(';
      // make sure to return the new replaced letter, otherwise it will be undefined
      return letter;
    }).join(''); // finally, join to make the array a string again
}

duplicateEncode('din');
