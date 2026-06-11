/*
====================================================
DUPLICATE ZEROS
====================================================

PLATFORM REFERENCES:
- LeetCode 1089: Duplicate Zeros

----------------------------------------------------
PROBLEM STATEMENT:
Given a fixed-length integer array arr, duplicate each
occurrence of 0 and shift the remaining elements to the
right. Elements beyond the original array length are ignored.

----------------------------------------------------
EXAMPLES:
Input:  [1,2,0,3]
Output: [1,2,0,0]

Input:  [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]

----------------------------------------------------
INTUITION:
When a zero is seen, one more zero should appear just after it.
That means all later values conceptually move one position right.

----------------------------------------------------
APPROACH:
1. Traverse the array from left to right.
2. Whenever the current value is 0, write 0 at the next position.
3. Return the modified array.

----------------------------------------------------
DRY RUN:
arr = [1,2,0,3]
i = 0 -> arr[0] is 1, no change.
i = 1 -> arr[1] is 2, no change.
i = 2 -> arr[2] is 0, set arr[3] = 0.
Final array becomes [1,2,0,0].

----------------------------------------------------
TIME COMPLEXITY:
O(n), where n is the length of the array.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because the same array is modified.

----------------------------------------------------
EDGE CASES:
- Array with no zero remains unchanged.
- Array with consecutive zeros needs careful shifting in the full problem.
- Zero at the last index cannot duplicate inside the fixed length.

====================================================
*/
let arr = [1,2,0,3];

function duplicateZeros(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr[i + 1] = 0;
        }
    }
    return arr;
}

console.log(duplicateZeros(arr));
