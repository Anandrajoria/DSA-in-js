/*
====================================================
NTH TRIBONACCI NUMBER
====================================================

PLATFORM REFERENCES:
- LeetCode 1137: N-th Tribonacci Number

----------------------------------------------------
PROBLEM STATEMENT:
Return the nth Tribonacci number, where T0 = 0, T1 = 1,
T2 = 1, and Tn = Tn-1 + Tn-2 + Tn-3.

----------------------------------------------------
EXAMPLES:
Input:  5
Output: 7

----------------------------------------------------
INTUITION:
Like Fibonacci, but each value depends on the previous three
values instead of the previous two.

----------------------------------------------------
APPROACH:
1. Return base values for n = 0, 1, and 2.
2. Recursively return the sum of previous three calls.

----------------------------------------------------
DRY RUN:
T5 = T4 + T3 + T2 = 4 + 2 + 1 = 7

----------------------------------------------------
TIME COMPLEXITY:
O(3^n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n)

----------------------------------------------------
EDGE CASES:
- n = 0 returns 0.
- n = 1 or 2 returns 1.
- Large n should use memoization or iteration.

====================================================
*/

function tribonacciNum(n){
    if(n==0) return 0
    if(n==1||n==2) return 1

    return tribonacciNum(n-1)+tribonacciNum(n-2)+tribonacciNum(n-3)
}

console.log(tribonacciNum(5));
