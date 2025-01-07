// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
const multiplicationTable = size => {
  const result = [];

  for (let i = 1; i <= size; i++) {
    let temp = [];

    for (let j = i; j <= (i * size); j += i) {
      temp.push(j);
    }

    result.push(temp);
  }

  return result;
}

multiplicationTable(3); // return [[1,2,3], [2,4,6], [3,6,9]]
