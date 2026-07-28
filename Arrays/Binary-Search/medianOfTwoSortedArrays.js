/*
====================================================
MEDIAN OF TWO SORTED ARRAYS
====================================================

PLATFORM REFERENCES:
- LeetCode 4: Median of Two Sorted Arrays

----------------------------------------------------
PROBLEM STATEMENT:
Given two sorted arrays, return the median of the combined
sorted array in O(log(min(n1, n2))) time.

----------------------------------------------------
EXAMPLES:
Input:  [1,3], [2]
Output: 2

Input:  [1,2], [3,4]
Output: 2.5

----------------------------------------------------
INTUITION:
Binary search the partition point in the smaller array so that
left side contains half the elements and every left value is
less than or equal to every right value.

----------------------------------------------------
APPROACH:
1. Always binary search the smaller array.
2. Pick partition mid1 in arr1.
3. Derive partition mid2 in arr2.
4. Check if l1 <= r2 and l2 <= r1.
5. Calculate median from boundary values.

----------------------------------------------------
DRY RUN:
arr1 = [1,3], arr2 = [2]
Search smaller array [2].
Correct partition gives left max = 2.
Total length is odd, return 2.

----------------------------------------------------
TIME COMPLEXITY:
O(log(min(n1, n2)))

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- One array can be empty.
- Combined length can be odd or even.
- Arrays must already be sorted.

====================================================
*/

function medianOf2SortedArr(arr1,arr2){
    let n1=arr1.length
    let n2=arr2.length

    if(n1>n2) return medianOf2SortedArr(arr2,arr1)

    let low=0,high=n1
    let left=(n1+n2+1)>>1
    let n=n1+n2
    while(low<=high){
        let mid1=(low+high)>>1

        let mid2=left-mid1

        let l1=-Infinity, l2=-Infinity
        let r1=Infinity,r2=Infinity

        if(mid1<n1) r1=arr1[mid1]
        if(mid2<n2) r2=arr2[mid2]

        if(mid1-1>=0) l1=arr1[mid1-1]
        if(mid2-1>=0) l2=arr2[mid2-1]

        if(l1<=r2 && l2<=r1){
            if(n%2==1) return Math.max(l1,l2)
            return (Math.max(l1,l2)+Math.min(r1,r2))/2
        }

        else if(l1>r2){ high=mid1-1}
        else {low=mid1+1}
    }
    return 0
}

let arr1=[1,3]
let arr2=[2]
console.log(medianOf2SortedArr(arr1,arr2));
