// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111
function triangle(row) {
  // set the result to the initial row to begin with
  let result = row;

  while (result.length > 1) {
    let temp = '';

    for (let i = 0; i < result.length - 1; i++) {
      // check the current character plus the one following it
      let current = result.slice(i, i + 2);

      // check if both chars in current are the same first
      if (current[0] === current[1]) {
        temp += current[0];
      } else {
        // if not, check for each combination
        // (save a lot of time by skipping this block altogether if both are the same)
        if (current.includes('G') && current.includes('B')) {
          temp += 'R';
        } else if (current.includes('R') && current.includes('B')) {
          temp += 'G';
        } else if (current.includes('G') && current.includes('R')) {
          temp += 'B';
        }
      }
    }

    result = temp;
  }

  return result;
}

triangle('B'); // return 'B'
triangle('RRR'); // return 'R'
triangle('RGBG'); // return 'B'
triangle('RBRGBRB'); // return 'G'
triangle('RBRGBRBGGRRRBGBBBGG'); // return 'G'
