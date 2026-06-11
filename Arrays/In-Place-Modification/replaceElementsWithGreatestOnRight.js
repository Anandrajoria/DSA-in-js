/*
====================================================
REPLACE ELEMENTS WITH GREATEST ELEMENT ON RIGHT SIDE
====================================================

PLATFORM REFERENCES:
- LeetCode 1299: Replace Elements with Greatest Element on Right Side

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, replace every element with the greatest
element among the elements to its right. Replace the last
element with -1.

----------------------------------------------------
EXAMPLES:
Input:  [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Input:  [400]
Output: [-1]

----------------------------------------------------
INTUITION:
Scanning from right to left lets us remember the greatest
element already seen on the right side.

----------------------------------------------------
APPROACH:
1. Set maxRight to -1 for the last element.
2. Traverse the array from right to left.
3. Store current value before overwriting.
4. Replace arr[i] with maxRight.
5. Update maxRight using the saved current value.

----------------------------------------------------
DRY RUN:
arr = [17,18,5,4,6,1]
maxRight = -1
i = 5 -> arr[5] = -1, maxRight = 1
i = 4 -> arr[4] = 1, maxRight = 6
i = 3 -> arr[3] = 6, maxRight = 6
i = 2 -> arr[2] = 6, maxRight = 6
i = 1 -> arr[1] = 6, maxRight = 18
i = 0 -> arr[0] = 18

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because replacement is done in-place.

----------------------------------------------------
EDGE CASES:
- Single element array becomes [-1].
- Already decreasing arrays shift the next element values.
- Duplicate maximum values are handled correctly.

====================================================
*/
let arr=[17,18,5,4,6,1]

function greatestAmongRight(arr){
    // maxRight stores the greatest element seen while scanning from right to left.
    let maxRight=-1;

    for(let i=arr.length-1;i>=0;i--){
       let current=arr[i]
        arr[i]=maxRight
        maxRight=Math.max(maxRight,current)
    }
    return arr
}

console.log(greatestAmongRight(arr));
