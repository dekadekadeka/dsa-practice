// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string){
  // remove digits and non-word chars, turn string to lowercase, and split into array
  const bareString = string.replace(/\d|\W/g, '').toLowerCase().split('');
  // create a new Set from the bareString with letters only, removing all duplicates
  const letterSet = new Set([...bareString]);
  // if the size is 26, it means the Set contains each letter of the alphabet,
  // therefore the string is a pangram
  return letterSet.size === 26;
}

isPangram(""); // false
isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"); // true
isPangram("Bintang && Citlali"); // false
