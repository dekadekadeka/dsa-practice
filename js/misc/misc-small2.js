// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript
function vaporcode(string) {
  // original solution - did not account for strings that end in whitespace
  // return string.replace(/.(?=.)/g, l => /\W/.test(l) ? '' : l + '  ').toUpperCase();

  // after failing spec that checked for whitespace at the end
  return string.replace(/\S/g, l => /\W/.test(l) ? '' : l + '  ').toUpperCase().trimEnd();
}

vaporcode("Lets go to the movies"); // return "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
