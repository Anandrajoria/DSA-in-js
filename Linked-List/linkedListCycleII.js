/*
====================================================
LINKED LIST CYCLE II
====================================================

PLATFORM REFERENCES:
- LeetCode 142: Linked List Cycle II

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list, return the node where the cycle
begins. If there is no cycle, return null.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40, where 40 points back to 20
Output: 20

----------------------------------------------------
INTUITION:
First detect a cycle using slow and fast pointers. After they
meet, move one pointer to head. Moving both one step at a time
makes them meet at the cycle start.

----------------------------------------------------
APPROACH:
1. Use Floyd's slow and fast pointers.
2. When slow and fast meet, start pt at head.
3. Move pt and slow one step together.
4. Return the node where they meet.
5. Return null if no cycle exists.

----------------------------------------------------
DRY RUN:
10 -> 20 -> 30 -> 40
          ^         |
          |_________|
slow and fast meet inside the cycle.
pt from head and slow from meeting point meet at 20.

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- No cycle returns null.
- Cycle starts at head.
- Single node pointing to itself.

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
list.head.next.next.next.next = list.head.next;

LinkedList.prototype.hasCycle=function(){
    let slow=fast=this.head

    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next

        if(slow===fast){
            let pt=this.head
            while(slow!==pt){
                pt=pt.next
                slow=slow.next
            }
            return pt
        }
    }
    return null
}

console.log(list.hasCycle().val)
