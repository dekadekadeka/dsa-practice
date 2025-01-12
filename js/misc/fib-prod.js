// https://www.codewars.com/kata/5541f58a944b85ce6d00006a
const fibProd = prod => {
  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 2; i <= prod; i++) {
    c = a + b;
    a = b;
    b = c;

    if (a * b === prod) {
      return [a, b, true];
    } else if (a * b > prod) {
      return [a, b, false];
    }
  }
}

console.log(fibProd(4895)); // return  [55, 89, true]
console.log(fibProd(5895)); // return [89, 144, false]
