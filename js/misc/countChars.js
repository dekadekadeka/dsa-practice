// https://www.codewars.com/kata/52efefcbcdf57161d4000091
function count(string) {
  const result = {};
    for (let i = 0; i < string.length; i++) {
      result[string[i]] ? result[string[i]]++ : result[string[i]] = 1;
    }
    
  return result;
}

count('Bintang'); // {B: 1, i: 1, n: 2, t: 1, a: 1, g: 1}
