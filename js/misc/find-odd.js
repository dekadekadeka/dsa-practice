// https://www.codewars.com/kata/54da5a58ea159efa38000836
const findOdd = A => {
  const count = {};

  for (const num of A) {
    count[num] ? count[num]++ : count[num] = 1;
  }

  for (const c in count) {
    if (count[c] % 2 !== 0) {
      return Number(c);
    }
  }
}

findOdd([7], 7);
findOdd([0], 0);
findOdd([1,1,2], 2);
findOdd([0,1,0,1,0], 0);
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);
