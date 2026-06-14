/*
====================================================
POWER OF TWO
====================================================

PLATFORM REFERENCES:
- LeetCode 231: Power of Two

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer n, return true if it is a power of two.
Otherwise return false.

----------------------------------------------------
EXAMPLES:
Input:  4
Output: true

Input:  3
Output: false

----------------------------------------------------
INTUITION:
Powers of two have exactly one set bit in binary. For such
numbers, n & (n - 1) becomes 0.

----------------------------------------------------
APPROACH:
1. Check n > 0.
2. Use bit trick: (n & (n - 1)) === 0.
3. Return true only when both conditions are true.

----------------------------------------------------
DRY RUN:
n = 4
4 in binary = 100
3 in binary = 011
100 & 011 = 000
Return true.

----------------------------------------------------
TIME COMPLEXITY:
O(1), because only one bit operation is used.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because no extra space is used.

----------------------------------------------------
EDGE CASES:
- n = 1 returns true.
- n = 0 returns false.
- Negative numbers return false.

====================================================
*/

function powerOfTwo(n) {
    return n>0 && (n&(n-1))===0
}

console.log(powerOfTwo(4));
