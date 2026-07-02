/*
====================================================
ARRAY TO LINKED LIST
====================================================

PLATFORM REFERENCES:
- Linked List Fundamentals

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, convert it into a singly linked list.

----------------------------------------------------
EXAMPLES:
Input:  [1,2,3,4,5]
Output: 1 -> 2 -> 3 -> 4 -> 5 -> null

----------------------------------------------------
INTUITION:
Create the first node as head, then keep a tail pointer to append
new nodes efficiently.

----------------------------------------------------
APPROACH:
1. Return if array is empty.
2. Create head from arr[0].
3. Use tail to append remaining values.
4. Return head.

----------------------------------------------------
DRY RUN:
[1,2,3]
head = 1
append 2
append 3

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n) for the linked list nodes.

----------------------------------------------------
EDGE CASES:
- Empty array returns undefined.
- Single value array creates one node.
- Existing list head is overwritten.

====================================================
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}
let list = new LinkedList();

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

let arr=[1,2,3,4,5]

LinkedList.prototype.arrToList=function(arr){
    if(arr.length==0) return

    let newNode=new Node(arr[0])
    this.head=newNode
    let tail=this.head

    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i])
        tail.next=newNode
        tail=tail.next

    }
    return this.head
}
list.arrToList(arr)
console.log(list.print())
