/*
====================================================
SINGLE NUMBER
====================================================

PLATFORM REFERENCES:
- LeetCode 136: Single Number

----------------------------------------------------
PROBLEM STATEMENT:
Given a non-empty array where every element appears twice
except for one, find the element that appears only once.

----------------------------------------------------
EXAMPLES:
Input:  [2,2,1]
Output: 1

Input:  [4,1,2,1,2]
Output: 4

----------------------------------------------------
INTUITION:
XOR cancels equal numbers because x ^ x = 0, and 0 ^ x = x.
After XORing all values, only the single number remains.

----------------------------------------------------
APPROACH:
1. Start result as 0.
2. Traverse every number.
3. XOR result with current number.
4. Return result.

----------------------------------------------------
DRY RUN:
arr = [2,2,1]
result = 0
0 ^ 2 = 2
2 ^ 2 = 0
0 ^ 1 = 1
Return 1.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only one variable is used.

----------------------------------------------------
EDGE CASES:
- Works with negative numbers too.
- Assumes exactly one value does not have a duplicate.
- Single-element array returns that element.

====================================================
*/

let arr=[1,1,2,2,1]

function singleNum(arr){
    let result=0
    for(let i=0;i<arr.length;i++){
        result^=arr[i]
    }
    return result
}

console.log(singleNum(arr));
