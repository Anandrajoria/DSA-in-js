/*
====================================================
SEARCH INSERT POSITION
====================================================

PLATFORM REFERENCES:
- LeetCode 35: Search Insert Position

----------------------------------------------------
PROBLEM STATEMENT:
Given a sorted array and a target, return the index if the
target is found. Otherwise return the index where it should be
inserted to keep the array sorted.

----------------------------------------------------
EXAMPLES:
Input:  [1,3,5,6], target = 2
Output: 1

----------------------------------------------------
INTUITION:
Binary search ends with left positioned at the correct insert
location when the target is not found.

----------------------------------------------------
APPROACH:
1. Binary search for target.
2. Return mid if found.
3. Move left/right normally.
4. Return left after the loop.

----------------------------------------------------
DRY RUN:
target = 2
mid = 1 -> arr[1] = 3, move right
mid = 0 -> arr[0] = 1, move left
loop ends, return left = 1

----------------------------------------------------
TIME COMPLEXITY:
O(log n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Insert at beginning.
- Insert at end.
- Target already exists.

====================================================
*/

let arr = [1, 3, 5, 6];
function insertPosition(arr, target) {
  let left=0,right=arr.length-1

  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(target==arr[mid]){
        return mid
    }else if(target<arr[mid]){
        right=mid-1
    }else{
        left=mid+1
    }
  }
  return left

}

console.log(insertPosition(arr, 2));
