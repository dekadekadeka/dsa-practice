// Cracking The Coding Interview - Arrays problem 1.5
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// This can be adding, removing, or changing a character.
// str1: String, str2: String
const createHashMap = (str1, str2) => {
  const lettersMap = {};

  const bothStrings = str1 + str2;
  for (let i = 0; i < bothStrings.length; i++) {
    if (lettersMap[bothStrings.charAt(i)]) {
      lettersMap[bothStrings.charAt(i)] += 1;
    } else {
      lettersMap[bothStrings.charAt(i)] = 1;
    }
  }

  return lettersMap;
}

const countDifferences = lettersMap => {
  const counts = Object.values(lettersMap);

  // if any number goes past 2, that's a difference
  // no more than 2 of the characters may have a count of 1, or be an odd number
  let differenceCount = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === 1 || (counts[i] > 1 && counts[i] % 2 !== 0)) {
      differenceCount += 1;
    }

    if (differenceCount > 2) {
      return false;
    }
  }

  return true;
}

const oneAway = (str1, str2) => {
  // return true immediately if both strings are already the same
  if (str1 === str2) return true;
  // check the occurence of each letter in a hash map
  const lettersMap = createHashMap(str1, str2);
  // count the differences between the strings
  return countDifferences(lettersMap);
}

oneAway('boop', 'boop'); // true
oneAway('citlali', 'pinta'); // false
oneAway('pale', 'bale'); // true
oneAway('pale', 'bake'); // false
oneAway('pale', 'ale'); // true
oneAway('cat', 'cats'); // true
