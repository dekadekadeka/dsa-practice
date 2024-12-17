// https://www.codewars.com/kata/542c0f198e077084c0000c2e
function getDivisorsCnt(n){
  let result = 0;

  // use the square root of n to handle very large numbers
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // For every divisor i of n, there's a corresponding divisor n / i...
    if (n % i === 0) {
      // so you count it twice...
      result += 2;
      // unless i is the same as the sqrt of n. In that case, decrement by one so it
      // only gets counted once
      if (i === Math.sqrt(n)) {
        result--;
      }
    }
  }

  return result;
}

getDivisorsCnt(4); // return 3 as we have 3 divisors - 1, 2 and 4
getDivisorsCnt(25); // return 3 as we have 3 divisors - 1, 5, and 25
getDivisorsCnt(6469693230); // huge number! returns 1024