/*
====================================================
LARGEST ODD NUMBER IN STRING
====================================================

PLATFORM REFERENCES:
- LeetCode 1903: Largest Odd Number in String

----------------------------------------------------
PROBLEM STATEMENT:
Given a string num representing a large integer, return the
largest-valued odd integer that is a non-empty prefix of num.
Return an empty string if no odd integer exists.

----------------------------------------------------
EXAMPLES:
Input:  "42063"
Output: "42063"

Input:  "52"
Output: "5"

Input:  "4206"
Output: ""

----------------------------------------------------
INTUITION:
An integer is odd if its last digit is odd. To get the largest
odd prefix, find the rightmost odd digit and cut the string there.

----------------------------------------------------
APPROACH:
1. Traverse from the end of the string.
2. Find the first odd digit.
3. Return num.slice(0, index + 1).
4. If none is found, return "".

----------------------------------------------------
DRY RUN:
num = "42063"
scan from right: 3 is odd
return "42063"

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the string is scanned from right to left.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because slice returns a new string.

----------------------------------------------------
EDGE CASES:
- No odd digit returns "".
- Last digit odd returns the full string.
- Very large numbers are handled as strings.

====================================================
*/

function longestOdd(num) {
  let p = -1;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 != 0) {
      p = i;
      break;
    }
  }

  return num.slice(0,p+1)

}

console.log(longestOdd("42063"));
