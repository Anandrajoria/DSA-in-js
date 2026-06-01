/*
Topic: Basic Math - Minimum of Three Numbers
Problem pattern: Conditional comparison

Goal:
- Find the smallest value among 3 numbers.

Main idea:
- Compare one number against the other two.
- The number that is less than or equal to both others is the minimum.

Complexity:
- Manual comparison: Time O(1), Space O(1)
- Math.min: Time O(1), Space O(1)
- Ternary: Time O(1), Space O(1)
- Sort: Time O(1) for exactly 3 values, but sorting is generally O(n log n)
- Reduce: Time O(n), Space O(1) for n values

Trick to remember:
- For only 3 numbers, direct comparison or Math.min is simplest.
- Use reduce when the same idea should work for many numbers.

Edge cases:
- Equal values should still return the correct minimum.
- Negative numbers work with the same comparison logic.
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


// Technique 1: Built-in helper.
function minUsingMath(a, b, c) {
  console.log(Math.min(a, b, c));
}

// Technique 2: Ternary operators.
function minUsingTernary(a, b, c) {
  const m = a < b ? (a < c ? a : c) : b < c ? b : c;
  console.log(m);
}

// Technique 3: Sort and take the first value.
function minUsingSort(a, b, c) {
  const arr = [a, b, c];
  arr.sort((x, y) => x - y);
  console.log(arr[0]);
}

// Technique 4: Reduce values into one minimum.
function minUsingReduce(a, b, c) {
  const min = [a, b, c].reduce((prev, curr) => (curr < prev ? curr : prev), Infinity);
  return min;
}

// Example calls
minUsingMath(10, 5, 4);
minUsingTernary(10, 5, 4);
minUsingSort(10, 5, 4);
console.log(minUsingReduce(10, 5, 4));
