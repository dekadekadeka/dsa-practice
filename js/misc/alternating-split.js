// https://www.codewars.com/kata/57814d79a56c88e3e0000786
function encrypt(text, n) {
  // set the initial result to the original text to begin with
  let result = text;

  while (n > 0 && result !== null) {
    // reset to empty strings between iterations
    let odd = '';
    let even = '';

    for (let i = 0; i < result.length; i++) {
      // separate the letters by odd/even index
      i % 2 === 0 ? even += result[i] : odd += result[i];
    }

    n--;
    // set the result to be the odd + even letters
    result = odd + even;
  }
  
  return result;
}

encrypt("This is a test!", 0); // return 'This is a test!'
encrypt("This is a test!", 1); // return 'hsi  etTi sats!'
encrypt("This is a test!", 2); // return 's eT ashi tist!'

// now do the same thing backwards
function decrypt(encryptedText, n) {
  let result = encryptedText;

  while (n > 0) {
    let firstHalf = result.slice(0, result.length / 2);
    let secondHalf = result.slice(result.length / 2, result.length);
    let tempResult = '';

    for (let i = 0; i < result.length / 2; i++) {
      if (secondHalf[i]) {
        tempResult += secondHalf[i];
      }

      if (firstHalf[i]) {
        tempResult += firstHalf[i];
      }
    }

    n--;
    result = tempResult;
  }

  return result;
}

// decrypt("This is a test!", 0); // return 'This is a test!'
decrypt("hsi  etTi sats!", 1); // return 'This is a test!'
decrypt("s eT ashi tist!", 2); // return 'This is a test!'
decrypt("itn n illBnagadCtai", 1); // return 'Bintang and Citlali'
