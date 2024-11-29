// https://www.codewars.com/kata/582c297e56373f0426000098
// Let's set up the Node a little bit differently
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// my first, and non-recursive, solution
function stringify(list) {
  let result = '';

  while(list !== null) {
    result += `${list.data} -> `;
    list = list.next;
  }
  
  result += 'null';
  
  return result;
}

// We're about to do some recursion :)
const stringifyRecursive = (list) => {
  // while the list itself, or the 'next' Node passed in is not null...
  while(list !== null) {
    // return a string with the data pointing to a call to the next node
    return `${list.data} -> ${stringifyRecursive(list.next)}`;
  }
  // Once you finally get to the end of the Linked List...
  return 'null';
  // you will return the string 'null' PLUS all the other calls to return inside the while loop (on line 29)
  // right behind it, working backwards, creating a string with all the previous data
  // pointing to its next element in the right order
}

// populate the Linked List all in one line!
// each one prints 35 -> 50 -> 69 -> 420 -> null to the console
console.log(stringify(new Node(35, new Node(50, new Node(69, new Node(420))))));
console.log(stringifyRecursive(new Node(35, new Node(50, new Node(69, new Node(420))))));
