/*
====================================================
HEIGHT CHECKER
====================================================

PLATFORM REFERENCES:
- LeetCode 1051: Height Checker

----------------------------------------------------
PROBLEM STATEMENT:
Students are standing in a line. Given their current heights,
return how many positions differ from the non-decreasing sorted
order of those heights.

----------------------------------------------------
EXAMPLES:
Input:  [1,1,4,2,1,3]
Output: 3

Input:  [5,1,2,3,4]
Output: 5

----------------------------------------------------
INTUITION:
Compare the current order with the expected sorted order.
Every mismatch represents one student not standing where expected.

----------------------------------------------------
APPROACH:
1. Make a sorted copy of the array.
2. Compare original and sorted arrays index by index.
3. Count how many indexes have different values.

----------------------------------------------------
DRY RUN:
arr  = [1,1,4,2,1,3]
copy = [1,1,1,2,3,4]
index 2 differs: 4 vs 1
index 4 differs: 1 vs 3
index 5 differs: 3 vs 4
count = 3

----------------------------------------------------
TIME COMPLEXITY:
O(n log n), because sorting is used.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because a sorted copy is created.

----------------------------------------------------
EDGE CASES:
- Already sorted array returns 0.
- All equal heights return 0.
- Reverse sorted array may have many mismatches.

====================================================
*/
let arr = [1, 1, 4, 2, 1, 3];
function heightChecker(arr) {
  // Sorted copy represents the expected order.
  let copy = arr.slice().sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== copy[i]) {
      count++;
    }
  }
  return count;
}

console.log(heightChecker(arr));
