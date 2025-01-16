// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
const gap = (g, m, n) => {
  // create an array with every number in the m - n range,
  // then filter it down to its prime numbers
  const primeRange = Array.from({ length: n - (m - 1) }, (_, i) => m + i).filter(a => {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) return false;
    }
  
    return true;
  });

  for (let i = 0; i <= primeRange.length - 1; i++) {
    if (primeRange[i + 1] - primeRange[i] === g) {
      return [primeRange[i], primeRange[i + 1]];
    }
  }

  return null;
}

gap(2,100,110); // return [101, 103]
gap(4,100,110); // return [103, 107]
gap(6,100,110); // return null
gap(8,300,400); // return [359, 367]
gap(10,300,400); // return [337, 347]
