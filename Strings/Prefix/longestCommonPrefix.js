/*
====================================================
LONGEST COMMON PREFIX
====================================================

PLATFORM REFERENCES:
- LeetCode 14: Longest Common Prefix

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of strings, return the longest common prefix
shared by all strings.

----------------------------------------------------
EXAMPLES:
Input:  ["flowers","flow","flyover"]
Output: "fl"

Input:  ["dog","racecar","car"]
Output: ""

----------------------------------------------------
INTUITION:
The common prefix cannot be longer than the first string.
Compare each character of the first string with the same position
in all other strings.

----------------------------------------------------
APPROACH:
1. Take the first string as reference.
2. Traverse each character of the first string.
3. Compare it with the same index in every other string.
4. Stop when any mismatch is found.
5. Return the prefix built so far.

----------------------------------------------------
DRY RUN:
["flowers","flow","flyover"]
f matches all -> ans = "f"
l matches all -> ans = "fl"
o does not match "flyover" -> return "fl"

----------------------------------------------------
TIME COMPLEXITY:
O(n * m), where n is number of strings and m is prefix length.

----------------------------------------------------
SPACE COMPLEXITY:
O(m), because the answer string is built.

----------------------------------------------------
EDGE CASES:
- Empty array needs guard handling in production code.
- No common prefix returns "".
- One string returns itself.

====================================================
*/

let arr=['flowers','flow','flyover']

function longestCommonPrefix(strs){

    let ans=''

    let firstStr=strs[0]
    for(let i=0;i<firstStr.length;i++){
        let currentChar=firstStr[i]

        for(let j=1;j<strs.length;j++){

            if(currentChar!==strs[j][i]){
                return ans
            }
        }
        ans+=currentChar
    }
    return ans
}

console.log(longestCommonPrefix(arr));
