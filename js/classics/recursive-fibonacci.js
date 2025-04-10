// find the fibonacci number at the nth step [1, 1, 2, 3, 5, 8, 13...]
const fib = n => {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

// Due to being recursive, it's not as efficient as iterative fib
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(10));
console.log(fib(20));
