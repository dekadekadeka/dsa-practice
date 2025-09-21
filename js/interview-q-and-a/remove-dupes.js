// remove all duplicates in the array
const cats = ['Bintang', 'Citlali', 'Citlali'];

const removeDupes = (arr) => {
  return [...new Set(arr)];
}

console.log(removeDupes(cats));
