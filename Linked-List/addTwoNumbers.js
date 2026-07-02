/*
====================================================
ADD TWO NUMBERS
====================================================

PLATFORM REFERENCES:
- LeetCode 2: Add Two Numbers

----------------------------------------------------
PROBLEM STATEMENT:
Given two non-empty linked lists representing two non-negative
integers in reverse order, add the numbers and return the sum
as a linked list.

----------------------------------------------------
EXAMPLES:
Input:  3 -> 4 -> 9 and 4 -> 8 -> 1 -> 9
Output: 7 -> 2 -> 1 -> 0 -> 1

----------------------------------------------------
INTUITION:
Add digits node by node just like column addition, carrying any
overflow to the next node.

----------------------------------------------------
APPROACH:
1. Use a dummy node for the result list.
2. Traverse both lists while nodes or carry exist.
3. Add current values plus carry.
4. Store digit = sum % 10.
5. Carry = Math.floor(sum / 10).

----------------------------------------------------
DRY RUN:
3 + 4 = 7
4 + 8 = 12 -> digit 2, carry 1
9 + 1 + 1 = 11 -> digit 1, carry 1
0 + 9 + 1 = 10 -> digit 0, carry 1
append 1

----------------------------------------------------
TIME COMPLEXITY:
O(max(m, n))

----------------------------------------------------
SPACE COMPLEXITY:
O(max(m, n)) for the result list.

----------------------------------------------------
EDGE CASES:
- Different length lists.
- Final carry creates an extra node.
- One list can become null before the other.

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

let list1 = new LinkedList();
list1.head = new Node(3);
list1.head.next = new Node(4);
list1.head.next.next = new Node(9);

let list2 = new LinkedList();
list2.head = new Node(4);
list2.head.next = new Node(8);
list2.head.next.next = new Node(1);
list2.head.next.next.next = new Node(9);

LinkedList.prototype.addTwoNumbers=function(l1,l2){
    let ans=new Node(0)
    let result=ans
    let carry=0

    while(l1||l2||carry){
        let sum=(!l1?0:l1.val)+(!l2?0:l2.val)+carry
        carry=Math.floor(sum/10)
        let digit= sum%10

        let newNode=new Node(digit)
        ans.next=newNode
        ans=ans.next
        l1=l1&&l1.next
        l2=l2&&l2.next
    }

    return result.next
}

let result = new LinkedList();

result.head = list1.addTwoNumbers(list1.head, list2.head);

result.print();
