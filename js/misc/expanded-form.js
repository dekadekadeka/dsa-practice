// https://www.codewars.com/kata/5842df8ccbd22792a4000245
function expandedForm(num) {
  let result = [];
  // split the number into an array of each digit in string form
  const splitNum = String(num).split('');

  for (let i = 0; i < splitNum.length; i++) {
    
    // if the digit currently being checked is greater than 0,...
    if (splitNum[i] > 0) {
      let subresult = splitNum[i];
      
      // add as many zeros after the number at splitNum[i]: splitNum.length - (i + 1)
      for (let j = 0; j < splitNum.length - (i + 1); j++) {
        subresult += '0';
      }
  
      result.push(subresult);
    }
  }

  return result.join(' + ');
}

expandedForm(12); // return '10 + 2'
expandedForm(42); // return '40 + 2'
expandedForm(70304); // return '70000 + 300 + 4'
