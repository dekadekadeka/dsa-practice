// https://www.codewars.com/kata/592a6ad46d6c5a62b600003f
const keys = {
  'a': 'g',
  'e': 'd',
  'y': 'r',
  'o': 'p',
  'u': 'l',
  'i': 'k',
  'g': 'a',
  'd': 'e',
  'r': 'y',
  'p': 'o',
  'l': 'u',
  'k': 'i',
}

const encode = str => {
  const allKeys = new RegExp(`${Object.keys(keys).join('|')}`);
  let result = str.split('');

  for (let i = 0; i < result.length; i++) {
    if (allKeys.test(result[i].toLowerCase())) {
      const isUppercase = result[i] === result[i].toUpperCase();
      result[i] = isUppercase ? (keys[result[i].toLowerCase()] ?? ' ').toUpperCase() : keys[result[i]];
    }
  }

  return result.join('');
}

const decode = str => {
  return encode(str);  
}

encode("gaderypoluki"); // "agedyropulik"
decode("agedyropulik"); // "gaderypoluki"
encode("Ala has a cat"); // return "Gug hgs g cgt"
decode("Gug hgs g cgt") // return "Ala has a cat"
