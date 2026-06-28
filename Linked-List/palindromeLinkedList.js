/*
====================================================
PALINDROME LINKED LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 234: Palindrome Linked List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a singly linked list, determine whether the
list values form a palindrome.

----------------------------------------------------
EXAMPLES:
Input:  1 -> 2 -> 2 -> 1
Output: true

Input:  10 -> 20 -> 30 -> 40
Output: false

----------------------------------------------------
INTUITION:
Find the middle, reverse the second half, then compare the first
half and reversed second half node by node.

----------------------------------------------------
APPROACH:
1. Use slow and fast pointers to find the middle.
2. Reverse the second half starting at slow.
3. Compare values from head and from reversed half.
4. Return false on mismatch, otherwise true.

----------------------------------------------------
DRY RUN:
1 -> 2 -> 2 -> 1
Middle starts at second 2.
Reverse second half: 1 -> 2
Compare with first half: 1 == 1, 2 == 2.
Return true.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the list is traversed a constant number of times.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because the second half is reversed in-place.

----------------------------------------------------
EDGE CASES:
- Empty or single-node list is palindrome.
- Odd-length lists compare through the middle safely.
- The current implementation does not restore the list afterward.

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

LinkedList.prototype.isPalindrome=function(){
    let slow=fast=this.head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    let prev=null, curr=slow

    while(curr){
        let temp=curr.next
        curr.next=prev
        prev=curr
        curr=temp
    }

    let first=this.head
    let second=prev

    while(second){
        if(first.val!==second.val){
            return false
        }
        first=first.next
        second=second.next
    }

    return true

}

list.print()
console.log(list.isPalindrome())
