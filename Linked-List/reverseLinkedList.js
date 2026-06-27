/*
====================================================
REVERSE LINKED LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 206: Reverse Linked List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a singly linked list, reverse the list and
return the new head.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40 -> null
Output: 40 -> 30 -> 20 -> 10 -> null

----------------------------------------------------
INTUITION:
Reverse the direction of each next pointer. Keep track of the
previous node before moving to the next node.

----------------------------------------------------
APPROACH:
1. Start prev as null and curr as head.
2. Save curr.next in temp.
3. Point curr.next to prev.
4. Move prev to curr and curr to temp.
5. Set head to prev.

----------------------------------------------------
DRY RUN:
10 -> 20 -> 30
10 -> null
20 -> 10 -> null
30 -> 20 -> 10 -> null

----------------------------------------------------
TIME COMPLEXITY:
O(n), because every node is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because reversal is done in-place.

----------------------------------------------------
EDGE CASES:
- Empty list remains empty.
- Single-node list remains same.
- Must save next node before changing curr.next.

====================================================
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.reverse = function () {
  let prev = null,
    curr = this.head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  this.head = prev;
  return this.head;
};

LinkedList.prototype.print = function () {
  let curr = this.head;
  let result = "";
  while (curr) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  console.log(result);
};

let list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);
list.head.next.next.next = new Node(40);

list.print();

list.reverse();
list.print();
