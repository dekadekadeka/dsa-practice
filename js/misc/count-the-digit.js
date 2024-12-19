// https://www.codewars.com/kata/566fc12495810954b1000030
function nbDig(n, d) {
  let count = 0;
  const digit = new RegExp(d, 'g');

  for (let i = 0; i <= n; i++) {
    // if the square of the current number being checked includes the digit d...
    // (we must cast it to string to be able to check individual digits)
    if ([...String(i * i).matchAll(digit)].length >= 1) {
      // then increase the count by however many times that digit includes d
      count += [...String(i * i).matchAll(digit)].length;
    }
  }

  return count;
}

nbDig(25, 1); // return 4
nbDig(5750, 0); // return 4700
