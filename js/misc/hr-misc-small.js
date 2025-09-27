function compareTriplets(a, b) {
    let aResult = 0;
    let bResult = 0;

    for (let i = 0; i < a.length; i++) {
        let middle = a[i] - b[i];

        if (middle > 0) {
          aResult++;
        } else if (middle < 0) {
          bResult++;
        } else if (middle === 0) {
          continue;
        }
    }
    
    return [aResult, bResult];
}

// compareTriplets([5, 6, 7], [3, 6, 10]);
// compareTriplets([17, 28, 30], [99, 16, 8]);

function diagonalDifference(arr) {
    let lrResult = 0;
    let rlResult = 0;
    // get lrResult first
    for (let i = 0; i < arr.length; i++) {
        // 0,0/1,1/2,2
        lrResult += arr[i][i];
    }
    
    // then get rlResult
    for (let i = arr.length - 1; i >= 0; i--) {
        // 2,0/1,1/0,2
        rlResult += arr[i][Math.abs(i - (arr.length - 1))];
    }

    return Math.abs(lrResult - rlResult);
}

diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]);

// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
function plusMinus(arr) {
  const resultCount = { pos: 0, neg: 0, zero: 0 };
  const resultArr = [];

  for (const i of arr) {
    if (i > 0) {
      resultCount.pos++;
    } else if (i < 0) {
      resultCount.neg++;
    } else {
      resultCount.zero++;
    }
  }

  for (const j of Object.values(resultCount)) {
    resultArr.push(parseFloat((j / arr.length).toFixed(6)));
  }

  console.log(resultArr.join('\n'));
}

// plusMinus([-4, 3, -9, 0, 4, 1]);

// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
function staircase(n) {
  const resultArr = [];

  for (let i = 1; i <= n; i++) {
    let middle = '';
    // spaces: n - i
    // hashes: i
    middle += ' '.repeat(n - i);
    middle += '#'.repeat(i);
    resultArr.push(middle);
  }

  console.log(resultArr.join('\n'));
}

// staircase(6);

// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
function miniMaxSum(arr) {
  const ascSorted = arr.toSorted();
  const descSorted = arr.toSorted((a, b) => b - a);

  const sortUpTo = (arr, upToIndex) => {
    return arr.reduce((a, c, i) => {
      if (i < upToIndex) {
        return a + c;
      }
      return a;
    });
  }

  console.log(sortUpTo(ascSorted, arr.length - 1), sortUpTo(descSorted, arr.length - 1));
}

// miniMaxSum([1, 2, 3, 4, 5]);

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/
function rotLeft(a, d) {
  const rot = a.splice(0, d);

  return [...a, ...rot];
}

rotLeft([1, 2, 3, 4, 5], 4);
rotLeft([41, 73, 89,  7, 10,  1, 59, 58, 84, 77, 77, 97, 58,  1, 86, 58, 26, 10, 86, 51], 10);

// https://www.hackerrank.com/challenges/sock-merchant/
function sockMerchant(n, ar) {
  let result = 0;
  const count = {};

  for (const i of ar) {
    count[i] ? count[i]++ : count[i] = 1;

    if (count[i] % 2 === 0) result++;
  }

  return result;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// https://www.hackerrank.com/challenges/counting-valleys/
function countingValleys(steps, path) {
  let totalCount = 0;
  let tracker = 0;
  let lastStep;

  for (const s of path) {
    s === 'D' ? tracker-- : tracker++;
    lastStep = s;
    if (tracker === 0 && lastStep === 'U') totalCount++;
  }

  return totalCount;
}

countingValleys(8, 'UDDDUDUU');
countingValleys(12, 'DDUUDDUDUUUD');

// https://www.hackerrank.com/challenges/jumping-on-the-clouds
function jumpingOnClouds(c) {
  let count = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      i ++;
      count++;
    } else if (c[i + 1] === 0) {
      count++;
    }
  }

  return count;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);

// https://www.hackerrank.com/challenges/repeated-string/
function repeatedString(s, n) {
    if (s.indexOf('a') === -1) return 0;
    if (s.length === 1) return n;

    const aCount = s.match(/a/g).length;
    let remainder = 0;

    if (Math.floor(n / s.length) < n) {
      const diff = n - (Math.floor(n / s.length) * s.length)

      remainder = (s.slice(0, diff).match(/a/g) || '').length;
    }

    return Math.floor(n / s.length) * aCount + remainder;
}

repeatedString('gfcaaaecbg', 547602); // return 164280
repeatedString('aba', 10); // return 7
repeatedString('ceebbcb', 817723);
repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400);

// https://www.hackerrank.com/challenges/time-conversion/
function timeConversion(s) {
  return s.replace(/^(\d{2})(.+)(AM|PM)$/, (m, p1, o, s) => (
    `${parseInt(p1) <= 12 && s === 'AM' ?
      parseInt(p1) === 12 ? '00' : p1 :
      parseInt(p1) === 12 ? p1 : parseInt(p1) + 12}${o}`
    ));
}

timeConversion('07:05:45PM');
timeConversion('12:40:22AM');
timeConversion('05:40:22AM');
timeConversion('12:45:54PM');

function gradingStudents(grades) {
  const result = [];

  for (const g of grades) {
    // find the next highest multiple of 5
    const nextHighest = Math.ceil(g / 5) * 5;
    // if g is within 3 of this, do not round it up
    // if g is less than 3 of the next multiple of 5, round up
    g >= 38 && nextHighest - g < 3 ? result.push(nextHighest) : result.push(g);
  }

  return result;
}

gradingStudents([73, 67, 38, 33]);

// https://www.hackerrank.com/challenges/apple-and-orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // s is the beginning of the house
  // t is the end of the house
  // a is the apple tree to the left of the house
  // b is the orange tree to the right of the house
  // add a to each number in apples
  // add b to each number in oranges
  // count how many of these numbers are within the range of s-t
  // print each result in a separate line
  const countFruit = (tree, arr) => {
    let counter = 0;

    for (const i of arr) {
      let temp = tree + i;

      if (temp >= s && temp <= t) {
        counter++;
      }
    }

    return counter;
  }

  const appleCount = countFruit(a, apples);
  const orangeCount = countFruit(b, oranges);

  // console.log(appleCount);
  // console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // return 1 1

// https://www.hackerrank.com/challenges/sparse-arrays
function matchingStrings(stringList, queries) {
  // original solution
  // const result = [];

  // // count the same string each time it comes up in the query array
  // for (const q of queries) {
  //   let count = stringList.filter(a => a === q).length;
  //   result.push(count);
  // }

  // return result;

  // O(m + n) solution instead of doing basically a nested loop
  const count = {};
  const result = [];
  // first, get how many times the string appears in stringList
  for (const s of stringList) {
    count[s] ? count[s]++ : count[s] = 1;
  }

  // next, get the count per query and push into results array
  for (const q of queries) {
    result.push(count[q] || 0);
  }
  
  return result;
}

matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'aba', 'aba', 'ab']); // return [2, 1, 2, 2, 0]
