/*
====================================================
REMOVE LINKED LIST ELEMENTS
====================================================

PLATFORM REFERENCES:
- LeetCode 203: Remove Linked List Elements

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list and a target value, remove all
nodes whose value equals the target.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 30, target = 30
Output: 10 -> 20

----------------------------------------------------
INTUITION:
A sentinel node before the head makes deletion easier, including
cases where the head itself must be removed.

----------------------------------------------------
APPROACH:
1. Create a sentinel node pointing to head.
2. Use prev to inspect prev.next.
3. If prev.next has target value, skip that node.
4. Otherwise move prev forward.
5. Return sentinel.next as the new head.

----------------------------------------------------
DRY RUN:
10 -> 20 -> 30 -> 30, target = 30
prev at 20 sees next 30, skips it.
prev still at 20 sees next 30, skips it.
Return 10 -> 20.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each node is checked once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only pointers are used.

----------------------------------------------------
EDGE CASES:
- Removing head nodes works because of sentinel.
- All nodes may be removed.
- Empty list returns null.

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
list.head.next.next=new Node(30)
list.head.next.next.next=new Node(30)
list.head.next.next.next.next=new Node(30)
list.head.next.next.next.next.next=new Node(30)

LinkedList.prototype.removeElement=function(head,target){

    let sentinalNode=new Node(0)
    sentinalNode.next=head

    let prev=sentinalNode
    while(prev&&prev.next){
        if(prev.next.val==target){
            prev.next=prev.next.next
        }
        else{
            prev=prev.next
        }
    }
    return sentinalNode.next
}

list.removeElement(list.head,30)
list.print()
