// Cracking The Coding Interview - Arrays problem 1.3
// Write a method to replace all spaces in a string with `%20`.
// You may assume that the string has sufficient space at the end to hold the addt'l chars,
// and that you are given the true final length of the string - 
// for example, an input of ("Mr John Smith     ", 13)
// should output "Mr%20John%20Smith".

// My personal implementation, no finalLength necessary for JS as it can be done in one line
// str: String
const urlify = (str) => {
  return str.trimEnd().replaceAll(' ', '%20');
}

urlify("Mr John Smith     ");
