/*
====================================================
REMOVE NTH NODE FROM END OF LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 19: Remove Nth Node From End of List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list, remove the nth node from the
end of the list and return the new head.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40, n = 2
Output: 10 -> 20 -> 40

----------------------------------------------------
INTUITION:
Keep a gap of n nodes between fast and slow. When fast reaches
the end, slow is just before the node to remove.

----------------------------------------------------
APPROACH:
1. Create a dummy node before head.
2. Move fast n + 1 steps ahead.
3. Move slow and fast together until fast reaches null.
4. Skip slow.next.
5. Return dummy.next.

----------------------------------------------------
DRY RUN:
10 -> 20 -> 30 -> 40, n = 2
fast moves 3 steps from dummy.
Move both until fast reaches null.
slow is at 20, remove 30.

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Removing the head works because of dummy node.
- Single-node list can become empty.
- n should be valid for the current implementation.

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

LinkedList.prototype.removeNthNode=function(head,n){
    let dummy=new Node(0)
    dummy.next=head
    let slow=dummy
    let fast=dummy

    for(let i=0;i<n+1;i++){
        fast=fast.next
    }
    while(fast){
        fast=fast.next
        slow=slow.next

    }
    slow.next=slow.next.next

    return dummy.next
}

list.removeNthNode(list.head,2)
list.print()
