/*
====================================================
MIDDLE OF THE LINKED LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 876: Middle of the Linked List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a singly linked list, return the middle node.
If there are two middle nodes, return the second middle node.

----------------------------------------------------
EXAMPLES:
Input:  1 -> 2 -> 3 -> 4 -> 5
Output: 3

Input:  1 -> 2 -> 3 -> 4 -> 5 -> 6
Output: 4

----------------------------------------------------
INTUITION:
Use two pointers. The slow pointer moves one step at a time,
while the fast pointer moves two steps. When fast reaches the
end, slow is at the middle.

----------------------------------------------------
APPROACH:
1. Start slow and fast at head.
2. Move slow by one node.
3. Move fast by two nodes.
4. Stop when fast is null or fast.next is null.
5. Return slow.

----------------------------------------------------
DRY RUN:
List: 1 -> 2 -> 3 -> 4 -> 5
slow = 1, fast = 1
slow = 2, fast = 3
slow = 3, fast = 5
fast.next is null, return slow = 3.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each pointer traverses the list linearly.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only two pointers are used.

----------------------------------------------------
EDGE CASES:
- Single-node list returns the same node.
- Even-length list returns the second middle.
- Empty list returns null.

====================================================
*/

function ListNode(val){
    this.val=val
    this.next=null
}

var middleNode=function(head){
    let slow=head
    let fast=head

    while(fast!==null && fast.next!==null){
        slow=slow.next
        fast=fast.next.next
    }
    return slow
}

let head=new ListNode(1)
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let ans=middleNode(head)
console.log(ans);
console.log(ans.val);
