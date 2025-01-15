// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
const revrot = (str, sz) => {
  if (sz > str.length || str.length === 0 || sz <= 0) return '';
  // split str into sz-sized chunks
  const chunks = new RegExp(`\\d{${sz}}`, 'g');
  const splitStr = str.match(chunks);

  for (let i = 0; i < splitStr.length; i++) {
    const sum = splitStr[i].split('').reduce((a, c) => Number(a) + Number(c));
    // if substring adds up to an even number, reverse the chunk
    if (sum % 2 === 0) {
      splitStr[i] = splitStr[i].split('').reverse().join('');
    // if substring adds up to an odd number, rotate the chunk one place to the left
    } else {
      splitStr[i] = splitStr[i].replace(/(\d)(\d+)$/, '$2$1');
    }
  }

  return splitStr.join('');
}

revrot("1234", 0); // return ""
revrot("", 0); // return ""
revrot("1234", 5); // return ""
const s = "733049910872815764";
revrot(s, 5); // return "330479108928157"
revrot("664438769", 8); // return "67834466"
