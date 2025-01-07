// https://www.codewars.com/kata/5629db57620258aa9d000014
// get count of each input string
const letterCount = str => {
  const hash = {};

  for (const letter of str) {
    if (letter.match(/[a-z]/)) {
      hash[letter] ? hash[letter]++ : hash[letter] = 1;
    }
  }

  // remove any letters whose count is 1 or less
  return Object.fromEntries(
    Object.entries(hash).filter(a => a[1] > 1)
  );
}

// merge both hashes into a single one sorted by length and then alpha order
const hashMerge = (h1, h2) => {
  const hash = {};

  const allKeys = new Set([...Object.keys(h1), ...Object.keys(h2)]);

  allKeys.forEach(key => {
    // set which hash the greater value originally came from,
    // with 3 being for when the count is equal
    const originalHash = h1[key] > h2[key] ? 1 : h1[key] === h2[key] ? 3 : 2;
    hash[key] = { originalHash, count: Math.max(h1[key] || 0, h2[key] || 0) };
  })

  const boop = Object.fromEntries(
    Object.entries(hash).sort(([letterA, countA],[letterB, countB]) => {
      if (countA.originalHash < countB.originalHash) {
        return countA.originalHash - countB.originalHash;
      } else if (countA.count === countB.count) {
        return letterA.charCodeAt(0) - letterB.charCodeAt(0);
      } else {
        return countB.count - countA.count;
      }
    })
  );

  return boop;
}

// main function
const mix = (s1, s2) => {
  const s1hash = letterCount(s1);
  const s2hash = letterCount(s2);

  // merge both hashes into a single one, sorted by count in 1st hash, count in 2nd hash, equal count in both,
  // then letter length and then by alpha order
  // when a key exists in both hashes, then pick the one with the larger value
  const merged = hashMerge(s1hash, s2hash);
  console.log(merged);
}

// mix('Are they here', 'yes, they are here'); // return '2:eeeee/2:yy/=:hh/=:rr'
mix('looping is fun but dangerous', 'less dangerous than coding'); // return '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg'
