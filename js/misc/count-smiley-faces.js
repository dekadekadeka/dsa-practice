// https://www.codewars.com/kata/583203e6eb35d7980400002a
// return the total number of valid smiling faces in the array
function countSmileys(arr) {
  return arr.filter(smiley => smiley.match(/(:|;)(-|~)?(D|\))/g)).length;
}
