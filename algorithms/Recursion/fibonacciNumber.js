/*
====================================================
FIBONACCI NUMBER
====================================================

PLATFORM REFERENCES:
- LeetCode 509: Fibonacci Number
- Basic Recursion

----------------------------------------------------
PROBLEM STATEMENT:
Given n, return the nth Fibonacci number. The sequence starts
with fib(0) = 0 and fib(1) = 1.

----------------------------------------------------
EXAMPLES:
Input:  4
Output: 3

Input:  2
Output: 1

----------------------------------------------------
INTUITION:
Every Fibonacci number is the sum of the previous two numbers.

----------------------------------------------------
APPROACH:
1. If n is 0, return 0.
2. If n is 1, return 1.
3. Return fib(n - 1) + fib(n - 2).

----------------------------------------------------
DRY RUN:
fib(4)
= fib(3) + fib(2)
= 2 + 1
= 3

----------------------------------------------------
TIME COMPLEXITY:
O(2^n), because plain recursion repeats subproblems.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because recursion depth can reach n.

----------------------------------------------------
EDGE CASES:
- fib(0) returns 0.
- fib(1) returns 1.
- Large n is slow without memoization.

====================================================
*/

function fib(n) {
    if(n==0) return 0
    if(n==1) return 1


    return fib(n-1)+fib(n-2)
};

console.log(fib(4));
