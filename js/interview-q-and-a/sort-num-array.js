// sort an array of numbers
const originalArr = [9, 5, 6, 1, 3, 2, 4, 7, 0, 8];

const sorted = originalArr.sort((a, b) => a - b);
console.log(originalArr);
console.log(sorted); // both will be identical because .sort() mutates the original array
// to not mutate the original array, use .toSorted()

// sort strings! sort array of objects by author's last name
const books = [
  {
    name: 'Calico Cat',
    author: 'Citlali B',
  },
  {
    name: 'Grey Cat',
    author: 'Bintang A',
  },
  {
    name: 'OG Calico Cat',
    author: 'Pinta C',
  },
];

const sortedBooks = books.sort((a, b) => {
  // original
  // if (a.author.split(' ')[1] < b.author.split(' ')[1]) {
  //   return -1;
  // } else if (a.author.split(' ')[1] > b.author.split(' ')[1]){
  //   return 1;
  // }

  // return 0;

  // ternary/one-liner solution
  return a.author.split(' ')[1] < b.author.split(' ')[1] ? -1 : 1;
});

console.log(sortedBooks);
