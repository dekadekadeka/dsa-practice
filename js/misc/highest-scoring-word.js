// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
function high(x){
  let splitX = x.toLowerCase().split(' ');
  let result;
  let maxSum = 0;

  for (let i = 0; i < splitX.length; i++) {
    let tempSum = 0;
    for (let j = 0; j < splitX[i].length; j++) {
      // Subtract 96 from the number returned from charCodeAt()
      // to map 'a' to 1, 'b' to 2 in lowercase letters
      tempSum += splitX[i].charCodeAt(j) - 96;
    }

    if (maxSum < tempSum) {
      maxSum = tempSum;
      result = splitX[i];
    }
  }

  return result;
}

high('what time are we climbing up the volcano');
high('Bintang and Citlali');
