/*
====================================================
PARTITION LIST
====================================================

PLATFORM REFERENCES:
- LeetCode 86: Partition List

----------------------------------------------------
PROBLEM STATEMENT:
Given the head of a linked list and a value x, partition it so
that all nodes less than x come before nodes greater than or
equal to x. Preserve original relative order in both partitions.

----------------------------------------------------
EXAMPLES:
Input:  1 -> 4 -> 3 -> 2 -> 5 -> 2, x = 3
Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5

----------------------------------------------------
INTUITION:
Build two lists: one for values less than x and one for values
greater than or equal to x. Join them at the end.

----------------------------------------------------
APPROACH:
1. Create small and large dummy nodes.
2. Traverse the original list.
3. Append each value to the correct list.
4. Connect small list to large list.
5. Return small dummy's next node.

----------------------------------------------------
DRY RUN:
1,4,3,2,5,2 with x = 3
small: 1 -> 2 -> 2
large: 4 -> 3 -> 5
result: 1 -> 2 -> 2 -> 4 -> 3 -> 5

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because this implementation creates new nodes.

----------------------------------------------------
EDGE CASES:
- All nodes less than x.
- All nodes greater than or equal to x.
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
list.head = new Node(1);
list.head.next = new Node(4);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(2);
list.head.next.next.next.next = new Node(5);
list.head.next.next.next.next.next = new Node(2);

LinkedList.prototype.partition = function (head, x) {
  let smallD = new Node(0);
  let largeD = new Node(0);

  let small = smallD;
  let large = largeD;

    let curr=head
    while(curr){
        if(curr.val<x){
            small.next=new Node(curr.val)
            small=small.next
        }else{
            large.next=new Node(curr.val)
            large=large.next
        }
        curr=curr.next
    }

    large.next=null
    small.next=largeD.next

    return smallD.next
};

let ans = list.partition(list.head, 3);

let curr = ans;

while (curr) {
    console.log(curr.val);
    curr = curr.next;
}
