// arr: Number[], initial array
const removeEven = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeEven([3, 4, 5, 6, 7, 8, 10]));
