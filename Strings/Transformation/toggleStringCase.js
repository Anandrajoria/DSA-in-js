/*
====================================================
TOGGLE STRING CASE
====================================================

PLATFORM REFERENCES:
- String Transformation Practice

----------------------------------------------------
PROBLEM STATEMENT:
Given a string, convert every uppercase character to lowercase
and every lowercase character to uppercase.

----------------------------------------------------
EXAMPLES:
Input:  "ADitya"
Output: "adITYA"

----------------------------------------------------
INTUITION:
Check each character against its uppercase form. If it is already
uppercase, convert it to lowercase; otherwise convert it to uppercase.

----------------------------------------------------
APPROACH:
1. Start ans as an empty string.
2. Traverse every character.
3. If ch equals ch.toUpperCase(), append lowercase version.
4. Otherwise append uppercase version.
5. Return ans.

----------------------------------------------------
DRY RUN:
"ADitya"
A -> a
D -> d
i -> I
t -> T
y -> Y
a -> A

----------------------------------------------------
TIME COMPLEXITY:
O(n), because every character is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because a new string is built.

----------------------------------------------------
EDGE CASES:
- Non-letter characters also satisfy uppercase comparison in JS.
- Empty string returns empty string.
- Mixed case strings work naturally.

====================================================
*/

let s='ADitya'

function toggleString(s){
    let ans=''

    for(let ch of s){
        if(ch==ch.toUpperCase()){
            ans+=ch.toLowerCase()
        }else{
            ans+=ch.toUpperCase()
        }
    }
    return ans
}

console.log(toggleString(s));
