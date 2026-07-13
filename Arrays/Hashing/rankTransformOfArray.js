/*
====================================================
RANK TRANSFORM OF AN ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 1331: Rank Transform of an Array

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, replace each element with its rank after sorting
the unique values in ascending order. The smallest value has rank 1.

----------------------------------------------------
EXAMPLES:
Input:  [40,10,20,30]
Output: [4,1,2,3]

----------------------------------------------------
INTUITION:
Sorting reveals the order of values. A map stores each unique
number's rank so the original array can be transformed quickly.

----------------------------------------------------
APPROACH:
1. Copy and sort the array.
2. Assign ranks to unique values using a map.
3. Traverse the original array.
4. Replace each value with its mapped rank.

----------------------------------------------------
DRY RUN:
arr = [40,10,20,30]
sorted = [10,20,30,40]
rank map: 10->1, 20->2, 30->3, 40->4
answer = [4,1,2,3]

----------------------------------------------------
TIME COMPLEXITY:
O(n log n), because sorting dominates.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because a copy, map, and answer array are used.

----------------------------------------------------
EDGE CASES:
- Duplicate values get the same rank.
- Negative numbers work normally.
- Empty array returns empty array.

====================================================
*/

let arr = [40, 10, 20, 30];

function rankTranform(arr) {
  let copy = arr.slice();

  copy = copy.sort((a, b) => a - b);

  let map = new Map();
  let rank = 1;
  for (let num of copy) {
    if (!map.has(num)) {
      map.set(num, rank);
      rank++;
    }
  }
  let ans = [];
  for (let num of arr) {
    ans.push(map.get(num));
  }
  return ans;
}

console.log(rankTranform(arr));
