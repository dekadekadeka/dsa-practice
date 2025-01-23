// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
const chooseBestSum = (t, k, ls) => {
  if (ls.length < k) return null;

  // make a cursor for the second element
  let cursor = 1;

  for (let i = 0; i <= ls.length; i++) {
    // current (ls[i]) + cursor(ls[cursor]) + cursor + 1
    // cursor + 1 can be the inner loop
    for (let j = cursor + 1; j <= ls.length - 1; j++) {
      // cursor + 1 is now ls[j]
      console.log([ls[i], ls[cursor], ls[j]], ls[i] + ls[cursor] + ls[j]);
    }

    cursor++;
  }
}

let ts = [50, 55, 57, 58, 60];
chooseBestSum(174, 3, ts); // return 173
ts = [50, 55, 56, 57, 58];
chooseBestSum(163, 3, ts); // return 163
ts = [50];
chooseBestSum(163, 3, ts); // return null
ts = [91, 74, 73, 85, 73, 81, 87];
chooseBestSum(230, 3, ts); // return 228
