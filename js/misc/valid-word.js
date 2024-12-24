// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196
const validWord = (dictionary, word) => {
  // my solution:
  // sort by longest to shortest word, and by reverse alphabetical order (ba, ab, a)
    dictionary.sort((a, b) => { 
      if (b.length !== a.length) {
        return b.length - a.length;
      }
      
      return b.localeCompare(a);
    });

    // assign the original word to the result
    let result = word;

    for (let i = 0; i < dictionary.length; i++) {
      // while the current word being checked is still in the result...
      while (result.includes(dictionary[i])) {
        // remove it
        result = result.replace(dictionary[i], '');
      }
    }

    // if all words removed from the result were in the dictionary, then they were all valid
    return result.length === 0;
}

// the better solution!
// const validWord = (dictionary, word) => {
//   // create a new regex that checks the presence of each word at least once, from the beginning
//   // to the end of the word
//   const reg = new RegExp(`^(${dictionary.join('|')})+$`);
//   // now test the actual word
//   return reg.test(word);
// }

validWord(['h','hz','htf','hptw','h','hde'], 'hhzhtfhptwhhde'); // return true
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
