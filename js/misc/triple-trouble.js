// https://www.codewars.com/kata/55d5434f269c0c3f1b000058
const checkConsecutive = (num, count) => {
  const stringNum = num.toString();
  const result = [];

  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === stringNum[stringNum.lastIndexOf(stringNum[i + (count - 1)])]) {
      result.push(stringNum[i]);
    }
  }

  return result;
}

const tripleDouble = (num1, num2) => {
  const triple = checkConsecutive(num1, 3);
  const double = checkConsecutive(num2, 2);

  for (const num of double) {
    if (triple.includes(num)) {
      return 1;
    };
  }

  return 0;
}

tripleDouble(123123123, 123123); // return 0
tripleDouble(111, 88); // return 0
tripleDouble(111000, 100); // return 1
tripleDouble(111888, 1188); // return 1
tripleDouble(451999277, 41177722899); // return 1
tripleDouble(1222345, 12345); // return 0
tripleDouble(12345, 12345); // return 0
tripleDouble(666789, 12345667); // return 1
tripleDouble(10560002, 100); // return 1
tripleDouble(1112, 122); // return 0
