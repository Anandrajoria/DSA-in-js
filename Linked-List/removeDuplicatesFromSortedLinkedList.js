/*
====================================================
REMOVE DUPLICATES FROM SORTED LINKED LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 83: Remove Duplicates from Sorted List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a sorted linked list, delete all duplicate
values so each value appears only once.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 10 -> 30 -> 40
Output: 10 -> 30 -> 40

----------------------------------------------------
INTUITION:
Because the list is sorted, duplicate values are adjacent.
Compare each node with its next node and skip duplicates.

----------------------------------------------------
APPROACH:
1. Start curr at head.
2. While curr and curr.next exist, compare their values.
3. If equal, skip curr.next.
4. Otherwise move curr forward.
5. Return head.

----------------------------------------------------
DRY RUN:
10 -> 10 -> 30 -> 40
curr = 10 and curr.next = 10, skip next.
List becomes 10 -> 30 -> 40.

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty list returns null.
- Single-node list remains unchanged.
- All duplicate nodes collapse to one node.

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
list.head.next = new Node(10);
list.head.next.next = new Node(30);
list.head.next.next.next = new Node(40);

LinkedList.prototype.removeDuplicate=function(){
    let curr=this.head
    while(curr &&curr.next){
        if(curr.val==curr.next.val){
            curr.next=curr.next.next
        }else{
            curr=curr.next
        }
    }
    return this.head
}

list.print()
list.removeDuplicate()
list.print()
