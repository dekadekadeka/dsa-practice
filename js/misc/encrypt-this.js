// https://www.codewars.com/kata/5848565e273af816fb000449
const encryptThis = text => {
  const splitText = text.split(' ');
  let result = [];

  for (const word in splitText) {
    let temp = [];
    // add the first char's ascii code to temp
    temp.push(splitText[word].charCodeAt(0));
    
    let restOfWord = splitText[word].slice(1, splitText[word].length).split('');
    let tempSecondLetter = restOfWord[0];

    restOfWord[0] = restOfWord[restOfWord.length - 1];
    restOfWord[restOfWord.length - 1] = tempSecondLetter;

    temp.push(restOfWord.join(''));

    result.push(temp.join(''));
  }

  return result.join(' ');
}

encryptThis("A"); // return "65"
encryptThis("A wise old owl lived in an oak"); // return "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
encryptThis("The more he saw the less he spoke"); // return "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
encryptThis("The less he spoke the more he heard"); // return "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
encryptThis("Why can we not all be like that wise old bird"); // return "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
encryptThis("Thank you Piotr for all your help"); // return "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
