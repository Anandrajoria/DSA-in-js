/*
====================================================
TWO SUM II - INPUT ARRAY IS SORTED
====================================================

PLATFORM REFERENCES:
- LeetCode 167: Two Sum II - Input Array Is Sorted

----------------------------------------------------
PROBLEM STATEMENT:
Given a sorted array and a target, find two numbers whose sum
equals the target. This implementation returns their indexes.

----------------------------------------------------
EXAMPLES:
Input:  arr = [2,7,11,15], target = 9
Output: [0,1]

Input:  arr = [2,7,11,15], target = 13
Output: [0,2]

----------------------------------------------------
INTUITION:
Because the array is sorted, if the current sum is too large,
move the right pointer left. If the sum is too small, move the
left pointer right.

----------------------------------------------------
APPROACH:
1. Start i at the beginning and j at the end.
2. Calculate arr[i] + arr[j].
3. If sum is greater than target, decrease j.
4. If sum is smaller than target, increase i.
5. If sum equals target, return [i, j].

----------------------------------------------------
DRY RUN:
arr = [2,7,11,15], target = 13
i = 0, j = 3 -> 2 + 15 = 17, move j
i = 0, j = 2 -> 2 + 11 = 13, return [0,2]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each pointer moves at most n times.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only two pointers are used.

----------------------------------------------------
EDGE CASES:
- No pair returns [].
- Sorted input is required for this approach.
- Duplicate values can still form a valid pair.

====================================================
*/

let arr = [2, 7, 11, 15];

function pairSumOpti(arr, tar) {
  // Two pointers work because the array is sorted.
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let ps=arr[i]+arr[j]

    if(ps>tar){
        j--
    }
    else if(ps<tar){
        i++
    }
    else{
        return [i,j]
    }
    }

  return []
}

console.log(pairSumOpti(arr, 13));
