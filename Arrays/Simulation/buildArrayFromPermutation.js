/*
====================================================
BUILD ARRAY FROM PERMUTATION
====================================================

PLATFORM REFERENCES:
- LeetCode 1920: Build Array from Permutation

----------------------------------------------------
PROBLEM STATEMENT:
Given a zero-based permutation nums, build an array ans where
ans[i] = nums[nums[i]] for every index i.

----------------------------------------------------
EXAMPLES:
Input:  [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]

Input:  [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]

----------------------------------------------------
INTUITION:
Each value in the array points to another index. The answer at
index i is the value found by following that pointer once.

----------------------------------------------------
APPROACH:
1. Create an empty result array.
2. Traverse every index i.
3. Store arr[arr[i]] at res[i].
4. Return res.

----------------------------------------------------
DRY RUN:
arr = [0,2,1,5,3,4]
i = 0 -> res[0] = arr[arr[0]] = arr[0] = 0
i = 1 -> res[1] = arr[arr[1]] = arr[2] = 1
i = 2 -> res[2] = arr[arr[2]] = arr[1] = 2
Final result: [0,1,2,4,5,3]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because every index is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because a result array is created.

----------------------------------------------------
EDGE CASES:
- Input must be a valid zero-based permutation.
- Single element array returns the same element.
- Empty array returns an empty result.

====================================================
*/

let arr = [0, 2, 1, 5, 3, 4];

function arrBuild(arr) {
    let res = [];
    for(let i=0;i<arr.length;i++){
        res[i]=arr[arr[i]]
    }
    return res
}

console.log(arrBuild(arr));
