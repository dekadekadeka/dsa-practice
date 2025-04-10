// Cracking The Coding Interview - Arrays problem 1.4
// Given a string, write a function to check if it is a permutation of a palindrome
// (a rearrangement of the same letters that reads the same forwards and backwards)
// Ignore casing and non-letter chars.
// The palindromes do not have to be actual dictionary words.

// const getCharMap: (onlyLettersStr: String) => {}
const getCharMap = onlyLettersStr => {
  const charCount = {};

  // first, count each of the letters in the string
  for (let i = 0; i < onlyLettersStr.length; i++) {

    if (charCount[onlyLettersStr.charAt(i)]) {
      charCount[onlyLettersStr.charAt(i)] += 1;
    } else {
      charCount[onlyLettersStr.charAt(i)] = 1;
    }

  }

  return charCount;
}

// if each count is an even number (meaning there are matching pairs),
// OR if one count is 1, and all the rest are even numbers (single letter in the middle with all the rest having pairs)
// then the word is a palindrome
// const checkPalindrome: (charCount: {}) => boolean
const checkPalindrome = charCount => {
  // get the counts (values) from the charCount object in an array
  const valuesArr = Object.values(charCount)
  let singleCount = 0;

  for (let v = 0; v < valuesArr.length; v++) {

    // if a letter's count is exactly one, add it to the singleCount
    if (valuesArr[v] === 1) {
      singleCount += 1;
    }

    // if a letter's count is greater than one AND it's not an even number
    // OR if the singleCount is already greater than 1
    if ((valuesArr[v] > 1 && valuesArr[v] % 2 !== 0) || singleCount > 1) {
      return false;
    }

  }

  return true;
}

// const palindromePermutation: (str: String) => boolean
const palindromePermutation = str => {
  // remove non-letter chars first
  const onlyLettersStr = str.replace(/[^a-z]+/gi, '');
  // make a hash map of how many times a letter appears in the string
  const charCount = getCharMap(onlyLettersStr);

  // then, check if the result is a palindrome from the hash map
  return checkPalindrome(charCount);
}

console.log(palindromePermutation('tact coa99')); // true
console.log(palindromePermutation('bintang')); // false
console.log(palindromePermutation('cit lalixil alvtic')); // false
