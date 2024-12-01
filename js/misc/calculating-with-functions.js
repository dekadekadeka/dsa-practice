// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
// operator is an optional function argument; if it's not present, return the respective number
function zero(operator = () => 0) {
  // return the result of the operator that was passed in, if present
  return operator(0);
}
function one(operator = () => 1) {
  return operator(1);
}
function two(operator = () => 2) {
  return operator(2);
}
function three(operator = () => 3) {
  return operator(3);
}
function four(operator = () => 4) {
  return operator(4);
}
function five(operator = () => 5) {
  return operator(5);
}
function six(operator = () => 6) {
  return operator(6);
}
function seven(operator = () => 7) {
  return operator(7);
}
function eight(operator = () => 8) {
  return operator(8);
}
function nine(operator = () => 9) {
  return operator(9);
}

// rightNum: "right side" number function
function plus(rightNum) {
  // create a new function where you will pass in the "left side" number...
  const add = (leftNum) => {
    // and return the results of the operation from both numbers
    return leftNum + rightNum;
  }
  // when calling plus(), you will actually return the add() function with the "right side" number already loaded.
  // This will be passed in to and called inside the "left side" number function,
  // finally returning the results of the complete operation as shown on line 40.
  return (leftNum) => add(leftNum);
}
function minus(rightNum) {
  const subtract = (leftNum) => {
    return leftNum - rightNum;
  }
  return (leftNum) => subtract(leftNum);
}
function times(rightNum) {
  const multiply = (leftNum) => {
    return leftNum * rightNum;
  }
  return (leftNum) => multiply(leftNum);
}
function dividedBy(rightNum) {
  const divide = (leftNum) => {
    return Math.floor(leftNum / rightNum);
  }
  return (leftNum) => divide(leftNum);
}

console.log(two(plus(two())));
console.log(three(plus(two())));
console.log(seven(dividedBy(eight())));
