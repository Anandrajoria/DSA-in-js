/*
====================================================
SUM OF ARRAY USING RECURSION
====================================================

PLATFORM REFERENCES:
- Basic Recursion / Arrays

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, calculate the sum of its elements using
recursion. This file also shows a variation that sums only
odd numbers.

----------------------------------------------------
EXAMPLES:
Input:  [1,2,3,4,5]
Output: 15

Odd-only output: 9

----------------------------------------------------
INTUITION:
The sum up to index n is the current element plus the sum up
to index n - 1.

----------------------------------------------------
APPROACH:
1. Use n as the current index.
2. Base case: when n is 0, return arr[0].
3. Recursive case: return current value + sum of previous values.
4. For odd-only sum, add arr[n] only when it is odd.

----------------------------------------------------
DRY RUN:
arr = [1,2,3]
sumAll(2) = arr[2] + sumAll(1)
sumAll(1) = arr[1] + sumAll(0)
sumAll(0) = arr[0]
Answer = 3 + 2 + 1 = 6

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each index is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because recursion uses call stack space.

----------------------------------------------------
EDGE CASES:
- Empty arrays need separate handling.
- Single-element arrays return that element.
- Odd-only sum returns 0 when no odd number exists.

====================================================
*/

let arr=[1,2,3,4,5]

function sumAll(n){
    if(n==0) return arr[n]
    return arr[n]+sumAll(n-1)
}

console.log(sumAll(arr.length-1));

function sumOdd(n){
    if(n==0) return arr[n]%2!==0 ? arr[n] : 0

    return (arr[n]%2!==0?arr[n]:0 )+sumOdd(n-1)
}

console.log(sumOdd(arr.length-1));
