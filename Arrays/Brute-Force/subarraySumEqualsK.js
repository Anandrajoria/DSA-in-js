/*
====================================================
SUBARRAY SUM EQUALS K
====================================================

PLATFORM REFERENCES:
- LeetCode 560: Subarray Sum Equals K

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array and an integer k, return the number of
continuous subarrays whose sum equals k.

----------------------------------------------------
EXAMPLES:
Input:  [1,1,1], k = 2
Output: 2

----------------------------------------------------
INTUITION:
Try every start index, keep extending the end index, and count
whenever the running sum equals k.

----------------------------------------------------
APPROACH:
1. Start count at 0.
2. For each start index i, set sum to 0.
3. Extend end index j from i to the end.
4. Add arr[j] to sum.
5. If sum equals k, increment count.

----------------------------------------------------
DRY RUN:
arr = [1,1,1], k = 2
subarray [1,1] at indexes 0..1 -> count 1
subarray [1,1] at indexes 1..2 -> count 2

----------------------------------------------------
TIME COMPLEXITY:
O(n^2)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Negative numbers work with brute force.
- Empty array returns 0.
- Multiple overlapping subarrays are counted.

====================================================
*/

function subArraySum(arr,k){
let count=0

    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]

            if(sum==k){
                count++
            }
        }
    }
    return count
}

console.log(subArraySum([1,1,1],2));
