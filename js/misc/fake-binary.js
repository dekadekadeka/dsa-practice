// https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x){
  return x.split('').reduce((a, c) => {
    c = c >= 5 ? '1' : '0';
    return a += c;
  }, '');
}

fakeBin('45385593107843568');
