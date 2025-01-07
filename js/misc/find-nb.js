// https://www.codewars.com/kata/5592e3bd57b64d00f3000047
const findNb = m => {
  // m is the total sum of of the volume of ALL cubes
  // subtract 1^3, 2^3, etc. from m until you reach 0
  // the times this happens is the result
  let counter = 0;
    while (m > 0) {
      counter++;
      m = m - (Math.pow(counter, 3));
    }

  // if m is exactly 0, then return the counter; otherwise, it's not possible to build a tower of cubes
  // with the given volume
  return m === 0 ? counter : -1;
}

findNb(4183059834009); // return 2022
findNb(24723578342962); // return -1
findNb(135440716410000); // return 4824
findNb(40539911473216); // return 3568
