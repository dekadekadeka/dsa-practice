// https://www.codewars.com/kata/59175441e76dc9f9bc00000f
const atomicNumber = num => {
  const result = [];
  let currentIndex = 0;
  // get num and distribute it among the array depending on the max number
  // the max number is 2n^2, with n being the index + 1
  while (num > 0) {
    let maxNum = 2 * Math.pow(currentIndex + 1, 2);
    let temp = 0;

    while (temp < maxNum && num > 0) {
      temp++;
      num--;
    }

    result.push(temp);
    currentIndex++;
  }

  return result;
}

atomicNumber(1); // return [1]
atomicNumber(10); // return [2, 8]
atomicNumber(11); // return [2, 8, 1]
atomicNumber(22); // return [2, 8, 12]
atomicNumber(50); // return [2, 8, 18, 22]
atomicNumber(61); // return [2, 8, 18, 32, 1]
