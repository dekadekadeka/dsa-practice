// https://www.codewars.com/kata/5b180e9fedaa564a7000009a
const fixStringCase = s => {
  let capitalCount = 0;
  let lowercaseCount = 0;

  for (let i = 0; i < s.length; i++) {
    // capital letter char codes: 65 - 90
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      capitalCount++;
    // lowercase letter char codes: 97 - 122
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      lowercaseCount++;
    }
  }

  return lowercaseCount >= capitalCount ? s.toLowerCase() : s.toUpperCase();
}

fixStringCase('CODe'); // return 'CODE'
fixStringCase('Code'); // return 'code'
fixStringCase('COde'); // return 'code'
