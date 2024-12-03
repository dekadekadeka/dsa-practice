// https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words){
  return words.split(' ').sort((a, b) => {
    return parseInt(/[0-9]/.exec(a)[0]) - parseInt(/[0-9]/.exec(b)[0]);
  }).join(' ');
}

order(""); // returns ''
order("is2 Thi1s T4est 3a"); // returns 'Thi1s is2 3a T4est'
order("4of Fo1r pe6ople g3ood th5e the2"); // returns 'Fo1r the2 g3ood 4of th5e pe6ople'
