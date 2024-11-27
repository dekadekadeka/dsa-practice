// https://omken.medium.com/mastering-linked-lists-in-javascript-95c35a9b99e6
// for JS Linked List basics

// basic Node with space for the data and a reference to the next Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// the LinkedList itself
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append: Insert a node into the end of the Linked List
  append(data) {
    // Create a new Node using the class above
    const newNode = new Node(data);

    // if there is no head node yet (as in, it's still null)...
    if (!this.head) {
      // then assign the new Node to be the head
      this.head = newNode;
    } else {
      // if there is already a head, then assign the head to be the
      // current node being checked
      let current = this.head;

      // while the current Node's next is not null...
      // (that is, if there is a next Node still available to traverse)
      while (current.next !== null) {
        // then assign current.next to be the new current
        // (that is, move to the next node and make it the new current)
        current = current.next;
      }

      // traverse through the Linked List until you
      // finally hit a Node where current.next is null...
      // then assign the new Node to current.next
      current.next = newNode;
      // Now the new Node just added is at the end of the Linked List,
      // and as its current.next is null, the Linked List now stops there
    }
  }

  // Add a new node to the beginning of the Linked List
  prepend(data) {
    // first create a new Node with the data given
    const newNode = new Node(data);
    // then assign the current head to be the new Node's .next...
    newNode.next = this.head;
    // and now assign the new Node to be the new head of the Linked List
    this.head = newNode;
  }
  // (you are basically assigning the old this.head to be the new Node's .next
  // and replacing the old this.head with the new Node)

  // Remove the first occurrence of a node with the given data
  delete(data) {
    // If there is no head, the Linked List is empty
    if (!this.head) return;

    // if the head's data is the same as the data given...
    if (this.head.data === data) {
      // this means you want to delete the head.
      // Assign the next element referenced in the head (the second element in the LL)
      // to be the new head/first element, therefore deleting the original head
      this.head = this.head.next;
      return;
    }

    // If neither of those cases is true, then we have to traverse the entire LL
    // beginning with the head, similarly to how we append data
    // while current.next is not null, meaning there is another Node after the current one...
    while (current.next !== null) {
      // if that next Node's data is the data we want to delete...
      if (current.next.data === data) {
        // then assign the next Node's .next to current.next,
        // essentially bypassing the next Node's data/skipping it altogether
        current.next = current.next.next;
        return;
      }
      // if not, then traverse to the next Node
      current = current.next;
    }
  }

  // Find the first occurrence of a node with the given data
  search(data) {
    // We must traverse through the entire LL to find the data, so begin with current = this.head
    let current = this.head;

    // while there is still a current Node...
    while (current !== null) {
      // if the current Node's data is the data we are looking for...
      if (current.data === data) {
        return true; // we found it! Return true
      }
      // If not, then traverse to the next Node
      current = current.next;
    }

    // If the given data was not found in the LL, return false
    return false;
  }

  // Print out entire Linked List
  print() {
    // assign the head to current
    let current = this.head;
    const elements = [];

    // while there is still a current Node...
    while (current !== null) {
      // push current.data to the elements array
      elements.push(current.data);
      // then move to the next node
      current = current.next;
    }

    // after adding all the data to the elements array, print it out with arrows
    // between each node (optional, but looks nice)
    console.log(elements.join(' -> '));
  }
}

// Now, let's actually make a Linked List!
const linkedList = new LinkedList;

// and let's add numbers to it using both the append and prepend methods.
linkedList.append(35);
linkedList.append(69);
linkedList.append(420);
linkedList.prepend(20);
linkedList.print(); // prints out 20 -> 35 -> 69 -> 420 to the console
console.log(linkedList.search(35)); // true, as 35 is in the Linked List
console.log(linkedList.search(50)); // false, there is no 50 in the Linked List
