// Cracking The Coding Interview - Arrays problem 1.6
// Implement a method to perform basic string compression using the counts of repeated chars.
// Ex: The string 'aabcccccaaa' should become 'a2b1c5a3'.
// If the "compressed" string is longer than the original string, return the original string.
// str: String
const stringCompression = str => {
  let result = '';

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i + 1)) {
      result += str.charAt(i);
      result += count;
      count = 0;
    }
    count++;
  }

  return result.length > str.length ? str : result;
}

stringCompression('aabcccccaaa'); // return 'a2b1c5a3'
stringCompression('bintang'); // return 'bintang', as 'result' is 'b1i1n1t1a1n1g1'
stringCompression('CCcciiitllaaali'); // return 'CCcciiitllaaali', as 'result' is 'C2c2i3t1l2a3l1i1'
