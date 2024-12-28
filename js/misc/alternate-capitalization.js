// https://www.codewars.com/kata/59cfc000aeb2844d16000075
function capitalize(s){
  const capFirst = s.split('').map((l, idx) => idx % 2 === 0 ? l.toUpperCase() : l).join('');
  const upperFirst = s.split('').map((l, idx) => idx % 2 === 1 ? l.toUpperCase() : l).join('');

  return [capFirst, upperFirst];
};

capitalize('abcdef'); // return ['AbCdEf', 'aBcDeF']
capitalize('abracadabra'); // return ['AbRaCaDaBrA', 'aBrAcAdAbRa']
