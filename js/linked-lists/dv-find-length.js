class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
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

  length() {
    let result = 0;
    let current = this.head;

    // Make sure you look at THE ENTIRE current, not just current.next if you need
    // to consider all elements!! Otherwise, the very last element will not be considered.
    while (current !== null) {
      result++;
      current = current.next;
    }

    return result;
  }
}

// first, create the Linked List
const linkedList = new LinkedList;
// second, populate the Linked List
linkedList.append(35);
linkedList.append(69);
linkedList.append(420);
console.log(linkedList.length()); // returns 3
