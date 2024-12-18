// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme (triplet) {
  const result = [];

  // push each number and its index as an array into the results array
  for (const num of triplet) {
    result.push([num, triplet.indexOf(num)]);
  }

  // sort the results array by number, and return the one in the middle (first [1] and its index (second [1])
  return result.sort((a, b) => a[0] - b[0])[1][1];
}

gimme([2, 3, 1]);