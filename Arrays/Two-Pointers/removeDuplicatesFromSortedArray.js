/*
====================================================
REMOVE DUPLICATES FROM SORTED ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 26: Remove Duplicates from Sorted Array

----------------------------------------------------
PROBLEM STATEMENT:
Given a sorted array, remove duplicates in-place so that each
unique element appears only once. Return the number of unique
elements.

----------------------------------------------------
EXAMPLES:
Input:  [0,0,1,1,1,2,2,3,3,4]
Output: 5
Valid part: [0,1,2,3,4]

Input:  [1,1,2]
Output: 2
Valid part: [1,2]

----------------------------------------------------
INTUITION:
Since the array is sorted, duplicates are adjacent. Keep a
pointer at the last unique value and overwrite the next slot
whenever a new value appears.

----------------------------------------------------
APPROACH:
1. Return 0 if the array is empty.
2. Let x point to the last unique element.
3. Traverse with i.
4. If nums[i] differs from nums[x], move x and write nums[i].
5. Return x + 1 as the unique count.

----------------------------------------------------
DRY RUN:
nums = [0,0,1,1,1,2,2,3,3,4]
x = 0
i = 2 -> 1 differs from nums[0], write at index 1
i = 5 -> 2 differs from nums[1], write at index 2
i = 7 -> 3 differs from nums[2], write at index 3
i = 9 -> 4 differs from nums[3], write at index 4
Return 5.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because the array is modified in-place.

----------------------------------------------------
EDGE CASES:
- Empty array returns 0.
- All values same returns 1.
- No duplicates returns original length.

====================================================
*/
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      x += 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}

console.log(removeDuplicate(arr));
