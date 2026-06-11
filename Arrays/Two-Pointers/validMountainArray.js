/*
====================================================
VALID MOUNTAIN ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 941: Valid Mountain Array

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, return true if it strictly increases to one
peak and then strictly decreases after that peak. The peak
cannot be the first or last element.

----------------------------------------------------
EXAMPLES:
Input:  [0,3,2,1]
Output: true

Input:  [3,5,5]
Output: false

Input:  [0,1,2,3]
Output: false

----------------------------------------------------
INTUITION:
Walk upward while values increase, then walk downward while
values decrease. A valid mountain must finish exactly at the
last index after both phases.

----------------------------------------------------
APPROACH:
1. Start i at 0.
2. Move i while the slope is strictly increasing.
3. Reject if peak is first or last element.
4. Move i while the slope is strictly decreasing.
5. Return true only if i reaches the last index.

----------------------------------------------------
DRY RUN:
arr = [0,3,2,1]
i = 0 -> 0 < 3, move to 1
peak at index 1
3 > 2, move to 2
2 > 1, move to 3
i is last index, return true.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each element is visited at most once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only one pointer is used.

----------------------------------------------------
EDGE CASES:
- Less than 3 elements cannot form a mountain.
- Equal adjacent values are invalid.
- Peak at first or last index is invalid.

====================================================
*/
let arr=[0,3,2,1]

function validMountaion(){
    // First climb to the peak, then descend to the end.
    let i=0;

    while(arr[i]<arr[i+1]){
        i++
        
    }
    if((i===0 || i===arr.length-1)){
            return false
        }
    while(arr[i]>arr[i+1]){
        i++

    }
    return i===arr.length-1
}

console.log(validMountaion(arr))
