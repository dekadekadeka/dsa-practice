// https://www.codewars.com/kata/54e6533c92449cc251001667
const uniqueInOrder = iterable => {
  if (iterable.length === 0) return [];

  const result = typeof iterable === 'object' ? iterable.join('') : iterable;
  // regex that matches each character group in order
  const regex = new RegExp([...new Set(iterable)].map(l => `(${l}+)`).join('|'), 'g');
  // check if each char is a number; if so, return it as a Number
  return result.match(regex).map(a => /\d/.test(a) ? Number(a[0]) : a[0]);

  // using filter - one-line solution :)
  // return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

uniqueInOrder('AAAABBBCCDAABBB'); // return ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); // return ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]); // return [1,2,3]
