/*
====================================================
TRIANGLE CATEGORY
====================================================

PLATFORM REFERENCES:
- Basic DSA / Conditional Statements

----------------------------------------------------
PROBLEM STATEMENT:
Given three side lengths, first check whether they form a
valid triangle. If valid, classify it as equilateral, scalene,
or isosceles.

----------------------------------------------------
EXAMPLES:
Input:  5, 5, 5
Output: equilateral triangle

Input:  3, 4, 5
Output: scalene triangle

Input:  5, 5, 8
Output: isosceles triangle

----------------------------------------------------
INTUITION:
Before classification, the sides must satisfy triangle
inequality. After that, classification depends on equality
between side lengths.

----------------------------------------------------
APPROACH:
1. If any two sides sum to less than or equal to the third,
   print "not a valid triangle".
2. If all three sides are equal, print equilateral.
3. If all sides are different, print scalene.
4. Otherwise, print isosceles.

----------------------------------------------------
DRY RUN:
a = 5, b = 5, c = 5
Validity check passes.
a === b and b === c is true.
Print "equilateral triangle".

----------------------------------------------------
TIME COMPLEXITY:
O(1), because only fixed comparisons are done.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because no extra structure is used.

----------------------------------------------------
EDGE CASES:
- Invalid sides must be checked before category.
- Zero or negative sides are invalid.
- Exactly two equal sides means isosceles.

====================================================
*/
function triangleCate(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) {
    console.log("not a valid triangle");
  } else if (a === b && b === c) {
    console.log("equilateral triangle");
  } else if (a !== b && b !== c && a !== c) {
    console.log("scalene triangle");
  } else {
    console.log("isosceles triangle");
  }
}

triangleCate(5, 5, 5);
