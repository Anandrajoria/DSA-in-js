/*
====================================================
VALID ANAGRAM
====================================================

PLATFORM REFERENCES:
- LeetCode 242: Valid Anagram

----------------------------------------------------
PROBLEM STATEMENT:
Given two strings, return true if they are anagrams after
normalizing case and removing non-letter characters.

----------------------------------------------------
EXAMPLES:
Input:  "listen", "silent"
Output: true

----------------------------------------------------
INTUITION:
Anagrams have the same character frequencies.

----------------------------------------------------
APPROACH:
1. Normalize both strings.
2. If lengths differ, return false.
3. Count characters from the first string.
4. Subtract counts using the second string.
5. Ensure all counts become 0.

----------------------------------------------------
DRY RUN:
listen and silent
both produce the same frequency map.
Return true.

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because lowercase English letters are bounded.

----------------------------------------------------
EDGE CASES:
- Case differences are ignored.
- Non-letters are removed.
- Different lengths return false.

====================================================
*/

function isAnagram(s1, s2) {
  s1 = s1.toLowerCase().replace(/[^a-z]/g, "");
  s2 = s2.toLowerCase().replace(/[^a-z]/g, "");

  if (s1.length !== s2.length) {
    return false;
  }

  let freq = new Map();

  for (let ch of s1) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (let ch of s2) {
    if (!freq.has(ch)) {
      return false;
    }
    freq.set(ch, freq.get(ch) - 1);
  }

  for (let count of freq.values()) {
    if (count !== 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("listen", "slient"));
