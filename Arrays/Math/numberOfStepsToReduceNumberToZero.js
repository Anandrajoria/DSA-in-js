/*
====================================================
NUMBER OF STEPS TO REDUCE A NUMBER TO ZERO
====================================================

PLATFORM REFERENCES:
- LeetCode 1342: Number of Steps to Reduce a Number to Zero

----------------------------------------------------
PROBLEM STATEMENT:
Given a non-negative integer num, return the number of steps
needed to reduce it to zero. If num is even, divide it by 2.
If num is odd, subtract 1.

----------------------------------------------------
EXAMPLES:
Input:  14
Output: 6
Explanation: 14 -> 7 -> 6 -> 3 -> 2 -> 1 -> 0

Input:  8
Output: 4

----------------------------------------------------
INTUITION:
Repeatedly apply the rule based on parity. Every operation
moves the number closer to zero.

----------------------------------------------------
APPROACH:
1. Start steps at 0.
2. While num is greater than 0:
   - divide by 2 if even
   - subtract 1 if odd
3. Increment steps after every operation.
4. Return steps.

----------------------------------------------------
DRY RUN:
num = 14
14 even -> 7, steps = 1
7 odd -> 6, steps = 2
6 even -> 3, steps = 3
3 odd -> 2, steps = 4
2 even -> 1, steps = 5
1 odd -> 0, steps = 6

----------------------------------------------------
TIME COMPLEXITY:
O(log n), because division by 2 repeatedly shrinks the number.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only one counter is used.

----------------------------------------------------
EDGE CASES:
- num = 0 returns 0.
- Odd numbers first subtract 1.
- Powers of two reduce quickly by repeated division.

====================================================
*/

function stepsCount(num){
    let steps=0
    while(num>0){
        if(num%2==0){
            num/=2
        }else{
            num-=1
        }
        steps++
    }
    return steps
}

console.log(stepsCount(14));
