// https://www.codewars.com/kata/57fae964d80daa229d000126
const remove = string => {
  const splitString = string.split('');
  splitString.splice(string.length - 1, string[string.length - 1] === '!' ? 1 : 0);
  return splitString.join('');
}

remove('Hi!'); // return 'Hi'
