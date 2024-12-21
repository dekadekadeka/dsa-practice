// https://www.codewars.com/kata/5663f5305102699bad000056
const maxLengthDiff = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1;
  // convert each string in the arrays into its length, and find the min and max count
  const a1count = a1.map(s => s.length);
  const a2count = a2.map(s => s.length);

  return Math.max(
    Math.max(Math.max(...a1count) - Math.min(...a2count)),
    Math.max(Math.max(...a2count) - Math.min(...a1count))
  );
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

maxLengthDiff([], []) // returns -1 if one or both arrays are empty
// maxLengthDiff(s1, s2) // returns 13
