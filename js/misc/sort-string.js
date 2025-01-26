// https://www.codewars.com/kata/5936256f2e2a27edc9000047
const sortString = s => {
  const result = s.replace(/[^A-Za-z]/g, '').split('').sort((a, b) => {
    return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
  });

  const specialChars = s.matchAll(/[^A-Za-z]/g);

  for (const match of specialChars) {
    result.splice(match.index, 0, match[0]);
  }

  return result.join('');
}

sortString("cba"); // return "abc"
sortString("Codewars"); // return "aCdeorsw"
sortString("Cba"); // return "abC"
sortString("cCBbAa"); // return "AaBbcC"
sortString("c b a"); // return "a b c"
sortString("-c--b--a-"); // return "-a--b--c-"
