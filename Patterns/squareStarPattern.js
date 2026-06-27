/*
====================================================
SQUARE STAR PATTERN
====================================================

PLATFORM REFERENCES:
- Basic Pattern Printing

----------------------------------------------------
PROBLEM STATEMENT:
Given n, print an n by n square grid of stars.

----------------------------------------------------
EXAMPLES:
Input:  4
Output:
****
****
****
****

----------------------------------------------------
INTUITION:
Use nested loops. The outer loop controls rows and the inner
loop builds one row of n stars.

----------------------------------------------------
APPROACH:
1. Loop from 1 to n for rows.
2. Create an empty string for each row.
3. Add n stars using the inner loop.
4. Print the row.

----------------------------------------------------
DRY RUN:
n = 3
row 1: ***
row 2: ***
row 3: ***

----------------------------------------------------
TIME COMPLEXITY:
O(n^2), because n rows each contain n stars.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because one row string is built at a time.

----------------------------------------------------
EDGE CASES:
- n = 0 prints nothing.
- n = 1 prints one star.
- Negative n prints nothing with the current loop condition.

====================================================
*/

function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    console.log(star);
  }
}
pattern1(4);
