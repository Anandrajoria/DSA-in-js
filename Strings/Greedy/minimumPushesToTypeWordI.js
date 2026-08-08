/*
====================================================
MINIMUM NUMBER OF PUSHES TO TYPE WORD I
====================================================

PLATFORM REFERENCES:
- LeetCode 3014: Minimum Number of Pushes to Type Word I

----------------------------------------------------
PROBLEM STATEMENT:
Given a word with distinct letters, calculate the minimum pushes
needed when 8 letters can be assigned to each push cost level.

----------------------------------------------------
EXAMPLES:
Input:  "xycdefghij"
Output: 12

----------------------------------------------------
INTUITION:
The first 8 characters cost 1 push each, the next 8 cost 2
pushes each, and so on.

----------------------------------------------------
APPROACH:
1. Traverse each character index.
2. Cost for index i is Math.floor(i / 8) + 1.
3. Add cost to answer.
4. Return answer.

----------------------------------------------------
DRY RUN:
10 characters:
first 8 cost 1 each -> 8
next 2 cost 2 each -> 4
total = 12

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty word returns 0.
- More than 8 letters move to higher cost.

====================================================
*/

function minimumPush(str){
    let n=str.length
    let ans=0

    for(let i=0;i<n;i++){
        ans+=Math.floor(i/8)+1
    }

    return ans
}

console.log(minimumPush("xycdefghij"));
