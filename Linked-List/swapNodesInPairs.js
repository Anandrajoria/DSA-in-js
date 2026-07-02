/*
====================================================
SWAP NODES IN PAIRS
====================================================

PLATFORM REFERENCES:
- LeetCode 24: Swap Nodes in Pairs

----------------------------------------------------
PROBLEM STATEMENT:
Given a linked list, swap every two adjacent nodes and return
the modified list.

----------------------------------------------------
EXAMPLES:
Input:  1 -> 2 -> 4 -> 5 -> 6
Output: 2 -> 1 -> 5 -> 4 -> 6

----------------------------------------------------
INTUITION:
Use a dummy node before head so pair swapping also works for
the first pair.

----------------------------------------------------
APPROACH:
1. Create dummy pointing to head.
2. Track previous node p, current c, and next n.
3. Rewire p -> n -> c.
4. Move p to c and continue.

----------------------------------------------------
DRY RUN:
1 -> 2 -> 4 -> 5
swap 1 and 2 -> 2 -> 1 -> 4 -> 5
swap 4 and 5 -> 2 -> 1 -> 5 -> 4

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty list.
- Single node remains same.
- Odd final node remains in place.

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
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(4);
list.head.next.next.next = new Node(5);
list.head.next.next.next.next = new Node(6);

LinkedList.prototype.swapList = function () {
    if(!this.head||!this.head.next) return this.head

    let dummy=new Node(0)
    dummy.next=this.head

    let p=dummy
    let c=this.head
    let n=this.head.next

    while(c && n){
        p.next=n
        c.next=n.next
        n.next=c
        p=c
        c=p.next
        n=c && c.next
    }
    this.head=dummy.next
};

list.swapList();
list.print();
