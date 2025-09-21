// write a function which gets an array and an element, and returns an array with this element at the end
const cats = ['Bintang', 'Citlali'];
const addToArr = (arr, elem) => {
  return [...arr, elem];
}

const newCats = addToArr(cats, 'Pinta');
console.log(newCats); // return ['Bintang', 'Citlali', 'Pinta']
console.log(cats); // return ['Bintang', 'Citlali'] - original cats array is not modified
// safe, pure function because it returns the same output given the same input,
// and it does not modify the original input

// write a function to concatenate 2 arrays
const concatTwoArr = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const concatCats = concatTwoArr(cats, ['Pinta', 'Baxter']);
console.log(concatCats); // return ['Bintang', 'Citlali', 'Pinta', 'Baxter']
console.log(cats); // return ['Bintang', 'Citlali'] - original cats array is not modified
