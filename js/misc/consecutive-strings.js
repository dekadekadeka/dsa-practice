// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
function longestConsec(strarr, k) {
  let result = '';

  if (k <= 0 || k > strarr.length) return result;

  for (let i = 0; i < strarr.length; i++) {
    let temp = strarr.slice(i, i + k).join('');

    if (result.length < temp.length) {
      result = temp;
    }
  }

  return result;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // return "abigailtheta"
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2); // return '' for k having a value <= 0
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15); // return '' for k having a value greater than strarr.length
longestConsec([], 2); // return '' for an empty array input
