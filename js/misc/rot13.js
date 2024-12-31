// https://www.codewars.com/kata/530e15517bc88ac656000716
function rot13(message){
  const result = message.split('').map(l => {
    if (/[A-Za-z]/.test(l)) {
      // find the character 13 points ahead
      let rot = l.charCodeAt(0) + 13;
      // if rot is greater than 90 (Z) or 122 (z), then subtract 26 from it to wrap around the alphabet
      // 91-96 are special characters in between uppercase and lowercase letters
      if (/[A-Z]/.test(l)) {
        return String.fromCodePoint(rot - (rot > 90 ? 26 : 0));
      } else if (/[a-z]/.test(l)) {
        return String.fromCodePoint(rot - (rot > 122 ? 26 : 0));
      }
    } else {
      // if the char is not a letter, return it untouched
      return l;
    }
  })

  return result.join('');
}

rot13('abcdefghijklmnopqrstuvwxyz'); // returns 'nopqrstuvwxyzabcdefghijklm'
rot13('Test'); // returns 'Grfg'
rot13('Codewars'); // returns 'Pbqrjnef'
