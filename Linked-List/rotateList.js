/*
====================================================
ROTATE LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 61: Rotate List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list, rotate the list to the right by k places.

----------------------------------------------------
EXAMPLES:
Input:  1 -> 2 -> 4 -> 5 -> 6, k = 2
Output: 5 -> 6 -> 1 -> 2 -> 4

----------------------------------------------------
INTUITION:
Make the list circular, then break it at the new tail position.

----------------------------------------------------
APPROACH:
1. Count list length n.
2. Normalize k using k % n.
3. Connect tail to head.
4. Move to the new tail at n - k - 1.
5. Break the circle and return new head.

----------------------------------------------------
DRY RUN:
1 -> 2 -> 4 -> 5 -> 6, k = 2
new tail is 4
new head is 5
result: 5 -> 6 -> 1 -> 2 -> 4

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty list.
- One-node list.
- k multiple of length returns original head.

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

LinkedList.prototype.rotateList = function (head,k) {
    if (!head || !head.next) {
    return head;
}
    let curr=head
    let n=0

    while(curr){
        n++
        curr=curr.next
    }

    k=k%n
    if(k==0) return head
    curr=head

    while(curr.next){
        curr=curr.next
    }
    curr.next=head
    curr=head
    for(let i=0;i<n-k-1;i++){
        curr=curr.next
    }
    let newHead=curr.next
    curr.next=null
    return newHead
};

list.head=list.rotateList(list.head,2);
list.print();
