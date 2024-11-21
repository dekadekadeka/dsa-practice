// https://www.codewars.com/kata/554ca54ffa7d91b236000023
function deleteNth(arr,n){
  const result = [];
  // keep track of how many times each number appears
  const count = {};
  
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] ? count[arr[i]] += 1 : count[arr[i]] = 1;
    count[arr[i]] <= n && result.push(arr[i]);
  }

  return result;
}

deleteNth([20,37,20,21], 1); // return [20, 37, 21]
