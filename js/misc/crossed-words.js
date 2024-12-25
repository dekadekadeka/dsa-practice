// https://www.codewars.com/kata/5b72970db3d977e0f9000030
// str1 is horizontal
// str2 is vertical
const crossedWords = (str1, str2) => {
  let result = '';

  const intersection = str2.split('').filter(l => str1.indexOf(l) !== -1)[0];
  let intersectionPrinted = false;

  let spacesBefore = str1.indexOf(intersection);
  let spacesAfter = (str1.length - 1) - str1.indexOf(intersection);

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === intersection && !intersectionPrinted) {
      result += str1 + '\n';
      intersectionPrinted = true;
    } else {
      result += `${'.'.repeat(spacesBefore)}${str2[i]}${'.'.repeat(spacesAfter)}\n`;
    }
  }

  return result;
}

crossedWords("FAN","NAN");
crossedWords("A","BBBBBBBBBBBBBBBBBBBA");
crossedWords("ZAAAAAAAAAAAAAAAAAAA","ZBBBBBBBBBBABBBBBBBB");
crossedWords('X','X'); // return 'X\n'
crossedWords('AAAAAAAAAAAAAAAAAAAA','BBBBBBBBBBBABBBBBBBB');
