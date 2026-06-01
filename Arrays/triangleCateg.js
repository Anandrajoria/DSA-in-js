/*
Topic: Conditional Statements - Triangle Category
Problem pattern: Compare all sides

Goal:
- Classify a triangle as equilateral, scalene, or isosceles.

Important condition:
- First check if the sides can form a valid triangle.
- Triangle inequality rule:
  a + b > c, b + c > a, and a + c > b

Categories:
- Equilateral: all 3 sides are equal.
- Scalene: all 3 sides are different.
- Isosceles: exactly 2 sides are equal.

Complexity:
- Time: O(1), because only fixed comparisons are done.
- Space: O(1), because no extra data structure is used.

Trick to remember:
- "All same = equilateral, all different = scalene, otherwise isosceles."
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
