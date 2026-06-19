/*
====================================================
MERGE SORTED ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 88: Merge Sorted Array

----------------------------------------------------
PROBLEM STATEMENT:
Given nums1 with enough trailing space and nums2, merge nums2
into nums1 as one sorted array.

----------------------------------------------------
EXAMPLES:
Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

----------------------------------------------------
INTUITION:
Fill nums1 from the back so unprocessed values are not overwritten.

----------------------------------------------------
APPROACH:
1. Start i at m - 1, j at n - 1, and k at m + n - 1.
2. Place the larger value at nums1[k].
3. Move pointers backward.
4. Copy remaining nums2 values if any.

----------------------------------------------------
DRY RUN:
nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]
place 6, then 5, then 3, then 2
result: [1,2,2,3,5,6]

----------------------------------------------------
TIME COMPLEXITY:
O(m + n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- nums2 empty leaves nums1 unchanged.
- nums1 valid part empty copies nums2.
- Duplicate values are handled.

====================================================
*/

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

function merge(nums1,m,nums2,n){
    let i=m-1,j=n-1,k=m+n-1

    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i]
            i--
        }else{
            nums1[k]=nums2[j]
            j--
        }
        k--
    }
    while(j>=0){
        nums1[k]=nums2[j]
        j--
        k--
    }
    return nums1
}

console.log(merge(nums1, 3, nums2, 3));
