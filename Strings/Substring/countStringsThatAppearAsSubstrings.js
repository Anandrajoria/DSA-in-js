/*
====================================================
COUNT STRINGS THAT APPEAR AS SUBSTRINGS IN WORD
====================================================

PLATFORM REFERENCES:
- LeetCode 1967: Number of Strings That Appear as Substrings in Word

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of strings and a word, count how many strings
from the array appear as substrings inside the word.

----------------------------------------------------
EXAMPLES:
Input:  patterns = ["a","abc","bc","d"], word = "abc"
Output: 3

----------------------------------------------------
INTUITION:
For each pattern, directly check whether it exists inside the
given word.

----------------------------------------------------
APPROACH:
1. Start count at 0.
2. Traverse every string in the array.
3. Use includes() to check if it appears in word.
4. Increment count when found.

----------------------------------------------------
DRY RUN:
word = "abc"
"a" is present -> count 1
"abc" is present -> count 2
"bc" is present -> count 3
"d" is not present

----------------------------------------------------
TIME COMPLEXITY:
O(n * m), where n is number of patterns and m is word length.

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty pattern would always be included by JavaScript includes().
- No matching strings returns 0.
- Duplicate patterns are counted separately.

====================================================
*/

let  arr=["a","abc","bc","d"]
function isWordPresent(arr,word){
    let count=0

    for(let i=0;i<arr.length;i++){
        if(word.includes(arr[i])){
            count+=1
        }
    }
    return count
}

console.log(isWordPresent(arr,'abc'));
