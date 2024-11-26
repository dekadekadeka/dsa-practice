// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str){
  const result = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result.push(str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1));
    }
  }
  
  return result;
}

wave('two words');
