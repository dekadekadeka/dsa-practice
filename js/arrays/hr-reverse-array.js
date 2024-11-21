// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
// a: Number[], initial array
function reverseArray(a) {
  // Write your code here
  let begin = 0;
  let end = a.length - 1;

  while (begin < end) {
    let temp = a[begin];
    a[begin] = a[end];
    a[end] = temp;
    begin++;
    end--;
  }
  return a;
}

reverseArray([1, 4, 3, 2]);
