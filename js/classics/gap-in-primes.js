// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
// basic function to find prime numbers!
const isPrime = num => {
  if (num < 2) return false;
  if (num === 2) return true; // specifically allow 2, as it is the only even prime number
  if (num % 2 === 0) return false; // automatically exclude any other even numbers

  // begin at 3, and increment by 2 to only check against odd numbers
  for (let i = 3; i <= Math.sqrt(num); i+= 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const gap = (g, m, n) => {
  let currentPrime = 0;

  for (let i = m; i <= n; i++) {
    // if the current number being checked (i) is prime...
    if (isPrime(i)) {
      // then check if the difference (gap) between i and the currentPrime is g
      if (i - currentPrime === g) {
        // if so, return them immediately
        return [currentPrime, i];
      }

      // if the difference is not g, then set i as the new currentPrime
      currentPrime = i;
    }
  }

  // return null if no match is found
  return null;
}

console.log(gap(1, 30000, 100000)); // return null
gap(2,100,110); // return [101, 103]
gap(4,100,110); // return [103, 107]
gap(6,100,110); // return null
gap(8,300,400); // return [359, 367]
gap(10,300,400); // return [337, 347]
