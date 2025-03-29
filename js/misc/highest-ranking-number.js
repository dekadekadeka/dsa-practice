// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
function highestRank(arr){
  const count = {};
  let result = 0;

  for (const num of arr) {
    count[num] ? count[num]++ : count[num] = 1;
  }
  
  const maxCount = Math.max(...Object.values(count));

  for (const num of Object.keys(count)) {
    if (count[num] === maxCount) {
      if (Number(num) > result) {
        result = Number(num);
      }
    }
  }

  return result;
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr); // return 12
