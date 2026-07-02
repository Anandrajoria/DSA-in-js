/*
====================================================
ADD TWO NUMBERS II
====================================================

PLATFORM REFERENCES:
- LeetCode 445: Add Two Numbers II

----------------------------------------------------
PROBLEM STATEMENT:
Given two linked lists representing numbers in forward order,
add them and return the sum as a linked list in forward order.

----------------------------------------------------
EXAMPLES:
Input:  7 -> 2 -> 4 -> 3 and 5 -> 6 -> 4
Output: 7 -> 8 -> 0 -> 7

----------------------------------------------------
INTUITION:
Since digits are in forward order, store values first, add from
the end, then build the result list.

----------------------------------------------------
APPROACH:
1. Copy both lists into arrays.
2. Traverse arrays from the end.
3. Add digits with carry.
4. Reverse the result digits.
5. Build a linked list from the result.

----------------------------------------------------
DRY RUN:
7243 + 564 = 7807
arrays are added from right to left.

----------------------------------------------------
TIME COMPLEXITY:
O(m + n)

----------------------------------------------------
SPACE COMPLEXITY:
O(m + n)

----------------------------------------------------
EDGE CASES:
- Different length lists.
- Final carry.
- Empty result returns null.

====================================================
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}
let list1 = new LinkedList();
list1.head = new Node(7);
list1.head.next = new Node(2);
list1.head.next.next = new Node(4);
list1.head.next.next.next = new Node(3);

let list2 = new LinkedList();
list2.head = new Node(5);
list2.head.next = new Node(6);
list2.head.next.next = new Node(4);

LinkedList.prototype.print = function () {
  let current = this.head;
  let output = "";
  while (current !== null) {
    output += current.val + " -> ";
    current = current.next;
  }
  output += "null";
  return output;
};

LinkedList.prototype.addTwoNumber = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];

  let curr1 = l1;
  let curr2 = l2;

  while (curr1 || curr2) {
    if (curr1) {
      arr1.push(curr1.val);
      curr1 = curr1.next;
    }
    if (curr2) {
      arr2.push(curr2.val);
      curr2 = curr2.next;
    }
  }

  let i = arr1.length - 1;
  let j = arr2.length - 1;

  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry) {
    let x = i >= 0 ? arr1[i] : 0;
    let y = j >= 0 ? arr2[j] : 0;

    let sum = x + y + carry;
    let digit = sum % 10;

    result.push(digit);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }
  result.reverse();

  if (result.length == 0) return null;

  let dummy = new Node(0);
  let tail = dummy;

  for (let i = 0; i < result.length; i++) {
    tail.next = new Node(result[i]);
    tail = tail.next;
  }

  return dummy.next;
};

let ans = list1.addTwoNumber(list1.head, list2.head);

let resultList = new LinkedList();
resultList.head = ans;

console.log(resultList.print());
