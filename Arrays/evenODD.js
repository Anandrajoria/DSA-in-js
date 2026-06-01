/*
Topic: Basic Math - Even or Odd
Problem pattern: Modulo operator

Goal:
- Check whether a number is divisible by 2.

Rule:
- n % 2 === 0 means the number is even.
- n % 2 !== 0 means the number is odd.

Complexity:
- Time: O(1), because only one calculation is done.
- Space: O(1), because no extra data structure is used.

Trick to remember:
- "%" gives the remainder.
- Even numbers leave remainder 0 when divided by 2.

Edge cases:
- 0 is even.
- Negative numbers also work with this logic.
*/

function evenOdd(n) {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOdd(2);
