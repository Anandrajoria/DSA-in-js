/*
====================================================
SPLIT A STRING IN BALANCED STRINGS
====================================================

PLATFORM REFERENCES:
- LeetCode 1221: Split a String in Balanced Strings

----------------------------------------------------
PROBLEM STATEMENT:
Given a balanced string containing only L and R, split it into
the maximum number of balanced substrings. A balanced substring
has the same number of L and R.

----------------------------------------------------
EXAMPLES:
Input:  "RLRRLLRLRL"
Output: 4

----------------------------------------------------
INTUITION:
Track the balance between R and L. Whenever balance becomes 0,
one balanced substring is complete.

----------------------------------------------------
APPROACH:
1. Start balance and answer at 0.
2. Add 1 for R and subtract 1 for L.
3. When balance becomes 0, increment answer.
4. Return answer.

----------------------------------------------------
DRY RUN:
R L -> balance returns 0, answer 1
R R L L -> balance returns 0, answer 2
R L -> answer 3
R L -> answer 4

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each character is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only counters are used.

----------------------------------------------------
EDGE CASES:
- Already smallest balanced pieces.
- Whole string may be one balanced substring.
- Input is expected to be balanced.

====================================================
*/

let s="RLRRLLRLRL"

function balanceString(s){
    let balance=0
    let answer=0

    for(let ch of s){
        if(ch=="R"){
            balance++
        }else{
            balance--
        }

        if(balance==0){
            answer++
        }
    }
    return answer
}
console.log(balanceString(s));
