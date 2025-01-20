// https://www.codewars.com/kata/5a4138acf28b82aa43000117
const adjacentElementsProduct = array => {
  let maxProd = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > maxProd) {
      maxProd = array[i] * array[i + 1];
    }
  }

  return maxProd;
}

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]); // return -14
adjacentElementsProduct([5, 8]); // return 40
adjacentElementsProduct([1, 2, 3]); // return 6
adjacentElementsProduct([1, 5, 10, 9]); // return 90
adjacentElementsProduct([3, 6, -2, -5, 7, 3]); // return 21
adjacentElementsProduct([1, 2, 3, 0]); // return 6
