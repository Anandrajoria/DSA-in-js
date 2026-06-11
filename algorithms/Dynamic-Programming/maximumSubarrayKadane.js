/*
====================================================
KADANE'S ALGORITHM - MAXIMUM SUBARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 53: Maximum Subarray
- Classic Dynamic Programming / Array Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array, find the contiguous subarray with the
largest possible sum. This implementation returns the subarray
itself, not only the sum.

----------------------------------------------------
EXAMPLES:
Input:  [-2,1,-3,4,-1,2,1,-5,4]
Output: [4,-1,2,1]
Explanation: This subarray has maximum sum 6.

Input:  [1,2,3,4,5]
Output: [1,2,3,4,5]

----------------------------------------------------
INTUITION:
If the running sum becomes negative, carrying it forward will
only reduce future sums. So we reset the current sum and start
a new candidate subarray from the next index.

----------------------------------------------------
APPROACH:
1. Keep cursum as the current running sum.
2. Keep maxSum as the best sum found so far.
3. Track tempStart as the start of the current candidate.
4. When cursum beats maxSum, update start and end.
5. When cursum becomes negative, reset it and move tempStart.
6. Return arr.slice(start, end + 1).

----------------------------------------------------
DRY RUN:
arr = [-2,1,-3,4,-1,2,1,-5,4]
-2 -> cursum = -2, maxSum = -2, reset
1 -> cursum = 1, maxSum = 1, start = 1, end = 1
-3 -> cursum = -2, reset
4 -> cursum = 4, maxSum = 4, start = 3, end = 3
-1 -> cursum = 3
2 -> cursum = 5, maxSum = 5
1 -> cursum = 6, maxSum = 6, end = 6
Return [4,-1,2,1].

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(k), where k is the returned subarray length because slice
creates a new array. The tracking variables use O(1) space.

----------------------------------------------------
EDGE CASES:
- All negative arrays need maxSum initialized to -Infinity.
- Single-element arrays return that element.
- Empty arrays need separate handling in production code.

====================================================
*/
let arr = [-2,1,-3,4,-1,2,1,-5,4]
let maxSum = -Infinity;
let cursum = 0;
let start = 0;
let end = 0;
let tempStart = 0;
function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    cursum += arr[i];
    if(cursum>maxSum){
      maxSum=cursum
      start=tempStart
      end=i
    }
    if (cursum < 0) {
      // Negative running sum is dropped because it hurts future subarrays.
      cursum = 0;
      tempStart=i+1
    }
  }
 return arr.slice(start, end + 1);
}

console.log(subArray(arr));


// max sum 

// let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let maxSum = -Infinity;
// let cursum = 0;

// function subArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     cursum += arr[i];
//     maxSum=Math.max(cursum,maxSum)
//     if (cursum < 0) {
//       // Negative running sum is dropped because it hurts future subarrays.
//       cursum = 0;
//     }
//   }
//  return maxSum
// }

// console.log(subArray(arr));
