/*
====================================================
SELECTION SORT
====================================================

PLATFORM REFERENCES:
- Basic Sorting Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, sort it in ascending order using selection sort.

----------------------------------------------------
EXAMPLES:
Input:  [7,2,3,1,8,3,4,0]
Output: [0,1,2,3,3,4,7,8]

----------------------------------------------------
INTUITION:
For each position, find the smallest element in the remaining
unsorted part and place it there.

----------------------------------------------------
APPROACH:
1. Traverse the array from left to right.
2. Find the minimum element in the unsorted part.
3. Swap it with the current position.
4. Repeat until the array is sorted.

----------------------------------------------------
DRY RUN:
[7,2,3,1,8,3,4,0]
Pass 1 finds 0 and swaps with 7.
Pass 2 finds 1 and swaps with 2.
Continue until sorted.

----------------------------------------------------
TIME COMPLEXITY:
O(n^2)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Already sorted array still scans.
- Duplicate values are handled.
- Empty or single-element array stays unchanged.

====================================================
*/

let arr = [7, 2, 3, 1, 8, 3, 4, 0];

function SelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    let min = i;

    for (let j = i + 1; j < n ; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(SelectionSort(arr));
