/*
====================================================
FIND ALL NUMBERS DISAPPEARED IN AN ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 448: Find All Numbers Disappeared in an Array

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of length n containing numbers from 1 to n,
some numbers may appear twice and some may be missing. Return
all numbers in the range 1 to n that do not appear in the array.

----------------------------------------------------
EXAMPLES:
Input:  [4,3,2,7,8,2,3,1]
Output: [5,6]

Input:  [1,1]
Output: [2]

----------------------------------------------------
INTUITION:
Each value points to an index value - 1. Mark that index as
negative to show the number exists. Positive indexes after
marking represent missing numbers.

----------------------------------------------------
APPROACH:
1. Traverse the array.
2. For each value, compute index = Math.abs(value) - 1.
3. Mark arr[index] as negative.
4. Traverse again.
5. If arr[i] is positive, then i + 1 is missing.

----------------------------------------------------
DRY RUN:
arr = [4,3,2,7,8,2,3,1]
Mark indexes 3,2,1,6,7,1,2,0 as negative.
After marking, indexes 4 and 5 remain positive.
Missing numbers are 5 and 6.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned twice.

----------------------------------------------------
SPACE COMPLEXITY:
O(1) extra space, ignoring the output array.

----------------------------------------------------
EDGE CASES:
- Duplicate values should not break marking.
- All numbers present returns [].
- Repeated marking needs Math.abs to avoid wrong indexes.

====================================================
*/

let arr=[4,3,2,7,8,2,3,1]

function dissappearedArr(arr){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        let index=Math.abs(arr[i])-1
        arr[index]=-Math.abs(arr[index])

    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            ans.push(i+1)
        }
    }
    return ans
}

console.log(dissappearedArr(arr));
