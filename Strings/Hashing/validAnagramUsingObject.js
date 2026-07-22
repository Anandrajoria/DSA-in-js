/*
====================================================
VALID ANAGRAM USING OBJECT MAP
====================================================

PLATFORM REFERENCES:
- LeetCode 242: Valid Anagram

----------------------------------------------------
PROBLEM STATEMENT:
Given two strings s and t, return true if t is an anagram of s.
An anagram uses the same characters with the same frequencies.

----------------------------------------------------
EXAMPLES:
Input:  s = "anagram", t = "nagaram"
Output: true

Input:  s = "anagram", t = "marana"
Output: false

----------------------------------------------------
INTUITION:
If two strings are anagrams, every character count from the first
string should be completely canceled by the second string.

----------------------------------------------------
APPROACH:
1. If lengths differ, return false.
2. Count every character of s in an object map.
3. Traverse t and decrease the matching counts.
4. If any character is missing, return false.
5. Return true after all counts are matched.

----------------------------------------------------
DRY RUN:
s = "anagram", t = "marana"
lengths differ, so return false.

----------------------------------------------------
TIME COMPLEXITY:
O(n), where n is the string length.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), for lowercase English letters.

----------------------------------------------------
EDGE CASES:
- Different lengths return false.
- Repeated characters must have equal counts.
- Empty strings are anagrams of each other.

====================================================
*/

function isAnagram(s,t){
    if(s.length!==t.length){
        return false
    }
    let map={}

    for(let ch of s){
        if(!map[ch]){
            map[ch]=1
        }else{
            map[ch]++
        }
    }

    for(let ch of t){
        if(!map[ch]||map[ch]<0){
            return false
        }else{
            map[ch]--
        }
    }
    return true
}

console.log(isAnagram("anagram",'marana'));
