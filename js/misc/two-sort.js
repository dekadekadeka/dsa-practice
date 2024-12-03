// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
const twoSort = arr => {
  // you can also just use sort() with no compare function
  return arr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)[0].replace(/(.)\B/g,'$1***');
}

// returns 'b***i***t***c***o***i***n'
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
// returns 'a***r***e'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);
