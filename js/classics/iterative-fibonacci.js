// https://medium.com/@sasha.kub95/this-is-how-you-should-calculate-fibonacci-in-javascript-966fe6684daa
const fib = n => {
  // set the first 3 fib numbers, BigInt is optional
  let a = BigInt(0), b = BigInt(1), c = BigInt(1);
  // begin the for-loop at 2 (4th fib number)
  for (let i = 2; i <= n; i++) {
    // c is the next fib number
    c = a + b;
    // a now placeholds the previous fib number...
    a = b;
    // and b now placeholds the current fib number to have it ready to add to a and create c in the next iteration
    b = c;
  }

  // return the final C, which is the fib number at the nth position
  return c;
}
