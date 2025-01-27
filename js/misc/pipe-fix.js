// https://www.codewars.com/kata/56b29582461215098d00000f
const pipeFix = numbers => {
  const result = [];

  for (let i = 0; i <= numbers[numbers.length - 1]; i++) {
    result.push(numbers[i] + i);
  }

  return result;
}

pipeFix([6,9])
pipeFix([1,2,3,12]); // return [1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([-1,4])// return [-1,0,1,2,3,4]