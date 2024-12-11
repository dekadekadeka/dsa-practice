// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
  const hashMap = str.toLowerCase().replace(/[^xo]/g, '').split('').reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1;
    return a;
  }, {});

  return Object.values(hashMap)
    .every(v => v === Object.values(hashMap)[0]) && Object.values(hashMap).length !== 1;
}

XO("bcbcbc"); // return false
XO("xxxm"); // return false
XO('xo'); // return true
