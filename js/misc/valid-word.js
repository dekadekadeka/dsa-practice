// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196
const validWord = (dictionary, word) => {
  const joinedDict = dictionary.join('');
  const sortedDict = dictionary.join('').split('').sort();
  const sortedWord = word.split('').sort();

  let difference = sortedDict.filter(x => !sortedWord.includes(x)).concat(sortedWord.filter(x => !sortedDict.includes(x)));

  if (difference.length > 0 || !joinedDict.includes(word)) {
    let result = word;

    for (let i = 0; i < dictionary.length; i++) {
      const matches = result.matchAll(dictionary[i]);

      if (matches !== null) {
        for (const match of matches) {
          result = result.replace(match, '');
        }
      }
    }

    return result.length === 0;
  }

  return true;
}

// all of these work
validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg'); // return false
validWord([], 'codewars'); // return false for empty array
validWord(['ab', 'a', 'bc'], 'abc'); // return true
validWord(['code', 'wars'], 'codewars'); // return true
validWord(['wars', 'code'], 'codewars'); // return true
validWord(['code', 'wars'], 'codecodewars'); // return true
validWord(['code', 'wars'], 'codewar'); // return false
validWord(['Star', 'Code', 'Wars'], 'WarsStarCode'); // return true
validWord(['code', 'star', 'wars'], 'starwars'); // return true
validWord(['code', 'wars'], 'code'); // return true
validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar'); // return false
validWord(['ab', 'bc'], 'abc'); // return false
