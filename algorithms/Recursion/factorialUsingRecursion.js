/*
====================================================
FACTORIAL USING RECURSION
====================================================

PLATFORM REFERENCES:
- Basic Recursion / Math

----------------------------------------------------
PROBLEM STATEMENT:
Given a non-negative integer n, calculate n factorial.
Factorial is defined as n * (n - 1) * ... * 1.

----------------------------------------------------
EXAMPLES:
Input:  4
Output: 24

Input:  0
Output: 1

----------------------------------------------------
INTUITION:
Factorial has a recursive pattern: n! = n * (n - 1)!.
The recursion stops at 0 or 1.

----------------------------------------------------
APPROACH:
1. If n is 0 or 1, return 1.
2. Otherwise return n * factorial(n - 1).

----------------------------------------------------
DRY RUN:
factorial(4)
= 4 * factorial(3)
= 4 * 3 * factorial(2)
= 4 * 3 * 2 * factorial(1)
= 24

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the function calls itself n times.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because recursion uses call stack space.

----------------------------------------------------
EDGE CASES:
- 0! is 1.
- 1! is 1.
- Negative numbers need separate validation in production code.

====================================================
*/

function factorial(n){
    if (n==1||n==0)return 1

    return n * factorial(n-1)
}
console.log(factorial(4));
