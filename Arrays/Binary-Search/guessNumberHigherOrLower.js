/*
====================================================
GUESS NUMBER HIGHER OR LOWER
====================================================

PLATFORM REFERENCES:
- LeetCode 374: Guess Number Higher or Lower

----------------------------------------------------
PROBLEM STATEMENT:
Given numbers from 1 to n, find the picked number using the
provided guess API. guess(num) returns 0 if correct, -1 if too
high, and 1 if too low.

----------------------------------------------------
EXAMPLES:
Input:  n = 10, pick = 6
Output: 6

----------------------------------------------------
INTUITION:
The guess response tells which half of the range can be removed.

----------------------------------------------------
APPROACH:
1. Binary search from 1 to n.
2. Call guess(mid).
3. Return mid if response is 0.
4. Move right if response is -1.
5. Move left if response is 1.

----------------------------------------------------
DRY RUN:
n = 10, pick = 6
mid = 5 -> too low, move left to 6
mid = 8 -> too high, move right to 7
mid = 6 -> correct

----------------------------------------------------
TIME COMPLEXITY:
O(log n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- pick can be 1.
- pick can be n.
- Requires platform-provided guess API.

====================================================
*/

function guessNumber(n){
    let left=1,right=n
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let response=guess(mid)

        if(response==0){
            return mid
        }else if(response==-1){
            right=mid-1
        }else{
            left=mid+1
        }
    }

}

console.log(guessNumber(10,6));
