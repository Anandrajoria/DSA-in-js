/*
====================================================
ROTATE ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 189: Rotate Array

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, rotate it to the right by k steps in-place.

----------------------------------------------------
EXAMPLES:
Input:  nums = [1,2,3,4,5,6,7], k = 2
Output: [6,7,1,2,3,4,5]

Input:  nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

----------------------------------------------------
INTUITION:
Reversing the whole array puts the last k elements at the front
but in reverse order. Reversing the first k and remaining part
fixes the order.

----------------------------------------------------
APPROACH:
1. Normalize k using k % nums.length.
2. Reverse the entire array.
3. Reverse the first k elements.
4. Reverse the remaining elements.
5. Return nums.

----------------------------------------------------
DRY RUN:
nums = [1,2,3,4,5,6,7], k = 2
Reverse all:       [7,6,5,4,3,2,1]
Reverse first 2:   [6,7,5,4,3,2,1]
Reverse remaining: [6,7,1,2,3,4,5]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each reverse pass touches elements linearly.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because rotation is done in-place.

----------------------------------------------------
EDGE CASES:
- k greater than length is handled by modulo.
- k = 0 returns the same array.
- Empty array needs guard handling in production code.

====================================================
*/

let arr = [1, 2, 3, 4, 5, 6, 7];

function rotateArr(arr, start, end) {

  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }


}


function rotate(nums,k){
    k=k%nums.length

    rotateArr(nums,0,nums.length-1)
    rotateArr(nums,0,k-1)
    rotateArr(nums,k,nums.length-1)

    return nums
}

console.log(rotate(arr,2));
