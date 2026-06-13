/*
====================================================
MAX CONSECUTIVE ONES
====================================================

PLATFORM REFERENCES:
- LeetCode 485: Max Consecutive Ones

----------------------------------------------------
PROBLEM STATEMENT:
Given a binary array, find the maximum number of consecutive
1s present in the array.

----------------------------------------------------
EXAMPLES:
Input:  [0,1,1,0,1,1,1]
Output: 3

Input:  [1,1,0,1]
Output: 2

----------------------------------------------------
INTUITION:
Keep counting while values are 1. Whenever a 0 appears, reset
the current count because the consecutive streak is broken.

----------------------------------------------------
APPROACH:
1. Initialize current and max as 0.
2. Traverse the array.
3. If arr[i] is 1, increase current and update max.
4. If arr[i] is 0, reset current to 0.
5. Return max.

----------------------------------------------------
DRY RUN:
arr = [0,1,1,0,1,1,1]
0 -> current = 0
1 -> current = 1, max = 1
1 -> current = 2, max = 2
0 -> current = 0
1 -> current = 1
1 -> current = 2
1 -> current = 3, max = 3

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only counters are used.

----------------------------------------------------
EDGE CASES:
- All zeroes return 0.
- All ones return arr.length.
- Empty array returns 0.

====================================================
*/

let arr=[0,1,1,0,1,1,1]

function maxOnce(arr){
    let current=0,max=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            current+=1
            max=Math.max(current,max)
        }else {
            current=0
        }
    }
    return max
}

console.log(maxOnce(arr));
