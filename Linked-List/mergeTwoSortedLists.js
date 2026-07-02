/*
====================================================
MERGE TWO SORTED LISTS
====================================================

PLATFORM REFERENCES:
- LeetCode 21: Merge Two Sorted Lists

----------------------------------------------------
PROBLEM STATEMENT:
Given heads of two sorted linked lists, merge them into one
sorted linked list.

----------------------------------------------------
EXAMPLES:
Input:  1 -> 2 -> 4 and 1 -> 3 -> 4 -> 7
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 7

----------------------------------------------------
INTUITION:
Use a dummy node and repeatedly attach the smaller current node.

----------------------------------------------------
APPROACH:
1. Create dummy start node.
2. Compare l1 and l2 values.
3. Attach smaller node to curr.next.
4. Move that list pointer.
5. Attach remaining nodes.

----------------------------------------------------
DRY RUN:
1 and 1 -> take second 1
1 and 3 -> take first 1
2 and 3 -> take 2
4 and 3 -> take 3
attach remaining values.

----------------------------------------------------
TIME COMPLEXITY:
O(m + n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1) extra space.

----------------------------------------------------
EDGE CASES:
- One list empty.
- Both lists empty.
- Duplicate values are preserved.

====================================================
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

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

let list1 = new LinkedList();
list1.head = new Node(1);
list1.head.next = new Node(2);
list1.head.next.next = new Node(4);

let list2 = new LinkedList();
list2.head = new Node(1);
list2.head.next = new Node(3);
list2.head.next.next = new Node(4);
list2.head.next.next.next = new Node(7);

LinkedList.prototype.mergeSortedLists = function (l1, l2) {
  let start = new Node(0);
  let curr = start;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) {
    curr.next = l2;
  }
  if (!l2) {
    curr.next = l1;
  }
  return start.next;
};
let result = new LinkedList();

result.head = list1.mergeSortedLists(list1.head, list2.head);

result.print();
