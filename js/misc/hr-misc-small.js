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
