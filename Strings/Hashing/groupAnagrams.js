/*
====================================================
GROUP ANAGRAMS
====================================================

PLATFORM REFERENCES:
- LeetCode 49: Group Anagrams

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of strings, group the anagrams together.

----------------------------------------------------
EXAMPLES:
Input:  ["eat","tea","tan","ate","nat","bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

----------------------------------------------------
INTUITION:
Anagrams become identical after sorting their characters. Use
that sorted string as the grouping key.

----------------------------------------------------
APPROACH:
1. Create an object map.
2. Sort each word's characters to create a key.
3. Push the word into that key's group.
4. Return all grouped values.

----------------------------------------------------
DRY RUN:
"eat" -> " aet" key after sorting characters: "aet"
"tea" -> "aet"
"ate" -> "aet"
These words go into the same group.

----------------------------------------------------
TIME COMPLEXITY:
O(n * k log k), where k is average word length.

----------------------------------------------------
SPACE COMPLEXITY:
O(n * k), for grouped output.

----------------------------------------------------
EDGE CASES:
- Empty string groups with empty string.
- Duplicate words stay in the same group.
- Case-sensitive unless normalized first.

====================================================
*/

let arr=["eat","tea","tan","ate","nat","bat"]

function groupAnagram(strs){
    let map={}

    for(let i=0;i<strs.length;i++){
        let sortedStr=strs[i].split("").sort().join("")

        if(!map[sortedStr]){
            map[sortedStr]=[strs[i]]
        }else {
            map[sortedStr].push(strs[i])
        }
    }
    return [...Object.values(map)]
}
console.log(groupAnagram(arr));
