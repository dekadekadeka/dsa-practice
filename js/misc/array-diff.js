// https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  // traverse through each element of b
  for (let i = 0; i < b.length; i++) {
    // find the index in a of the number being checked in b
    let index = a.indexOf(b[i]);

    // if the number being checked in b is found in a...
    while (index !== -1) {
      // remove that number from a (pass in its index, and specify to delete just that one element)
      a.splice(index, 1);
      // now find the index in a of the number being checked in b again.
      // If the number appears in a again, the index will be set to that
      // if the number is not found, indexOf() returns -1 and the while loop ends
      index = a.indexOf(b[i]);
    }
  }

  // a has been permanently modified to remove the numbers in b
  return a;

  // one-line solution (comment out above and uncomment below to try it)
  // return a.filter(num => !b.includes(num));
}

arrayDiff([1,2], [1]); // return [2]
arrayDiff([1,2,2], [1]); // return [2, 2]
arrayDiff([1,2,2], [2]); // return [1]
arrayDiff([1,2,3], [1, 2]); // return [3]
