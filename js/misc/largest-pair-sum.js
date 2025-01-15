// https://www.codewars.com/kata/556196a6091a7e7f58000018
const largestPairSum = numbers => {
  const lastTwo = numbers.sort((a, b) => a - b).slice(-2);
  return lastTwo[0] + lastTwo[1];
}

// return 187 (92 + 95)
largestPairSum([-19, -12, 92, 35, -27, 33, 37, 63, -65, -30, -54, 88, 59, -82, -40, -8, 95, -18, -11, 85, 31, -51, -12, 23, -4, -56, 18, -24, -97, -6, -95, -20]);
largestPairSum([10,14,2,23,19]); // return 42
largestPairSum([-100,-29,-24,-19,19]); // return 0
largestPairSum([1,2,3,4,6,-1,2]); // return 10
largestPairSum([-10, -8, -16, -18, -19]); // return -18
