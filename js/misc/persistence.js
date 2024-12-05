// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function persistence(num) {
  // keep track of times persistenceInner() runs
  let counter = 0;

  const persistenceInner = num => {
    // split num into an array of each digit
    const splitNum = String(num).split('').map(Number);
    // keep track of result
    let result = 1;

    for (let i = 0; i < splitNum.length; i++){
      // multiply each digit in the number and assign that to result
      result *= splitNum[i];
    }
  
    // if the number is only one digit long...
    if (splitNum.length > 1) {
      // increment the count
      counter++;
      // and run the inner function again with the current result
      return persistenceInner(result);
    } else {
      // if not, then return the counter
      return counter;
    }
  }

  // on the first of persistence(), run persistenceInner()
  return persistenceInner(num);
}

persistence(39);
persistence(4);
persistence(25);
persistence(999);
