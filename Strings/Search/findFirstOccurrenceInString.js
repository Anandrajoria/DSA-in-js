/*
====================================================
FIND THE INDEX OF THE FIRST OCCURRENCE IN A STRING
====================================================

PLATFORM REFERENCES:
- LeetCode 28: Find the Index of the First Occurrence in a String

----------------------------------------------------
PROBLEM STATEMENT:
Given two strings haystack and needle, return the index of the
first occurrence of needle in haystack. Return -1 if needle is
not part of haystack.

----------------------------------------------------
EXAMPLES:
Input:  haystack = "sadbutsad", needle = "sad"
Output: 0

Input:  haystack = "leetcode", needle = "leeto"
Output: -1

----------------------------------------------------
INTUITION:
Try every possible starting index in haystack and check whether
all characters of needle match from that position.

----------------------------------------------------
APPROACH:
1. Let n be haystack length and m be needle length.
2. Try every start index from 0 to n - m.
3. Compare needle character by character.
4. If all characters match, return the start index.
5. Return -1 if no match is found.

----------------------------------------------------
DRY RUN:
haystack = "sadbutsad", needle = "sad"
i = 0: s == s, a == a, d == d
full match found, return 0.

----------------------------------------------------
TIME COMPLEXITY:
O(n * m), where n is haystack length and m is needle length.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only pointers are used.

----------------------------------------------------
EDGE CASES:
- needle longer than haystack returns -1.
- needle at the beginning returns 0.
- repeated patterns still work.

====================================================
*/

function strStr(haystack,needle){

    let n=haystack.length
    let m=needle.length
    for(let i=0;i<=n-m;i++){
        let j=0
        while(j<m && haystack[i+j]===needle[j]){
            j++
        }
        if(j==m){
            return i
        }
    }
    return -1
}

console.log(strStr('sadbutsad','sad'));
