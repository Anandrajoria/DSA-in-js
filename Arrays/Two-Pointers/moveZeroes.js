/*
====================================================
MOVE ZEROES
====================================================

PLATFORM REFERENCES:
- LeetCode 283: Move Zeroes

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array, move all zeroes to the end while
maintaining the relative order of non-zero elements.

----------------------------------------------------
EXAMPLES:
Input:  [0,1,0,3,12]
Output: [1,3,12,0,0]

Input:  [0]
Output: [0]

----------------------------------------------------
INTUITION:
All non-zero values should be placed at the front. A pointer p
marks the next position where a non-zero value belongs.

----------------------------------------------------
APPROACH:
1. Set p = 0.
2. Scan the array with i.
3. When nums[i] is non-zero, swap nums[i] with nums[p].
4. Move p forward.

----------------------------------------------------
DRY RUN:
nums = [0,1,0,3,12]
p = 0
i = 1 -> swap 1 with nums[0] -> [1,0,0,3,12], p = 1
i = 3 -> swap 3 with nums[1] -> [1,3,0,0,12], p = 2
i = 4 -> swap 12 with nums[2] -> [1,3,12,0,0]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because every element is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because the array is modified in-place.

----------------------------------------------------
EDGE CASES:
- Array with no zero remains unchanged.
- Array with all zeroes remains all zeroes.
- Non-zero order is preserved.

====================================================
*/
let nums=[0,1,0,3,12]

function moveZeros(nums){
    // p marks where the next non-zero value should go.
    let p=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[i]
            nums[i]=nums[p]
            nums[p]=temp
            
            p++
        }
    }
    return nums
}

console.log(moveZeros(nums));
