const validWord = (dictionary, word) => {
  let result = word;

  // remove each matching entry in the dictionary from the word
  for (const w of dictionary) {
    result = result.replaceAll(w, '');
  }

  // if there are still characters left...
  // if (result.length > 0) {
    // then check if the entries in the dictionary can still make up the word
  // }

  return true;
}


// validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg'); // return false
validWord(['ab', 'a', 'bc'], 'abc'); // return true
validWord([], 'codewars'); // return false for empty array

// all of these work
validWord(['code', 'wars'], 'codewars'); // return true
validWord(['wars', 'code'], 'codewars'); // return true
validWord(['code', 'wars'], 'codecodewars'); // return true
validWord(['code', 'wars'], 'codewar'); // return false
validWord(['Star', 'Code', 'Wars'], 'WarsStarCode'); // return true
validWord(['code', 'star', 'wars'], 'starwars'); // return true
validWord(['code', 'wars'], 'code'); // return true
