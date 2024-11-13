// Cracking The Coding Interview - Arrays problem 1.3
// Write a method to replace all spaces in a string with `%20`.
// You may assume that the string has sufficient space at the end to hold the addt'l chars (not applicable to JS),
// and that you are given the true final length of the string - 
// for example, an input of ('Mr John Smith     ', 13)
// should output "Mr%20John%20Smith".

// My personal implementation, no finalLength necessary for JS as it can be done in one line
// str: String
const urlify = str => {
  // single-line solution using existing methods
  return str.trimEnd().replaceAll(' ', '%20');
}

urlify('Mr John Smith     ');

// also my personal implementation, but with a for-loop
// str: String, finalLength: Number
const urlifyForLoop = (str, finalLength) => {
  let result = '';

  // set the end to finalLength to cut off trailing whitespace if present
  for (let i = 0; i < finalLength; i++) {
    // if the charAt is a space, then add '%20' to the results string; if not, add the actual character
    // I could have also done if/else but the ternary looked cooler.
    result += str.charAt(i) === ' ' ? '%20' : str.charAt(i);
  }

  return result;
}

urlifyForLoop('Mr John Smith     ', 13);
