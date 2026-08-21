/*
====================================================
IMPLEMENT STACK USING QUEUES
====================================================

PLATFORM REFERENCES:
- LeetCode 225: Implement Stack using Queues

----------------------------------------------------
PROBLEM STATEMENT:
Implement a last-in-first-out stack using queue operations.
Support push, pop, top, and empty.

----------------------------------------------------
EXAMPLES:
push(10), push(20), push(30)
top() -> 30
pop() -> 30
top() -> 20

----------------------------------------------------
INTUITION:
To pop like a stack, move all earlier elements to a second queue
until only the newest element remains.

----------------------------------------------------
APPROACH:
1. Push directly into q1.
2. For pop, move q1 elements except the last into q2.
3. Remove the last element as stack top.
4. Swap q1 and q2.
5. For top, do the same but push the removed front back.

----------------------------------------------------
DRY RUN:
q1 = [10,20,30]
pop moves 10 and 20 to q2.
30 is removed.
q1 becomes [10,20].

----------------------------------------------------
TIME COMPLEXITY:
push: O(1)
pop: O(n)
top: O(n)
empty: O(1)

----------------------------------------------------
SPACE COMPLEXITY:
O(n)

----------------------------------------------------
EDGE CASES:
- pop/top on empty stack need guard handling in production code.
- Queue shift() is O(n) in JavaScript arrays.

====================================================
*/

function myStack(){
    this.q1=[]
    this.q2=[]
}

myStack.prototype.push=function(x){
    this.q1.push(x)
}

myStack.prototype.pop=function(){
    let n=this.q1.length

    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift())
    }
    let ans=this.q1.shift()

    let temp=this.q1
    this.q1=this.q2
    this.q2=temp

    return ans
}

myStack.prototype.top=function(){
    let n=this.q1.length
    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift())
    }
    let front=this.q1.shift()
    this.q2.push(front)

    let temp=this.q1
    this.q1=this.q2
    this.q2=temp

    return front
}

myStack.prototype.empty=function(){
    return this.q1.length===0
}

let stack = new myStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("q1:", stack.q1);
console.log("q2:", stack.q2);

console.log("top:", stack.top());

console.log("pop:", stack.pop());

console.log("top:", stack.top());

console.log("empty:", stack.empty());

console.log("q1:", stack.q1);
console.log("q2:", stack.q2);



