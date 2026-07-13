/*
====================================================
STRING PALINDROME CHECK
====================================================

PLATFORM REFERENCES:
- LeetCode 125: Valid Palindrome

----------------------------------------------------
PROBLEM STATEMENT:
Given a string, return true if it is a palindrome after ignoring
non-alphanumeric characters and case.

----------------------------------------------------
EXAMPLES:
Input:  "A man, a plan, a canal: Panama"
Output: true

Input:  "race a car"
Output: false

----------------------------------------------------
INTUITION:
Use two pointers from both ends. Skip non-alphanumeric characters
and compare lowercase versions of valid characters.

----------------------------------------------------
APPROACH:
1. Start left at 0 and right at s.length - 1.
2. Move left until it points to an alphanumeric character.
3. Move right until it points to an alphanumeric character.
4. Compare lowercase characters.
5. Move inward until the pointers meet.

----------------------------------------------------
DRY RUN:
s = "race a car"
r == r
a == a
c != e
return false

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty string returns true.
- String with only punctuation returns true.
- Case differences are ignored.

====================================================
*/

let s='race a car'
function isPlaindrome(s){
    let left=0;
    let right=s.length-1

    while(left<right){
        while(left<right && !(/[a-zA-Z0-9]/.test(s[left]))){
            left++
        }
        while(left<right && !(/[a-zA-Z0-9]/.test(s[right]))){
            right--
        }

        if(s[left].toLowerCase()!==s[right].toLowerCase()){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isPlaindrome(s));
