// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
function reverseWords(str) {
  // One line :)
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

reverseWords('The quick brown fox jumps over the lazy dog.');

/*
Time complexity: O(w * l), with w being how many words in the string and l being the number of letters per word.

The space complexity is also O(w * l), as the intermediate arrays created during the splits,
reversals, and joins will collectively hold all characters in the string.
*/
