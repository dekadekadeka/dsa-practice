// https://www.codewars.com/kata/5aff237c578a14752d0035ae
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
  return Math.floor(Math.sqrt([...arguments].map(a => a * a).reduce((a, c) => a + c)) / 2);
}

predictAge(65,60,75,55,60,63,64,45); // return 86
