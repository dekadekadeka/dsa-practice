// Cracking The Coding Interview - Arrays problem 1.1
// Implement an algorithm to determine if a string has all unique characters.
// What if you can't use additional data structures?
// str: String
const allUniqueChars = str => {
  // set results empty string
  let result = '';

  for (let i = 0; i < str.length; i++) {
    // if the current character being checked is already in result
    if (result.toLowerCase().includes((str[i]).toLowerCase())) {
      // just return false already
      return false;
    }

    // if the current character being checked is not already in result, then add it
    result += str[i];
  }

  return true;
}

const bintang = 'Bintang'; // will return false because there are 2 ns
const allUnique = 'qwertyuiopasdfghjklzxcvbnm'; // will return true because all characters are unique

allUniqueChars(bintang);

// The intention of the question was to check for uniqueness in the ASCII/Unicode sense,
// so the same char in lowercase and uppercase counts as different.
// I made a few assumptions, in the real world always ask and don't assume.

// Implementation as shown in the book
const allUniqueCharsSolution = str => {
  // If we are using ASCII, the string cannot be longer than 128 chars.
  // In JS, you do not have to declare a boolean array of a certain size like you do in Java, as shown in the book.
  if (str.length > 128) return false;
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const val = str.charAt(i);
    if (result[val]) {
      return false;
    }

    result[val] = true;
  }

  return true;
}

allUniqueCharsSolution('Bintang');
