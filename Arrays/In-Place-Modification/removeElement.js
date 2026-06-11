/*
====================================================
REMOVE ELEMENT
====================================================

PLATFORM REFERENCES:
- LeetCode 27: Remove Element

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array arr and a value val, remove all
occurrences of val in-place and return the count of elements
that are not equal to val.

----------------------------------------------------
EXAMPLES:
Input:  arr = [2,3,3,2], val = 3
Output: 2
Modified valid part: [2,2]

Input:  arr = [0,1,2,2,3,0,4,2], val = 2
Output: 5
Modified valid part: [0,1,3,0,4]

----------------------------------------------------
INTUITION:
Only useful elements should be kept. A write pointer stores
where the next non-val element should be placed.

----------------------------------------------------
APPROACH:
1. Start a write pointer x at 0.
2. Traverse every element with i.
3. If arr[i] is not val, copy it to arr[x].
4. Move x forward.
5. x becomes the new valid length.

----------------------------------------------------
DRY RUN:
arr = [2,3,3,2], val = 3
i = 0 -> 2 kept at index 0, x = 1
i = 1 -> 3 skipped
i = 2 -> 3 skipped
i = 3 -> 2 kept at index 1, x = 2
Return 2.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each element is checked once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because removal is done in-place.

----------------------------------------------------
EDGE CASES:
- val not present returns original length.
- all elements equal val returns 0.
- empty array returns 0.

====================================================
*/
let arr = [2, 3, 3, 2];
let val = 3;

function removeEle(arr, val) {
  // x is the write pointer for values that are not equal to val.
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x += 1;
    }
  }
  return x;
}

let count = removeEle(arr, val);
console.log(count);

console.log(arr.slice(0, count));
