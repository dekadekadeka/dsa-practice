// https://www.codewars.com/kata/59c633e7dcc4053512000073
const solve = s => {
  // first, remove the vowels from s and separate each consonant cluster into separate strings
  const clusters = s.match(/[^aeiou]+/g);
  // second, add up the values of each consonant cluster
  const sums = clusters.map(c => c.split('').reduce((acc, curr) => acc + (curr.charCodeAt(0) - 96), 0));
  // third, get the max value of the consonant clusters
  return Math.max(...sums);
}

solve("zodiac"); // return 26
solve("chruschtschov"); // return 80
solve("khrushchev"); // return 38
solve("strength"); // return 57
solve("catchphrase"); // return 73
solve("twelfthstreet"); // return 103
solve("mischtschenkoana"); // return 80
solve("az"); // return 26
