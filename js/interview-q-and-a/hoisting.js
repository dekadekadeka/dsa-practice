// hoisting: your variable declaration will be bubbled up to the top of the file
// what will be console.logged here?

// Question 1
// console.log(foo); // "foo is not defined" error because foo is not declared
// foo = 1;

// Question 2
// console.log(foo);
// var foo = 2;
// this results in undefined, because it is equivalent to:
// var foo;
// console.log(foo); // you declared foo, but did not assign anything to it; the declaration was hoisted to the top
// foo = 2;

// Question 3
// foo = 3;
// console.log(foo); // returns 3 because `var foo` got bubbled to the very top, then assigned in the next line
// var foo;

// if we use "const" and "let", they don't bubble to the top!! So hoisting does not apply to them!!
