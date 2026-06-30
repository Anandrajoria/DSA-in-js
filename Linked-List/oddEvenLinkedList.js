/*
====================================================
ODD EVEN LINKED LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 328: Odd Even Linked List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a singly linked list, group all nodes at odd
positions together followed by all nodes at even positions.
The relative order inside both groups must stay the same.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40 -> 50 -> 60
Output: 10 -> 30 -> 50 -> 20 -> 40 -> 60

----------------------------------------------------
INTUITION:
Maintain two chains: one for odd-position nodes and one for
even-position nodes. Connect the odd chain to the even chain
at the end.

----------------------------------------------------
APPROACH:
1. Start odd at head and even at head.next.
2. Save evenStart to connect later.
3. Move odd links over even nodes.
4. Move even links over odd nodes.
5. Connect odd.next to evenStart.

----------------------------------------------------
DRY RUN:
10 -> 20 -> 30 -> 40 -> 50 -> 60
Odd chain: 10 -> 30 -> 50
Even chain: 20 -> 40 -> 60
Combined: 10 -> 30 -> 50 -> 20 -> 40 -> 60

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each node is rewired once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because nodes are rearranged in-place.

----------------------------------------------------
EDGE CASES:
- Empty list returns head.
- One-node list returns head.
- Two-node list remains in the same order.

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

let list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);
list.head.next.next.next = new Node(40);
list.head.next.next.next.next  = new Node(50);
list.head.next.next.next.next.next  = new Node(60);

LinkedList.prototype.oddEven=function(head){
    if(!head||!head.next) return head
    let odd=head
    let even=head.next
    let evenStart=even

    while(even && even.next){
        odd.next=even.next
        odd=odd.next
        even.next=odd.next
        even=even.next
    }
    odd.next=evenStart
    return head
}

list.oddEven(list.head)
list.print()
