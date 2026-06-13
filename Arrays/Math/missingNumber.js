/*
====================================================
MISSING NUMBER
====================================================

PLATFORM REFERENCES:
- LeetCode 268: Missing Number

----------------------------------------------------
PROBLEM STATEMENT:
Given an array containing n distinct numbers in the range
0 to n, return the only number in the range that is missing.

----------------------------------------------------
EXAMPLES:
Input:  [1,0]
Output: 2

Input:  [3,0,1]
Output: 2

----------------------------------------------------
INTUITION:
The sum of numbers from 0 to n is known by formula. The missing
number is expectedSum - actualSum.

----------------------------------------------------
APPROACH:
1. Calculate expectedSum using n * (n + 1) / 2.
2. Traverse the array and calculate actual sum.
3. Return expectedSum - sum.

----------------------------------------------------
DRY RUN:
arr = [1,0]
n = 2
expectedSum = 2 * 3 / 2 = 3
sum = 1
missing = 3 - 1 = 2

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only sum variables are used.

----------------------------------------------------
EDGE CASES:
- Missing 0 works.
- Missing n works.
- Array with one value works.

====================================================
*/

let arr = [1, 0];

function missingNumber(arr) {
  let expectedSum = (arr.length * (arr.length + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return expectedSum - sum;
}

console.log(missingNumber(arr));
