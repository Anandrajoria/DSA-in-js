/*
Topic: Conditional Statements - Valid Triangle
Problem pattern: Triangle inequality check

Goal:
- Check whether 3 given side lengths can form a triangle.

Rule:
- A triangle is valid only when the sum of any 2 sides is greater than
  the third side.
- Conditions:
  a + b > c
  b + c > a
  a + c > b

Complexity:
- Time: O(1), because only fixed comparisons are done.
- Space: O(1), because no extra data structure is used.

Trick to remember:
- "Two sides together must beat the remaining side."
- If even one condition fails, the triangle is invalid.

Edge cases:
- Zero or negative side length cannot make a valid triangle.
- Example: 1, 2, 3 is invalid because 1 + 2 is not greater than 3.
*/
function isValidTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

isValidTriangle(10, 12, 5);
