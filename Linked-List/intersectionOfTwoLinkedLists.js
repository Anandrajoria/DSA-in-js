/*
====================================================
INTERSECTION OF TWO LINKED LISTS
====================================================

PLATFORM REFERENCES:
- LeetCode 160: Intersection of Two Linked Lists

----------------------------------------------------
PROBLEM STATEMENT:
Given the heads of two singly linked lists, find the node where
the two lists intersect. If there is no intersection, return null.

----------------------------------------------------
EXAMPLES:
List A: 10 -> 20 -> 30 -> 40
List B: 11 -> 22 -> 30 -> 40
Output: 30

----------------------------------------------------
INTUITION:
If two pointers traverse both lists one after another, they cover
the same total distance. If an intersection exists, they meet at
the intersection node.

----------------------------------------------------
APPROACH:
1. Start pA at headA and pB at headB.
2. Move both pointers one step at a time.
3. When pA reaches null, move it to headB.
4. When pB reaches null, move it to headA.
5. When pA === pB, return the intersection.

----------------------------------------------------
DRY RUN:
A: 10 -> 20 -> 30 -> 40
B: 11 -> 22 -> 30 -> 40
Both pointers switch lists after reaching null.
They meet at node 30.

----------------------------------------------------
TIME COMPLEXITY:
O(m + n), where m and n are the lengths of the lists.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only two pointers are used.

----------------------------------------------------
EDGE CASES:
- No intersection returns null.
- One list may be empty.
- Intersection is by node reference, not by equal value.

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

let common = new Node(30);
common.next = new Node(40);

let list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = common;

let list2 = new LinkedList();
list2.head = new Node(11);
list2.head.next = new Node(22);
list2.head.next.next = common;

LinkedList.prototype.getIntersectionNode=function(headA,headB){
    let pA=headA, pB=headB

    while(pA!==pB){
        pA=pA===null?headB:pA.next
        pB=pB===null?headA:pB.next
    }
    return pA.val
}

list.print()
let ans=(list.getIntersectionNode(list.head,list2.head))

console.log(ans);
