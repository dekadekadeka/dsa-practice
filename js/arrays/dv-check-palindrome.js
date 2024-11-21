// my personal implementation
const checkPalindrome = str => {
  const strArray = str.split('');

  let endPointer = strArray.length - 1;

  for (let i = 0; i < (strArray.length / 2); i++) {
    if (strArray[i] === strArray[endPointer]) {
      endPointer--;
    } else {
      return false;
    }
  }

  return true;
}

// given solution
const checkPalindromeSolution = str => {
  const strArray = str.split('');
  let startPointer = 0;
  let endPointer = strArray.length - 1;

  while (startPointer < endPointer) {
    if (strArray[startPointer] !== strArray[endPointer]) {
      return false;
    }
    startPointer++;
    endPointer--;
  }

  return true;
}

console.log(checkPalindrome('madam'));
console.log(checkPalindromeSolution('madam'));