/*
====================================================
MINIMUM OF THREE NUMBERS
====================================================

PLATFORM REFERENCES:
- Basic DSA / Conditional Comparisons

----------------------------------------------------
PROBLEM STATEMENT:
Given three numbers, find and print or return the smallest
value among them.

----------------------------------------------------
EXAMPLES:
Input:  1, 2, 3
Output: 1

Input:  10, 5, 4
Output: 4

----------------------------------------------------
INTUITION:
The minimum number is the one that is less than or equal to
the other two numbers.

----------------------------------------------------
APPROACH:
1. Compare x with y and z.
2. If x is smallest, print x.
3. Else compare y with x and z.
4. If y is smallest, print y.
5. Otherwise print z.

----------------------------------------------------
DRY RUN:
x = 1, y = 2, z = 3
x <= y and x <= z is true.
Print 1.

----------------------------------------------------
TIME COMPLEXITY:
O(1), because only fixed comparisons are used.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because no extra structure is required.

----------------------------------------------------
EDGE CASES:
- Equal values should still return a valid minimum.
- Negative numbers work normally.
- Math.min is the shortest built-in approach.

====================================================
*/
function minOfThree(x, y, z) {
  if (x <= y && x <= z) {
    console.log(x);
  } else if (y <= x && y <= z) {
    console.log(y);
  } else {
    console.log(z);
  }
}

minOfThree(1, 2, 3);


function minUsingMath(a, b, c) {
  console.log(Math.min(a, b, c));
}

function minUsingTernary(a, b, c) {
  const m = a < b ? (a < c ? a : c) : b < c ? b : c;
  console.log(m);
}

function minUsingSort(a, b, c) {
  const arr = [a, b, c];
  arr.sort((x, y) => x - y);
  console.log(arr[0]);
}

function minUsingReduce(a, b, c) {
  const min = [a, b, c].reduce((prev, curr) => (curr < prev ? curr : prev), Infinity);
  return min;
}

minUsingMath(10, 5, 4);
minUsingTernary(10, 5, 4);
minUsingSort(10, 5, 4);
console.log(minUsingReduce(10, 5, 4));
