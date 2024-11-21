// https://www.codewars.com/kata/62665d43e67fbaf7b37212d2/
function bell(n) {
  const result = [n];
  let count = n - 2;

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + count;
    count -= 2;
  }
  
  return result;
}

bell(7);
