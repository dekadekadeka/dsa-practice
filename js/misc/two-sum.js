// https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
  // hash map solution
  const obj = {};

  for (let i = 0; i < numbers.length; i++) {
    if (obj[target - numbers[i]]) {
      return [numbers.indexOf(target - numbers[i]), i];
    } else {
      obj[numbers[i]] = true;
    }
  }

  // original solution with a nested loop
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
}

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

twoSum([2, 2, 3], 4);
twoSum([-531, -718, 500, -172, 686, -918, 731, -884, 968, -452, -87, 351, -365, 722, 63, -411, -786, 524, 663, 147, -722, 121, 165, 382, 180, 400, 450, -425, -535, -743, -52, -65, 130, -386], -621);
