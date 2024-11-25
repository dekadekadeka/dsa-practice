// https://www.codewars.com/kata/57a049e253ba33ac5e000212
function factorial(n){
  let result = 1;
  
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  
  return result;
}

factorial(5);
