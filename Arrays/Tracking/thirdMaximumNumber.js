/*
====================================================
THIRD MAXIMUM NUMBER
====================================================

PLATFORM REFERENCES:
- LeetCode 414: Third Maximum Number

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array, return the third distinct maximum
number. If the third maximum does not exist, return the
maximum number.

----------------------------------------------------
EXAMPLES:
Input:  [3,2,1]
Output: 1

Input:  [1,2]
Output: 2

Input:  [6,5,5,3]
Output: 3

----------------------------------------------------
INTUITION:
Track the top three distinct values while scanning once.
Duplicates must be skipped so they do not occupy multiple ranks.

----------------------------------------------------
APPROACH:
1. Initialize first, second, and third as -Infinity.
2. Skip values already equal to one of the top three.
3. If current value is greater than first, shift ranks down.
4. Else update second or third when appropriate.
5. Return third if it exists; otherwise return first.

----------------------------------------------------
DRY RUN:
arr = [6,5,5,3]
6 -> first = 6
5 -> second = 5
5 -> duplicate, skip
3 -> third = 3
Return 3.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only three variables are used.

----------------------------------------------------
EDGE CASES:
- Duplicates should be counted once.
- Fewer than three distinct values returns maximum.
- Negative numbers work with -Infinity initialization.

====================================================
*/
let arr = [6, 5, 5, 3];




function thirdMax(arr) {
  // Keep the top three distinct values without sorting.
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i]===first||arr[i]===second||arr[i]===third){
        continue;
    }
    if (arr[i] > first) {
        // New largest value pushes old first and second down.
        third=second
        second=first
        first=arr[i]

    } else if (arr[i] > second) {
      third=second
      second=arr[i]
    } else if (arr[i] > third) {
      third=arr[i]
    }
  }
  return third === -Infinity ? first : third;
}

console.log(thirdMax(arr));
