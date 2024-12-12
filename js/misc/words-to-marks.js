// https://www.codewars.com/kata/59706036f6e5d1e22d000016
function wordsToMarks(string){
  let result = 0;

  for (const letter of string) {
    result += letter.charCodeAt() - 96;
  }

  return result;
}

wordsToMarks('attitude'); // return 100
wordsToMarks('friends'); // return 75
wordsToMarks('family'); // return 66
