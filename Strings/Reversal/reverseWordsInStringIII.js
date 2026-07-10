/*
====================================================
REVERSE WORDS IN A STRING III
====================================================

PLATFORM REFERENCES:
- LeetCode 557: Reverse Words in a String III

----------------------------------------------------
PROBLEM STATEMENT:
Given a string, reverse the characters of each word while
preserving spaces and word order.

----------------------------------------------------
EXAMPLES:
Input:  "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input:  "ab cs"
Output: "ba sc"

----------------------------------------------------
INTUITION:
Each word can be reversed independently. Spaces act as word
boundaries and remain in their original positions.

----------------------------------------------------
APPROACH:
1. Convert the string into a character array.
2. Track the start of the current word.
3. When a space or string end is found, reverse that word.
4. Join the characters back into a string.

----------------------------------------------------
DRY RUN:
s = "ab cs"
reverse "ab" -> "ba"
reverse "cs" -> "sc"
answer = "ba sc"

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each character is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because strings are converted to arrays.

----------------------------------------------------
EDGE CASES:
- Single word is fully reversed.
- Multiple words keep the same order.
- Empty string returns empty string.

====================================================
*/

let s="ab cs"

function reverse(arr,left,right){
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++
        right--
    }
}

function reverseStringIII(s){
    let arr=s.split("")
    let start=0

    for(let end=0;end<=arr.length;end++){
        if(end==arr.length||arr[end]==" "){
            reverse(arr,start,end-1)
            start=end+1
        }
    }
    return arr.join("")
}

console.log(reverseStringIII(s));
