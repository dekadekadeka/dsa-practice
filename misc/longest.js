// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

// Return a new string that consists of each letter found in both str1 and str2,
// sorted alphabetically ascending.

function longest(s1, s2) {
  const whole = s1 + s2;
  const result = {};

  for (let i = 0; i < whole.length; i++) {
    result[whole[i]] ? result[whole[i]] += 1 : result[whole[i]] = 1;
  }

  return Object.keys(result).sort().join('');
}

// you can also use a Set to make a new array with each letter only appearing once,
// as Set automatically rejects duplicate items
function longestWithSet(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}

// longest('aretheyhere', 'yestheyarehere') // returns 'aehrsty'
longestWithSet('aretheyhere', 'yestheyarehere') // returns 'aehrsty'
