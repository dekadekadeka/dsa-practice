// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a,b,c) {
  // create an array with each value so we can rotate through it
  let arr = [a, b, c];

  for (let i = 0; i < arr.length; i++) {
    // we are rotating the array below, so it's ok to hardcode :)
    if (arr[0] + arr[1] <= arr[2]) {
      // if the sum of the first two values is less than or equal to the third val,
      // the triangle is not valid.
      return false;
    }

    // now rotate the array
    arr = [...arr.slice(-1), ...arr.slice(0, 2)];
  }

  return true;
}

isTriangle(1, 2, 2); // returns true
isTriangle(7, 2, 2); // returns false
