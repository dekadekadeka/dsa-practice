// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
const gap = (g, m, n) => {
  let currentPrime = 0;
  let count = 0;

  for (let i = m; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count === 2) {
      if (i - currentPrime === g) {
        return [currentPrime, i];
      }

      currentPrime = i;
    }

    count = 0;
  }

  return null;
}

gap(1, 30000, 100000); // timing out
gap(2,100,110); // return [101, 103]
gap(4,100,110); // return [103, 107]
gap(6,100,110); // return null
gap(8,300,400); // return [359, 367]
gap(10,300,400); // return [337, 347]
