// https://www.codewars.com/kata/54d512e62a5e54c96200019e
const isPrime = n => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i+=2) {
    if (n % i === 0) return false;
  }

  return true;
}

const primeFactors = n => {
  const count = {};
  let currentPrime = 2;
  // while n > 1
  // divide n by 2 until it's a float
  // record how many times you divide by 2
  // then divide by 3 until it's a float
  // // record how many times you divide by 3
  // then divide by 7 while recording how many times you divide by 7... etc
  while (n > 1) {
    let isInt = true;
    let temp = n / currentPrime;

    if (!Number.isInteger(temp)) {
      isInt = false;
    } else {
      n = n / currentPrime;
    }

    while (isInt) {
      count[currentPrime] ? count[currentPrime]++ : count[currentPrime] = 1;
      // check if the next division is a float
      let temp = n / currentPrime;
      // stop just before the num is a float!
      if (!Number.isInteger(temp)) {
        // if it is, then exit the while loop
        isInt = false;
      // if not, then keep dividing by the currentPrime
      } else {
        n = n / currentPrime;
      }
    }

    // finally, find the next prime number and go through the loop again
    for (let i = currentPrime + 1; i <= n; i++) {
      if (isPrime(i)) {
        currentPrime = i;
        break;
      }
    }
  }

  let result = '';

  for (const num in count) {
    result += `(${num}${count[num] > 1 ? `**${count[num]}` : ''})`
  }

  return result;
}

primeFactors(36); // return '(2**2)(3**2)'
primeFactors(86240); // return '(2**5)(5)(7**2)(11)'
primeFactors(7775460); // return '(2**2)(3**3)(5)(7)(11**2)(17)'
