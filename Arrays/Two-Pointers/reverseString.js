/*
====================================================
REVERSE STRING
====================================================

PLATFORM REFERENCES:
- LeetCode 344: Reverse String

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of characters, reverse the array in-place.
The function should modify the original array directly.

----------------------------------------------------
EXAMPLES:
Input:  ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input:  ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

----------------------------------------------------
INTUITION:
The first character should swap with the last, the second
with the second last, and so on until the pointers meet.

----------------------------------------------------
APPROACH:
1. Place left pointer at the start.
2. Place right pointer at the end.
3. Swap characters at left and right.
4. Move both pointers toward the center.

----------------------------------------------------
DRY RUN:
s = ["h","e","l","l","o"]
left = 0, right = 4 -> swap h and o
left = 1, right = 3 -> swap e and l
left = 2, right = 2 -> stop
Result: ["o","l","l","e","h"]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each character is visited at most once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because swapping is done in-place.

----------------------------------------------------
EDGE CASES:
- Empty array remains empty.
- Single character array remains unchanged.
- Even and odd lengths both work.

====================================================
*/
let s = ["h", "e", "l", "l", "o"];






function reverseString(s){
    let left=0;
    let right=s.length-1

    while(left<right){
        [s[left],s[right]]=[s[right],s[left]]
        left++
        right--
    }
    return s

}
console.log(reverseString(s));
