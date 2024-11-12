/*
https://www.hackerrank.com/challenges/dynamic-array/problem?isFullScreen=true
BITWISE XOR (^)
Returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding
bits of *either*, but *not both*, operands are 1.

const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// Expected output: 6

Example: out of a list of countries, if both you and your friend have visited, both countries get a 1, which
means you get a value of 0 for that country. If neither of you has visited that country, both get a 0
and the value is also 0. If only one of you has visited that country, but not the other,
the country only gets a 1 in that person's row and not the other, and the value is 1.

    | Singapore | Honduras | Grenada | Malaysia | Hungary | South Korea | Australia
D         1           0         1         1          0           1            0
J         1           1         0         1          1           0            0
Value:    0           1         1         0          1           1            0
*/

const dynamicArray = (n, queries) => {
  // create an array with n empty arrays inside.
  const arr = Array.from({ length: n }, () => new Array());
  // set lastAnswer to 0 per the instructions
  let lastAnswer = 0;
  // set an answerArray to return at the end.
  const answerArray = [];
  for (let i = 0; i < queries.length; i++){
    // queries[i][1] is compared to lastAnswer, which gives you idx, the index of the inner array of arr you should push to
    let idx = ((queries[i][1] ^ lastAnswer) % n);
    // queries[i][0] is the query type
    if (queries[i][0] === 1) {
      // push queries[i][2] to arr[idx].
      arr[idx].push(queries[i][2])
    } else if (queries[i][0] === 2) {
      // set lastAnswer to the number found in the following position (given from instructions)
      lastAnswer = arr[idx][queries[i][2] % arr[idx].length]
      answerArray.push(lastAnswer);
    }
  }

  return answerArray;
}

const yay = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
];

dynamicArray(2, yay)
