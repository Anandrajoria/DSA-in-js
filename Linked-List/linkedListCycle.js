/*
====================================================
LINKED LIST CYCLE
====================================================

PLATFORM REFERENCES:
- LeetCode 141: Linked List Cycle
- Floyd's Cycle Detection Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list, determine whether the linked
list contains a cycle.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40 -> null
Output: false

Input:  A linked list where a node points back to an earlier node
Output: true

----------------------------------------------------
INTUITION:
Use two pointers. If a cycle exists, the fast pointer will
eventually meet the slow pointer inside the cycle.

----------------------------------------------------
APPROACH:
1. Start slow and fast at head.
2. Move slow one step.
3. Move fast two steps.
4. If slow and fast meet, return true.
5. If fast reaches null, return false.

----------------------------------------------------
DRY RUN:
List without cycle:
slow and fast move forward.
fast eventually reaches null.
Return false.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each node is visited at most a constant number of times.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only two pointers are used.

----------------------------------------------------
EDGE CASES:
- Empty list returns false.
- Single node without cycle returns false.
- Single node pointing to itself returns true.

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

LinkedList.prototype.hasCycle=function(){
    let slow=fast=this.head

    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next

        if(slow===fast){
            return true
        }
    }
    return false
}

console.log(list.hasCycle())
