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
    if (!this.head) return 'The linked list is empty';
    if (!this.head.next) return 'The linked list only contains one element';

    // make a hash map to keep track of how many times an element appears on the list
    const elementCount = {};
    let current = this.head;

    while (current !== null) {
      // add the element and its occurrence count to the hash map
      elementCount[current.data] ? elementCount[current.data]++ : elementCount[current.data] = 1;

      // if the element's count is greater than one, meaning it's a duplicate...
      if (elementCount[current.data] > 1) {
        // assign the next Node's data to the current data,
        // and assign the next Node's next to the current next,
        // essentially overwriting the current with the next, therefore deleting the current.
        current.data = current.next.data;
        current.next = current.next.next;
      } else {
        // if the element is still only present once, keep traversing through the linked list
        current = current.next;
      }
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
linkedList.removeDuplicates();
console.log(linkedList.print()); // 5 -> 35 -> 69 -> 420 - removed the second occurrence of 35
