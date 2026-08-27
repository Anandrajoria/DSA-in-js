/*
====================================================
PLUS ONE
====================================================

PLATFORM REFERENCES:
- LeetCode 66: Plus One

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of digits representing a non-negative integer,
increment the integer by one and return the resulting digits.

----------------------------------------------------
EXAMPLES:
Input:  [1,2,3]
Output: [1,2,4]

Input:  [9,9,9]
Output: [1,0,0,0]

----------------------------------------------------
INTUITION:
Start from the last digit. If it is less than 9, increase it
and finish. If it is 9, it becomes 0 and carry moves left.

----------------------------------------------------
APPROACH:
1. Traverse digits from right to left.
2. If current digit is less than 9, increment and return.
3. Otherwise set current digit to 0.
4. If all digits were 9, add 1 at the front.

----------------------------------------------------
DRY RUN:
digits = [1,2,3]
last digit 3 is less than 9.
increment it to 4.
return [1,2,4].

----------------------------------------------------
TIME COMPLEXITY:
O(n), worst case when all digits are 9.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), ignoring possible array growth from unshift.

----------------------------------------------------
EDGE CASES:
- [0] becomes [1].
- [9] becomes [1,0].
- [9,9,9] becomes [1,0,0,0].

====================================================
*/

let arr=[1,2,3]

function plus1(arr){
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]<9){
            arr[i]++
            return arr
        }
        arr[i]=0
    }
    arr.unshift(1)
    return arr
}

console.log(plus1(arr));
