/*
====================================================
MERGE SORT
====================================================

PLATFORM REFERENCES:
- Classic Divide and Conquer Sorting Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Sort an array in ascending order using merge sort.

----------------------------------------------------
EXAMPLES:
Input:  [7,6,5,4,3,2,1]
Output: [1,2,3,4,5,6,7]

----------------------------------------------------
INTUITION:
Split the array into smaller halves until each part is sorted,
then merge sorted halves back together.

----------------------------------------------------
APPROACH:
1. If array length is 1 or less, return it.
2. Split into left and right halves.
3. Recursively sort both halves.
4. Merge the sorted halves.

----------------------------------------------------
DRY RUN:
[7,6,5,4] -> [7,6] and [5,4]
[7,6] -> [6,7]
[5,4] -> [4,5]
merge -> [4,5,6,7]

----------------------------------------------------
TIME COMPLEXITY:
O(n log n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n)

----------------------------------------------------
EDGE CASES:
- Empty array returns empty array.
- Single-element array is already sorted.
- Duplicate values are handled.

====================================================
*/

let arr = [7, 6, 5, 4, 3, 2, 1];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let res = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort(arr));
