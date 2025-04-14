// https://www.codewars.com/kata/53697be005f803751e0015aa
const key = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'};
function encode(string) {
  return string.split('').map(l => Object.keys(key).includes(l) ? key[l] : l).join('');
}

function decode(string) {
  return string.split('').map(l => Object.values(key).includes(l) ? Object.keys(key).find(k => key[k] === l) : l).join('');
}

encode('hello'); // 'h2ll4'
encode('How are you today?'); // 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.'); // 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4'); // 'hello'
