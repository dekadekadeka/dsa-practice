// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  // find the odd number at nFloors steps
  const maxLength = nFloors > 1 ? 2 * nFloors - 1 : nFloors;
  const result = [];

  for (let i = 1; i <= (nFloors * 2); i += 2) {
    // halve the difference between the maxLength and i,
    // and add that amount of spaces to the beginning of the result string,
    // the repeated asterisks, and then add the other half of spaces to the end
    let resultStr = ' '.repeat((maxLength - i) / 2) + '*'.repeat(i) + ' '.repeat((maxLength - i) / 2);
    result.push(resultStr);
  }

  return result;
}

towerBuilder(1);
towerBuilder(2);
towerBuilder(3);
towerBuilder(5);
