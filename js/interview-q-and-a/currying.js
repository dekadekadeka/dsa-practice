// write a function which achieves multiply(a)(b) and returns the product of a and b (currying!)
// const multiply = (num1) => {
//   return (num2) => num1 * num2;
// }

// one-line solution
const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(7)(5));

const curry = function(fn) {
  const arity = fn.length; // arity: number of arguments passed into a function
  // console.log('arity', arity);
  // currying must return a function
  return function f1(...args) {
    if (args.length >= arity) {
      // console.log('enough arguments');
      // if you have the correct number of args,
      // call original function you passed in
      return fn(...args);
      // if not enough args...
    } else {
      // console.log('not enough arguments');
      return function f2(...moreArgs) {
        // concatenate the new args with the original args, and call the f1 function,
        // which gets called when you have the correct number of args, recursively
        const newArgs = [...args, ...moreArgs];
        return f1(...newArgs);
      }
    }
  }
}
const curriedSum = curry((a, b, c) => a + b + c);
// console.log(curriedSum(1, 2, 3)) // enough arguments
const partiallyCurriedSum = curriedSum(1); // returns everything inside the "else" block until you have enough args
console.log(partiallyCurriedSum); // returns everything inside the "else" block until you have enough args (same as above line)
console.log(partiallyCurriedSum(2, 3)); // you added the extra necessary args here, so it finally returns the correct answer (6)
// correct ways to call it:
console.log(curriedSum(1)(2, 3)); // returns 6
console.log(curriedSum(1)(2)(3)); // also returns 6

// why do we need currying? what can a curried function do?
// to write JS in a functional way
const get = curry((property, obj) => obj[property]); // you can use it for strings too!
console.log(get('name')); // not enough args, so again, returns everything inside the "else" block
console.log(get('name', { name: 'Bintang'})); // returns 'Bintang'
const getName = get('name'); // not enough args, so again, returns everything inside the "else" block
const map = curry((fn, values) => values.map(fn)); // our own map function, basically calling curry() above
const getNames = map(getName); // pass in getName above to our own map
console.log(getNames([{ name: 'Bintang' }, { name: 'Citlali' }])); // returns ['Bintang', 'Citlali']
