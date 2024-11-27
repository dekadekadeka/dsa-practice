// https://www.codewars.com/kata/577bd026df78c19bca0002c0
function correct(string) {
  // create a hash map of the characters you want to replace
	const replacements = {'0': 'O', '1': 'I', '5': 'S'};
  
  // for...in loop iterates over each key in a hash
  for (const i in replacements) {
    // with 'new RegExp()', you can create a regex that uses a variable,
    // which you cannot do when creating a straight regex
    // Replace the odd character in the string (key) with the appropriate letter (value)
    string = string.replace(new RegExp(i, 'g'), replacements[i]);
    // do this for each odd character in the hash map
  }

  return string;
}

correct('51NGAP0RE'); // return 'SINGAPORE'
