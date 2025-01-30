// https://www.codewars.com/kata/5552101f47fc5178b1000050
const digPow = (n, p) => {
  // split n into an array of its own digits
  const nArray = Array.from(n.toString(), num => parseInt(num));
  let sum = 0;
  let exp = p;

  for (let i = 0; i < nArray.length; i++) {
    sum += nArray[i] ** exp;

    if (sum % n === 0) {
      return sum / n;
    }

    exp++;
  }

  return -1;
}

digPow(89, 1); // return 1
digPow(92, 1); // return -1, meaning there was no match
digPow(46288, 3); // return 51
