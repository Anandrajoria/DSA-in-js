/*
====================================================
ISOMORPHIC STRINGS
====================================================

PLATFORM REFERENCES:
- LeetCode 205: Isomorphic Strings

----------------------------------------------------
PROBLEM STATEMENT:
Given two strings s and t, determine whether they are isomorphic.
Characters in s can be replaced to get t, but each character must
map consistently and no two characters may map to the same character.

----------------------------------------------------
EXAMPLES:
Input:  s = "egg", t = "add"
Output: true

Input:  s = "goo", t = "baa"
Output: false

----------------------------------------------------
INTUITION:
We need a one-to-one mapping in both directions: s to t and
t to s.

----------------------------------------------------
APPROACH:
1. Create two maps.
2. Traverse both strings together.
3. Add mapping if both characters are unseen.
4. If mapping conflicts, return false.
5. Return true if all pairs are valid.

----------------------------------------------------
DRY RUN:
s = "goo", t = "baa"
g -> b
o -> a
next o should map to a, but next t char is a, so this part works.
If any reverse mapping conflicts, return false.

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1), for bounded character sets.

----------------------------------------------------
EDGE CASES:
- Different lengths should return false in production code.
- Repeated characters must map consistently.
- Two source chars cannot map to one target char.

====================================================
*/

function isIsoFormic(s,t){

    let mapStoT={}
    let mapTtoS={}

    for(let i=0;i<s.length;i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]]=t[i]
            mapTtoS[t[i]]=s[i]
        }else if(mapTtoS[t[i]]!=s[i]  || mapStoT[s[i]]!=t[i] ){
            return false
        }
    }
    return true
}

console.log(isIsoFormic('goo','baa'));
