// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionsMatter(a, b, c) {
  // the spread operator/array isn't actually necessary
  return Math.max(...[a + b + c, a * b * c, (a * b) + c, a + (b * c), (a + b) * c, a * (b + c)]);
}

expressionsMatter(2, 1, 2); // return 6
expressionsMatter(2, 1, 1);
expressionsMatter(1, 1, 1);
expressionsMatter(5, 1, 3);
expressionsMatter(3, 5, 7);
expressionsMatter(5, 6, 1);
expressionsMatter(2, 10, 3);
expressionsMatter(1, 8, 3);
expressionsMatter(9, 7, 2);
