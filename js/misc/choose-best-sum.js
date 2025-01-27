// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
const calculateTrip = (j, ls, k) => {
  const result = [];

  for (let m = j; m < j + k; m++) {
    result.push(ls[m]);
  }

  return result;
}

const chooseBestSum = (t, k, ls) => {
  console.log(t, k, ls)
  if (ls.length < k) return null;

  let maxSum = 0;

  for (let i = 0; i <= ls.length - k; i++) {
    // make a cursor for the second element
    let cursor = i + 1;

    for (let j = cursor + 1; j <= ls.length - (k - 2); j++) {
      let trip = calculateTrip(j, ls, k - 2);
      let sum = [ls[i], ls[cursor], ...trip].reduce((a, c) => a + c);

      if (maxSum < sum && sum <= t) {
        maxSum = sum;
      }

      if (k <= 2 || j === ls.length - 1) {
        cursor++;
        j = cursor;
      }
    }
  }

  return maxSum;
}

let ts = [91, 74, 73, 85, 73, 81, 87];
chooseBestSum(331, 4, ts); // return 178
// let ts = [91, 74, 73, 85, 73, 81, 87];
// chooseBestSum(331, 2, ts); // return 178
// ts = [50, 55, 57, 58, 60];
// chooseBestSum(174, 3, ts); // return 173
// ts = [50, 55, 56, 57, 58];
// chooseBestSum(163, 3, ts); // return 163
// ts = [50];
// chooseBestSum(163, 3, ts); // return null
// ts = [91, 74, 73, 85, 73, 81, 87];
// chooseBestSum(230, 3, ts); // return 228
