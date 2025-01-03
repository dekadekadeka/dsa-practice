// https://www.codewars.com/kata/56541980fa08ab47a0000040
function printerError(s) {
  const result = s.split('').filter(l => l.charCodeAt(0) > 109).length;

  return `${result}/${s.length}`;
}

const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
printerError(s); // returns '3/56'
