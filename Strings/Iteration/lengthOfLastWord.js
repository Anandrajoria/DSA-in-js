/*
====================================================
LENGTH OF LAST WORD
====================================================

PLATFORM REFERENCES:
- LeetCode 58: Length of Last Word

----------------------------------------------------
PROBLEM STATEMENT:
Given a string s consisting of words and spaces, return the
length of the last word in the string.

----------------------------------------------------
EXAMPLES:
Input:  "   hello  world  "
Output: 5

----------------------------------------------------
INTUITION:
Ignore trailing spaces first, then count characters until the
previous space is found.

----------------------------------------------------
APPROACH:
1. Start from the last index.
2. Skip trailing spaces.
3. Count non-space characters.
4. Stop when a space appears after counting.

----------------------------------------------------
DRY RUN:
"   hello  world  "
skip trailing spaces
count d,l,r,o,w = 5

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1) for the pointer approach.

----------------------------------------------------
EDGE CASES:
- String with trailing spaces.
- String with one word.
- String with multiple spaces between words.

====================================================
*/

let str="   hello  world  "
function findLengthOfLastWord(s){
    let n=s.length-1

    while(n>=0){
        if(s[n]==" "){
            n--
        }else{
            break
        }
    }

    let count=0

    while(n>=0){
        if(s[n]!==" "){
            n--
            count++
        }else{
            break
        }
    }
    return count
}

console.log(`1st approach ${findLengthOfLastWord(str)}`);

let s="hello world"

function findLengthOfLastWord2(s){
    s=s.trim()
    s=s.split(" ")

    return s[s.length-1].length
}

console.log(`2nd approach ${findLengthOfLastWord2(s)}`);

let sen=" hii i love shubhangee     "

function findLengthOfLastWord3(str){
    let n=str.length-1
    let count=0

    while(n>=0){
        if(str[n]!==" "){
            count++
        }else if(count>0){
            break
        }
        n--
    }
    return count
}

console.log(`3nd approach ${findLengthOfLastWord3(sen)}`);
