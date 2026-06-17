/*
====================================================
BINARY SEARCH
====================================================

PLATFORM REFERENCES:
- LeetCode 704: Binary Search

----------------------------------------------------
PROBLEM STATEMENT:
Given a sorted array and a target, return the index of the
target. If the target does not exist, return -1.

----------------------------------------------------
EXAMPLES:
Input:  arr = [-1,0,3,5,9,12], target = 9
Output: 4

----------------------------------------------------
INTUITION:
Because the array is sorted, compare with the middle element
and discard the half where the target cannot exist.

----------------------------------------------------
APPROACH:
1. Start left at 0 and right at arr.length - 1.
2. Find mid.
3. If arr[mid] is target, return mid.
4. If target is smaller, move right.
5. If target is larger, move left.

----------------------------------------------------
DRY RUN:
target = 9
mid = 2 -> arr[2] = 3, move left to 3
mid = 4 -> arr[4] = 9, return 4

----------------------------------------------------
TIME COMPLEXITY:
O(log n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Empty array returns -1.
- Target smaller/larger than all values returns -1.
- Array must be sorted.

====================================================
*/

let arr=[-1,0,3,5,9,12]

function binarySearch(arr,target){
    let left=0,right=arr.length-1

    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(target==arr[mid]){
            return mid
        }else if(target<arr[mid]){
            right=mid-1
        }else {
            left=mid+1
        }
    }
    return -1
}

console.log(binarySearch(arr,9));
