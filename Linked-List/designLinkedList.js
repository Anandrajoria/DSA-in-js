/*
====================================================
DESIGN LINKED LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 707: Design Linked List

----------------------------------------------------
PROBLEM STATEMENT:
Design a singly linked list that supports getting a value by
index, adding at head, adding at tail, adding at index, and
deleting at index.

----------------------------------------------------
EXAMPLES:
Operations:
addAtHead(10)
addAtTail(20)
addAtTail(30)
get(1)

Output:
20

----------------------------------------------------
INTUITION:
A linked list stores values in nodes. Each node points to the
next node. To access an index, we move node by node from head.

----------------------------------------------------
APPROACH:
1. Create a Node structure with val and next.
2. Track head and size in MyLinkedList.
3. Insert at head by pointing new node to current head.
4. Insert at tail by traversing to the last node.
5. Insert/delete at index by reaching the previous node.

----------------------------------------------------
DRY RUN:
addAtHead(10): 10
addAtTail(20): 10 -> 20
addAtTail(30): 10 -> 20 -> 30
addAtIndex(1, 15): 10 -> 15 -> 20 -> 30
deleteAtIndex(2): 10 -> 15 -> 30

----------------------------------------------------
TIME COMPLEXITY:
get: O(n)
addAtHead: O(1)
addAtTail: O(n)
addAtIndex: O(n)
deleteAtIndex: O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1) extra space per operation.
The list itself uses O(n) space for n nodes.

----------------------------------------------------
EDGE CASES:
- Invalid index for get returns -1.
- Invalid index for add/delete does nothing.
- Adding at index 0 is same as adding at head.
- Adding at index size is same as adding at tail.

====================================================
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;

  this.size += 1;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (idx, val) {
  if (idx < 0 || idx > this.size) return;

  if (idx === 0) {
    this.addAtHead(val);
    return;
  }

  if (idx === this.size) {
    this.addAtTail(val);
    return;
  }

  let newNode = new Node(val);

  let curr = this.head;

  for (let i = 0; i < idx - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;

  this.size++;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
  }

  this.size--;
};

let list = new MyLinkedList();

list.addAtHead(10);
list.addAtTail(20);
list.addAtTail(30);

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));

list.addAtIndex(1, 15);

console.log(list.get(1));

list.deleteAtIndex(2);

console.log(list.get(2));
console.log(list.size);
