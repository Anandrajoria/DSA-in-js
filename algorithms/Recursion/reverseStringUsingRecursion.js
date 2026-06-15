/*
====================================================
REVERSE STRING USING RECURSION
====================================================

PLATFORM REFERENCES:
- LeetCode 344: Reverse String
- Basic Recursion / Two Pointers

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of characters, reverse it in-place using
recursion.

----------------------------------------------------
EXAMPLES:
Input:  ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input:  ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

----------------------------------------------------
INTUITION:
Swap the outer characters, then recursively reverse the smaller
middle part.

----------------------------------------------------
APPROACH:
1. Create a helper with left and right pointers.
2. Stop when left >= right.
3. Swap s[left] and s[right].
4. Recurse with left + 1 and right - 1.
5. Return the modified array.

----------------------------------------------------
DRY RUN:
s = ["h","e","l","l","o"]
swap index 0 and 4 -> ["o","e","l","l","h"]
swap index 1 and 3 -> ["o","l","l","e","h"]
left reaches right, stop.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each character is swapped once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because recursion uses call stack space.

----------------------------------------------------
EDGE CASES:
- Empty array remains empty.
- Single character array remains unchanged.
- Works for both even and odd lengths.

====================================================
*/

let arr = ["h", "e", "l", "l", "o"];

function reverseString(s) {
  function helper(left, right) {
    if (left >= right) return;
    [s[left], s[right]] = [s[right], s[left]];
    helper(left + 1, right - 1);
  }

  helper(0, s.length - 1);
  return s;
}
console.log(reverseString(arr));
