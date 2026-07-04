/*
====================================================
REVERSE LINKED LIST II
====================================================

PLATFORM REFERENCES:
- LeetCode 92: Reverse Linked List II

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list and two positions left and right,
reverse the nodes from left to right in-place and return the head.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40, left = 2, right = 3
Output: 10 -> 30 -> 20 -> 40

----------------------------------------------------
INTUITION:
Use a dummy node to handle reversing from the head. Move nodes
after curr to the front of the reversed section one by one.

----------------------------------------------------
APPROACH:
1. Create dummy before head.
2. Move prev to the node before left.
3. Let curr be prev.next.
4. Repeatedly take curr.next and insert it after prev.
5. Return dummy.next.

----------------------------------------------------
DRY RUN:
10 -> 20 -> 30 -> 40
left = 2, right = 3
move 30 before 20
result: 10 -> 30 -> 20 -> 40

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- left equals right returns same list.
- Reversal starts at head.
- Empty list needs guard handling in production code.

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

list.print();

LinkedList.prototype.reverse = function (head,left,right) {
    let dummy=new Node(0)
    dummy.next=head

    let prev=dummy

    for(let i=1;i<left;i++){
        prev=prev.next
    }

    let curr=prev.next
    for(let i=0;i<right-left;i++){
        let temp=curr.next

        curr.next=temp.next
        temp.next=prev.next
        prev.next=temp
    }
    return dummy.next
};

list.head=list.reverse(list.head,2,3);
list.print();
