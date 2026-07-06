/*
====================================================
FIND WORDS CONTAINING CHARACTER
====================================================

PLATFORM REFERENCES:
- LeetCode 2942: Find Words Containing Character

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of words and a character x, return all indexes
of words that contain x.

----------------------------------------------------
EXAMPLES:
Input:  words = ["leet","code"], x = "e"
Output: [0,1]

----------------------------------------------------
INTUITION:
Check each word and collect its index when the character appears.

----------------------------------------------------
APPROACH:
1. Create an empty answer array.
2. Traverse each word by index.
3. If word includes x, push the index.
4. Return the answer array.

----------------------------------------------------
DRY RUN:
"leet" contains "e" -> push 0
"code" contains "e" -> push 1

----------------------------------------------------
TIME COMPLEXITY:
O(n * m), where m is average word length.

----------------------------------------------------
SPACE COMPLEXITY:
O(k), where k is the number of matching indexes.

----------------------------------------------------
EDGE CASES:
- No matching words returns [].
- Duplicate words are checked by index.
- Character matching is case-sensitive.

====================================================
*/

let words=['leet','code']

function wordContaionChar(words,x){
    let arr=[]

    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr
}
console.log(`1st approach ${wordContaionChar(words,'e')}`);

function wordContaionChar2(words,x){
    let arr=[]

    for(let i=0;i<words.length;i++){
        for(let ch of words[i]){
            if(ch==x){
                arr.push(i)
                break
            }
        }
    }
    return arr
}

console.log(`1st approach ${wordContaionChar2(words,'e')}`);
