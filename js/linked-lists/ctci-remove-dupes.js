// Cracking The Coding Interview - Linked Lists problem 2.1
// Remove duplicates from an unsorted linked list.
// Scroll down to line 44 for the actual function.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  print() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    return result.join(' -> ');
  }

  // the real reason why you came here! :)
  removeDuplicates() {
    // make a hash map to keep track of how many times an element appears on the list
    const elementCount = {};
    let current = this.head;
    // keep track of which Node came directly before the current
    let previous = null;

    while (current !== null) {
      // if the element is already present in the hash map, meaning it's a duplicate...
      if (elementCount[current.data]) {
        // assign the previous Node's data to the current data (go back one Node),
        current = previous;
        // and assign that Node's next to that of two nodes ahead,
        // overwriting the "current" Node with the one ahead,
        // therefore deleting the Node currently being checked.
        // (go backwards one Node, look to the Node two spaces ahead,
        // and replace the Node one step behind with the one one step ahead)
        current.next = current.next.next;
      } else {
        // add the element to the hash map
        // (no need to count, we just need to keep track of it already existing)
        elementCount[current.data] = 1;
        // set the current to be the new previous for the next iteration
        previous = current;
      }
      // keep traversing through the linked list
      current = current.next;
    }
  }

  // "No Buffer Allowed" solution
  removeDuplicatesCursor() {
    let current = this.head;

    while (current !== null) {
      // set the cursor to be the same as the current at the TOP of the while loop
      let cursor = current;
      // if the next Node is not null...
      while (cursor.next !== null) {
        // AND if the next Node's data is the same as the current data...
        if (cursor.next.data === current.data) {
          // then set the cursor/next Node's 'next' to the next Node's next,
          // overwriting the next Node with the next next Node
          cursor.next = cursor.next.next;
        } else {
          // otherwise, move the cursor to the next Node
          cursor = cursor.next;
        }
      }
      // set current to the next Node after checking against all the other Nodes
      current = current.next;
    }
  }
}

const linkedList = new LinkedList;

linkedList.append(5);
linkedList.append(35);
linkedList.append(69);
linkedList.append(35);
linkedList.append(420);
console.log(linkedList.print()); // 5 -> 35 -> 69 -> 35 -> 420
// comment out whichever one you don't want to use
linkedList.removeDuplicates();
// linkedList.removeDuplicatesCursor();
console.log(linkedList.print()); // 5 -> 35 -> 69 -> 420 - removed the second occurrence of 35
