/*
====================================================
LINKED LIST TO ARRAY
====================================================

PLATFORM REFERENCES:
- Linked List Fundamentals

----------------------------------------------------
PROBLEM STATEMENT:
Convert a singly linked list into an array of node values.

----------------------------------------------------
EXAMPLES:
Input:  10 -> 20 -> 30 -> 40 -> null
Output: [10,20,30,40]

----------------------------------------------------
INTUITION:
Traverse the list from head to null and push every value into
an array.

----------------------------------------------------
APPROACH:
1. Start curr at head.
2. Create an empty array.
3. Push curr.val while curr exists.
4. Move curr to curr.next.
5. Return the array.

----------------------------------------------------
DRY RUN:
10 -> 20 -> null
push 10
push 20
return [10,20]

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because an output array is created.

----------------------------------------------------
EDGE CASES:
- Empty list returns [].
- Single node returns one value.

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

list.head=new Node(10)
list.head.next=new Node(20)
list.head.next.next=new Node(30)
list.head.next.next.next=new Node(40)

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

LinkedList.prototype.ListToArr=function(){
    let arr=[]

    let curr=this.head
    while(curr){
        arr.push(curr.val)
        curr=curr.next
    }
    return arr
}
console.log(list.ListToArr())
console.log(list.print())
