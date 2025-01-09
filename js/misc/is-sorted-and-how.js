// https://www.codewars.com/kata/580a4734d6df748060000045
function isSortedAndHow(array) {
  const asc = [...array].sort((a, b) => a - b);
  const desc = [...array].sort((a, b) => b - a);
  
  const ascending = asc.every((a, i) => a === array[i]);
  const isSorted = ascending || desc.every((a, i) => a === array[i]);

  return `${isSorted ? 'yes' : 'no'}${isSorted ? ascending ? ', ascending' : ', descending' : ''}`;
}

isSortedAndHow([1, 2]); // return 'yes, ascending'
isSortedAndHow([15, 7, 3, -8]); // return 'yes, descending'
isSortedAndHow([4, 2, 30]); // return 'no'
