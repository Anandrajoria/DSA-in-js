/*
====================================================
REVERSE STRING II
====================================================

PLATFORM REFERENCES:
- LeetCode 541: Reverse String II

----------------------------------------------------
PROBLEM STATEMENT:
Given a string s and an integer k, reverse the first k characters
for every 2k characters counting from the start of the string.

----------------------------------------------------
EXAMPLES:
Input:  s = "abcdef", k = 2
Output: "bacdfe"

----------------------------------------------------
INTUITION:
The string is processed in blocks of 2k. In every block, only
the first k characters need to be reversed.

----------------------------------------------------
APPROACH:
1. Convert the string into an array.
2. Move in steps of 2k.
3. Reverse from block start to min(start + k - 1, last index).
4. Join the array back into a string.

----------------------------------------------------
DRY RUN:
s = "abcdef", k = 2
block "abcd" -> reverse "ab" -> "bacd"
remaining "ef" -> reverse "ef" -> "fe"
answer = "bacdfe"

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each character is touched at most once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because strings are converted to arrays.

----------------------------------------------------
EDGE CASES:
- Remaining characters fewer than k are all reversed.
- k = 1 returns the same string.
- Empty string returns empty string.

====================================================
*/

let s = "abcdef";

function reverseStringII(s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + (2 * k)) {
    let left = x;
    let right = Math.min(x + k - 1, s.length - 1);

    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }

  return s.join("");
}

console.log(reverseStringII(s, 2));
