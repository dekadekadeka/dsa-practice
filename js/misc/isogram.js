// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str){
  const lowercaseStr = str.toLowerCase();

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr.indexOf(lowercaseStr[i]) !== lowercaseStr.lastIndexOf(lowercaseStr[i])) {
      return false;
    }
  }
  return true;
}

isIsogram('aba'); // false
isIsogram('Dermatoglyphics'); // true
isIsogram('isogram'); // true
