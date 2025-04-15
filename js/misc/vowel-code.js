// https://www.codewars.com/kata/53697be005f803751e0015aa
// const key = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'};
function encode(string) {
  // my original solution
  // return string.split('').map(l => Object.keys(key).includes(l) ? key[l] : l).join('');
  // replace every vowel with its corresponding number
  // i is the matched letter in string
  // '_aeiou' is there to pick the corresponding letter by index, with _ at the beginning so a begins at 1
  // get the index of i within '_aeiou'
  return string.replace(/[aeiou]/g, (i) => '_aeiou'.indexOf(i));
}

function decode(string) {
  // my original solution
  // return string.split('').map(l => Object.values(key).includes(l) ? Object.keys(key).find(k => key[k] === l) : l).join('');
  // now do the reverse
  // match each number in the string, and find the char at that index in '_aeiou'
  return string.replace(/[12345]/g, (i) => '_aeiou'.charAt(i));
}

encode('hello'); // 'h2ll4'
encode('How are you today?'); // 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.'); // 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4'); // 'hello'
