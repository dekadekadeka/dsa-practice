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
    console.log(result.join(' -> '));
  }
}

// first, create the Linked List
const linkedList = new LinkedList;
// second, populate the Linked List
linkedList.append(35);
linkedList.append(69);
linkedList.append(420);
linkedList.print(); // prints 35 -> 69 -> 420 to the console
