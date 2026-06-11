/*
====================================================
VALID TRIANGLE
====================================================

PLATFORM REFERENCES:
- Basic DSA / Conditional Statements

----------------------------------------------------
PROBLEM STATEMENT:
Given three side lengths a, b, and c, determine whether they
can form a valid triangle.

----------------------------------------------------
EXAMPLES:
Input:  10, 12, 5
Output: yes

Input:  1, 2, 3
Output: no

----------------------------------------------------
INTUITION:
For a triangle to exist, the sum of any two sides must be
greater than the third side.

----------------------------------------------------
APPROACH:
1. Check a + b > c.
2. Check b + c > a.
3. Check a + c > b.
4. If all are true, print "yes"; otherwise print "no".

----------------------------------------------------
DRY RUN:
a = 10, b = 12, c = 5
10 + 12 > 5 -> true
12 + 5 > 10 -> true
10 + 5 > 12 -> true
Print "yes".

----------------------------------------------------
TIME COMPLEXITY:
O(1), because only fixed comparisons are done.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because no extra structure is used.

----------------------------------------------------
EDGE CASES:
- Zero or negative sides cannot form a valid triangle.
- 1, 2, 3 is invalid because 1 + 2 is not greater than 3.
- Equal sides are valid if the inequality holds.

====================================================
*/
function isValidTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

isValidTriangle(10, 12, 5);
