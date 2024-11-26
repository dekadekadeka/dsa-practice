// https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

twoSum([2, 2, 3], 4);
twoSum([-531, -718, 500, -172, 686, -918, 731, -884, 968, -452, -87, 351, -365, 722, 63, -411, -786, 524, 663, 147, -722, 121, 165, 382, 180, 400, 450, -425, -535, -743, -52, -65, 130, -386], -621);
