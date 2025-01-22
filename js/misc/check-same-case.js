// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
function sameCase(a, b){
  if (!/[A-Za-z]/.test(a) || !/[A-Za-z]/.test(b)) return -1;

  if ((/[A-Z]/.test(a) && /[a-z]/.test(b)) || (/[a-z]/.test(a) && /[A-Z]/.test(b))) {
    return 0;
  }
  
  if ((/[A-Z]/.test(a) && /[A-Z]/.test(b)) || (/[a-z]/.test(a) && /[a-z]/.test(b))) {
    return 1;
  }
}

sameCase('C', 'B', 1);
sameCase('b', 'a', 1);
sameCase('A', 's', 0);
sameCase('c', 'B', 0);
sameCase('b', 'Z', 0);
sameCase('\t', 'Z', -1);
sameCase('H', ':', -1);
