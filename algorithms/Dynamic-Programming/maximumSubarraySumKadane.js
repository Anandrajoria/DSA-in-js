/*
====================================================
KADANE'S ALGORITHM - MAXIMUM SUBARRAY SUM
====================================================

PLATFORM REFERENCES:
- LeetCode 53: Maximum Subarray
- Classic Dynamic Programming / Array Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array, find the largest possible sum of any
contiguous subarray.

----------------------------------------------------
EXAMPLES:
Input:  [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the maximum sum.

Input:  [5,4,-1,7,8]
Output: 23

----------------------------------------------------
INTUITION:
If the running sum becomes negative, it should be dropped
because it will reduce the sum of any future subarray.

----------------------------------------------------
APPROACH:
1. Keep cursum as the current subarray sum.
2. Keep maxSum as the best sum found so far.
3. Add each element to cursum.
4. Update maxSum with the better value.
5. Reset cursum to 0 when it becomes negative.

----------------------------------------------------
DRY RUN:
arr = [-2,1,-3,4,-1,2,1,-5,4]
-2 -> maxSum = -2, reset cursum
1 -> maxSum = 1
-3 -> cursum negative, reset
4 -> maxSum = 4
-1 -> cursum = 3
2 -> maxSum = 5
1 -> maxSum = 6
Return 6.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only running variables are used.

----------------------------------------------------
EDGE CASES:
- All negative arrays work because maxSum starts at -Infinity.
- Single-element array returns that element.
- Empty array needs separate handling in production code.

====================================================
*/

let arr = [-2,1,-3,4,-1,2,1,-5,4]
let maxSum = -Infinity;
let cursum = 0;

function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    cursum += arr[i];
    maxSum=Math.max(cursum,maxSum)
    if (cursum < 0) {
      // Negative running sum is dropped because it hurts future subarrays.
      cursum = 0;
    }
  }
 return maxSum
}

console.log(subArray(arr));
