// https://www.codewars.com/kata/5a03b3f6a1c9040084001765
function angle(n) {
  return Math.round(180 * (1 - (2 / n)) * n);
}

angle(3); // return 180
angle(4); // return 360
