// https://www.codewars.com/kata/556deca17c58da83c00002db
function tribonacci(signature, n) {
  if (n <= 2) {
    return signature.slice(0, n);
  }

  const result = [...signature];
  let a = signature[0], b = signature[1], c = signature[2];
  let d = signature[0] + signature[1] + signature[2];

  for (let i = 3; i < n; i++) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
    result.push(d);
  }

  return result;
}

tribonacci([1,1,1], 10);
tribonacci([0,0,1], 10);
tribonacci([0,1,1], 10);
tribonacci([1,1,1], 1);
tribonacci([1,1,1], 0);
