/*
====================================================
SUM OF NATURAL NUMBERS
====================================================

PLATFORM REFERENCES:
- Basic DSA / Loops

----------------------------------------------------
PROBLEM STATEMENT:
Given a positive integer len, calculate the sum of all natural
numbers from 1 to len.

----------------------------------------------------
EXAMPLES:
Input:  10
Output: 55

Input:  5
Output: 15

----------------------------------------------------
INTUITION:
Add each number from len down to 1 into an accumulator.

----------------------------------------------------
APPROACH:
1. Start ans at 0.
2. While len is at least 1, add len to ans.
3. Decrease len by 1.
4. Print ans.

----------------------------------------------------
DRY RUN:
len = 5
ans = 0
ans = 5, len = 4
ans = 9, len = 3
ans = 12, len = 2
ans = 14, len = 1
ans = 15, len = 0

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the loop runs len times.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only two variables are used.

----------------------------------------------------
EDGE CASES:
- len = 0 gives sum 0.
- Negative len will not enter the loop.
- Formula n * (n + 1) / 2 can solve it in O(1).

====================================================
*/
len=10
ans=0
while(len>=1){
    ans+=len
    len--
}
console.log(ans);
