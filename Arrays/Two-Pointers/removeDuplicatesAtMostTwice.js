/*
====================================================
REMOVE DUPLICATES FROM SORTED ARRAY II
====================================================

PLATFORM REFERENCES:
- LeetCode 80: Remove Duplicates from Sorted Array II

----------------------------------------------------
PROBLEM STATEMENT:
Given a sorted array, remove extra duplicates in-place so
that each unique value appears at most twice. Return the new
valid length.

----------------------------------------------------
EXAMPLES:
Input:  [1,1,1,2,2,3]
Output: 5
Valid part: [1,1,2,2,3]

Input:  [0,0,1,1,1,1,2,3,3]
Output: 7
Valid part: [0,0,1,1,2,3,3]

----------------------------------------------------
INTUITION:
Because the array is sorted, duplicates are grouped together.
If the current value equals the element two places behind the
write pointer, it has already been kept twice.

----------------------------------------------------
APPROACH:
1. Use x as the write pointer.
2. Traverse each value using i.
3. Always keep the first two elements.
4. For later elements, keep arr[i] only if arr[i] !== arr[x - 2].
5. Return x as the new valid length.

----------------------------------------------------
DRY RUN:
arr = [1,1,1,2,2,3]
x = 0 -> keep 1
x = 1 -> keep 1
next 1 equals arr[x - 2], skip
2 differs from arr[0], keep
2 differs from arr[1], keep
3 differs from arr[2], keep
x = 5

----------------------------------------------------
TIME COMPLEXITY:
O(n), because every element is visited once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because no extra array is used.

----------------------------------------------------
EDGE CASES:
- Array length 0, 1, or 2 can keep all values.
- All values equal should keep only two.
- Already valid array remains valid.

====================================================
*/
let arr = [1, 1, 1, 2, 2, 3];

function removeDuplicate(arr) {
  // x writes the valid part; arr[x - 2] prevents keeping a value more than twice.
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (x < 2 || arr[i] !== arr[x - 2]) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

console.log(removeDuplicate(arr));
