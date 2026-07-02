/*
====================================================
VALID PALINDROME
====================================================

PLATFORM REFERENCES:
- LeetCode 125: Valid Palindrome

----------------------------------------------------
PROBLEM STATEMENT:
Given a string, return true if it is a palindrome after removing
non-alphanumeric characters and ignoring case.

----------------------------------------------------
EXAMPLES:
Input:  "A man, a plan, a canal: Panama"
Output: true

Input:  "!!!!"
Output: true

----------------------------------------------------
INTUITION:
Use two pointers from both ends. Skip invalid characters and
compare valid characters in lowercase.

----------------------------------------------------
APPROACH:
1. Start left at 0 and right at str.length - 1.
2. Move left until alphanumeric.
3. Move right until alphanumeric.
4. Compare lowercase characters.
5. Move inward until pointers meet.

----------------------------------------------------
DRY RUN:
"!!!!"
Both pointers skip non-alphanumeric characters.
No mismatch is found, so return true.

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty string is valid.
- String with only symbols is valid.
- Case differences are ignored.

====================================================
*/

let str='!!!!'

function isAlphaNumeric(ch) {
    return /^[a-z0-9]$/i.test(ch)
}
function validatePalindrome(str){
    let left=0
    let right=str.length-1

    while(left<right){
        if(!isAlphaNumeric(str[left])){
            left++
            continue
        }
        if(!isAlphaNumeric(str[right])){
            right--
            continue
        }

        if(str[left].toLowerCase()!==str[right].toLowerCase()){
            return false
        }
        left++
        right--
    }
    return true

}

console.log(validatePalindrome(str));
