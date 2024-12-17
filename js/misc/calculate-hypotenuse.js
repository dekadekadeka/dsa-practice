// https://www.codewars.com/kata/525a3d6b85a9a47fcf00055a
const calculateHypotenuse = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b) || typeof(a) !== 'number' || typeof(b) !== 'number' || (a < 1) || (b < 1)) {
    throw new Error('Invalid input');
  }

  // get the hypotenuse rounded to 3 decimal points
  return Math.round(Math.hypot(a, b) * 1000) / 1000;
}

calculateHypotenuse(1, 1); // return 1.414
calculateHypotenuse(3, 4); // return 5
calculateHypotenuse(9, 9); // return 12.728
calculateHypotenuse(3, 'two'); // invalid input, throw error
calculateHypotenuse(NaN, 3); // invalid input, throw error
calculateHypotenuse(3, NaN); // invalid input, throw error
